# Full-Stack To-Do List Application

A classic single-page To-Do List application built with a complete client-server architecture. This project demonstrates the fundamentals of full-stack web development, featuring a RESTful API backend and a dynamic, interactive frontend.

![ToDo List App Demo](https://placehold.co/800x400/3498db/ffffff?text=ToDo+App+Screenshot)
*(Note: Replace the placeholder URL above with a screenshot of your actual application)*

---

## ✨ Key Features

- **Full CRUD Functionality:** Create, Read, Update, and Delete tasks seamlessly.
- **Single-Page Application (SPA):** A modern user experience where all interactions happen on a single page without reloads.
- **RESTful API:** A well-structured backend API provides clear and logical endpoints for managing tasks.
- **Persistent Storage:** All tasks are saved in a MySQL database, ensuring data is never lost.
- **Responsive Design:** A clean and simple interface that works smoothly on both desktop and mobile devices.

---

## 🛠️ Tech Stack

This project utilizes a classic and robust technology stack:

- **Frontend:**
  - **HTML5:** For the core structure of the application.
  - **CSS3:** For custom styling and responsive design.
  - **JavaScript (ES6+):** For all client-side logic, DOM manipulation, and API communication using the Fetch API.

- **Backend:**
  - **Node.js:** A JavaScript runtime for building the server-side application.
  - **Express.js:** A fast and minimalist web framework for Node.js, used to build the REST API.
  - **CORS:** Middleware to enable Cross-Origin Resource Sharing.
  - **Dotenv:** For managing environment variables securely.

- **Database:**
  - **MySQL:** A reliable relational database for storing all task data.
  - **mysql2:** A high-performance MySQL client for Node.js.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js** installed (which includes npm): [https://nodejs.org/](https://nodejs.org/)
- **MySQL Server** installed and running: [https://www.mysql.com/](https://www.mysql.com/)
- A code editor like **VS Code**.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/vemulakrupakar6/todo_list.git](https://github.com/vemulakrupakar6/todo_list.git)
    cd todo_list
    ```

2.  **Set up the Database:**
    - Open your MySQL client (like MySQL Workbench).
    - Run the following SQL script to create the database and the `todos` table:
      ```sql
      CREATE DATABASE IF NOT EXISTS todolist_db;
      USE todolist_db;
      CREATE TABLE IF NOT EXISTS todos (
          id INT AUTO_INCREMENT PRIMARY KEY,
          task VARCHAR(255) NOT NULL,
          completed BOOLEAN DEFAULT false,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      ```

3.  **Configure the Backend:**
    - Navigate to the `backend` directory:
      ```sh
      cd backend
      ```
    - Install the required npm packages:
      ```sh
      npm install
      ```
    - Create a `.env` file in the `backend` directory and add your MySQL credentials:
      ```env
      DB_HOST=localhost
      DB_USER=your_mysql_username
      DB_PASSWORD=your_mysql_password
      DB_NAME=todolist_db
      ```

4.  **Run the Server:**
    - While still in the `backend` directory, start the server:
      ```sh
      node server.js
      ```
    - The server will be running at `http://localhost:3000`.

5.  **Launch the Application:**
    - Open your web browser and navigate to:
      ```
      http://localhost:3000
      ```

---

## ⚙️ API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint         | Description                   |
| :----- | :--------------- | :---------------------------- |
| `GET`  | `/api/todos`     | Fetches all to-do items.      |
| `POST` | `/api/todos`     | Adds a new to-do item.        |
| `PUT`  | `/api/todos/:id` | Updates an existing to-do item. |
| `DELETE`| `/api/todos/:id` | Deletes a specific to-do item.  |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
*(Note: You may want to create a file named `LICENSE` in your repository and add the MIT License text to it.)*
