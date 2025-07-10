
# BMW DataGrid Project

A **generic, reusable DataGrid component** built with **React**, **AG Grid**, and **Material UI (MUI)**, integrated with a backend API using **Express.js** and **MongoDB**.  
This project showcases a dynamic, searchable, and filterable data grid capable of displaying any structured data with customizable action buttons.

---

## 🚀 Project Overview

This app demonstrates:

- Displaying dynamic tabular data with **N columns**.
- A default **Actions** column with customizable buttons like **View** and **Delete**.
- Integration with a backend REST API for **search** and **filter** functionality.
- Use of **MongoDB** as the database to store and query data.
- Clean, responsive UI styled with **Material UI**.
- Routing for detailed views and navigation.

---

## 📂 Features

- **Generic DataGrid** supporting any data shape.
- **Search and filtering** powered by backend API calls.
- **Action buttons** per row (View details, Delete row).
- **Pagination** and sorting built-in with AG Grid.
- **Responsive layout** with Material UI components.
- Backend built with Express.js REST API.
- MongoDB NoSQL database storage.

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js and npm installed
- MongoDB instance running (local or cloud)
- Git installed

### Steps

1. Clone the repo:

git clone https://github.com/Vanshh29/BMW-DATAGRID-PROJECT.git
cd BMW-DATAGRID-PROJECT

2. Install Frontend dependencies :

cd frontend
npm install

3. Install Backend dependencies :

cd ../backend
npm install

4. Configure backend MongoDB connection in backend/config.js (or .env):

MONGODB_URI=mongodb://localhost:27017/bmw_datagrid

5. Run backend server:

node server.js

6. Run frontend app:

cd ../frontend
npm start


📁 Project Structure

/backend        
 # Express.js API, MongoDB connection, routes, controllers
/frontend       
 # React app with DataGrid component, routing, MUI styling


🧩 Key Components

    DataGridComponent.jsx – generic AG Grid wrapper with dynamic columns and action buttons.

    API services – fetchData, deleteData functions to interact with backend.

    Routing – React Router used for detail views and navigation.

    Backend API – REST endpoints for fetching, searching, filtering, and deleting data.

    MongoDB – data persistence.

🎯 Usage

    Search data via the search box (API powered).

    Click View on any row to navigate to detail page.

    Click Delete to remove a row.

    Pagination and sorting are supported out-of-the-box.

📈 Future Improvements

    Add advanced filtering UI integrated with backend.

    User authentication and role-based access.

    Export data to CSV/Excel.

    Add unit and integration tests.


📹 Demo Video

A short video demo can be found here ([DEMO](https://drive.google.com/file/d/1cEKh_O8nlwiW3hX5hsLQpywhCWCKotos/view?usp=drive_link)).


🤝 Contribution

Feel free to fork and raise issues or PRs to improve this project.

🙏 Acknowledgements

    AG Grid

    Material UI

    React

    Express.js

    MongoDB
