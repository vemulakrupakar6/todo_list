const express=require('express');
const cors=require('cors');
const app=express();
const mysql=require('mysql2');

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Krupakar@51015',
    database: 'todo'
});

db.connect((err)=>{
    if(err){
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/',(req,res)=>{
    console.log('default route');
    db.query('select * from todoItems',(err, results) => {
        if (err) {
            console.error('Error fetching data', err);
            res.status(500).send('Error fetching data');
            return;
        }
        console.log('Data fetched successfully', results);
        res.json(results);
    });
})
app.post('/add-item',(req,res)=>{
    console.log(req.body);
    
    db.query(`insert into todoItems(itemDescription) values('${req.body.text}')`,(err, results) => {
        if (err) {
            console.error('Error occured', err);
        }
        console.log('Data inserted successfully', results);
        })
        res.send("added successfully");
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});