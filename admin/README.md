# 🏥 Full-Stack Doctor Appointment Booking System

A complete **Doctor Appointment Booking Platform** built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** that provides three main modules:
- **Admin Panel** – manage doctors and appointments  
- **Doctor Dashboard** – manage appointments and profile  
- **User Interface** – book appointments, view doctors, manage your profile  

This project is fully responsive and includes secure authentication, role-based access, and a modern UI.

---

## 🚀 Tech Stack

### **Frontend**
- React.js (Vite)
- React Router DOM
- React Toastify
- Context API for global state management
- Tailwind CSS for styling

### **Backend**
- Node.js + Express.js
- MongoDB with Mongoose
- Cloudinary for image storage
- dotenv for environment variables
- CORS enabled REST API

---


---

## ⚙️ Installation & Setup

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/yourusername/doctor-appointment-system.git
cd doctor-appointment-system

### **2️⃣ Backend Setup**
cd backend
npm install

Create a .env file inside the backend folder:
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret

Server will start on:
👉 http://localhost:4000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend will start on:
👉 http://localhost:5173

## 🔐 Authentication & Roles
| Role       | Description                                              | Access              |
| ---------- | -------------------------------------------------------- | ------------------- |
| **Admin**  | Manages doctors, appointments, and dashboard analytics   | `/admin-dashboard`  |
| **Doctor** | Views and manages their appointments and profile         | `/doctor-dashboard` |
| **User**   | Books appointments, views doctors, manages their profile | `/my-profile`       |


## 🧠 Features

### 👨‍⚕️ Admin
Add, edit, or remove doctors
View all appointments
Manage doctor list and availability
Dashboard analytics

### 👩‍⚕️ Doctor
Manage their appointments
View patient details
Update their profile information

### 🧍‍♂️ User
Browse doctors by speciality
Book appointments
View and manage upcoming appointment
Update personal profile

## 📡 API Endpoints
Base URL: /api/admin

| Method   | Endpoint             | Description          |
| -------- | -------------------- | -------------------- |
| `POST`   | `/login`             | Admin login          |
| `GET`    | `/doctors`           | Get all doctors      |
| `POST`   | `/add-doctor`        | Add new doctor       |
| `GET`    | `/appointments`      | Get all appointments |
| `DELETE` | `/delete-doctor/:id` | Remove doctor by ID  |

## 🎨 UI Previews

| Page              | Description                         |
| ----------------- | ----------------------------------- |
| 🏠 Home           | Landing page with doctor categories |
| 👨‍⚕️ Doctors     | List of available doctors           |
| 📅 Appointment    | Booking form for patients           |
| 📊 Dashboard      | Admin overview page                 |
| ⚙️ Doctor Profile | Doctor account management           |

## 📦 Dependencies Overview

### Frontend
react, react-dom, react-router-dom, react-toastify, tailwindcss

### Backend
express, cors, dotenv, mongoose, cloudinary, multer

## 🧑‍💻 Author

### 👤 Abdellah Khelif

## 📝 License
This project is open-source under the MIT License – feel free to use and modify it.

## ⭐ Support
If you find this project helpful, please give it a ⭐ on GitHub to show your support!