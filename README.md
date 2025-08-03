# 🏥 Healthcare Appointment Fullstack App

A full-stack web application for booking doctor appointments. Built with React for the frontend and Node.js + Express + SQLite for the backend.

---

## 🚀 Live Demo

- **Frontend (Netlify)**: [https://healthcarefullstack1.netlify.app](https://healthcarefullstack1.netlify.app)
- **Backend (Render)**: [https://healthcare-backend-og2g.onrender.com](https://healthcare-backend-og2g.onrender.com)

---

## 🖥️ Tech Stack

### Frontend (React.js)

- **React Router DOM v5** – Routing
- **APIs** – API calls
- **CSS** – Styling
- **React Hooks** – State and side effects
- **Deployed on Netlify**

### Backend (Node.js + Express)

- **Express.js** – Web framework
- **SQLite3** – Lightweight relational database
- **CORS** – To allow cross-origin requests
- **Nodemon** (dev) – Auto-restart backend on code changes
- **Deployed on Render**

---

## 📂 Project Structure

### Frontend

```bash
/src
  ├── components/
  ├── pages/
  ├── App.js
  └── index.js
Backend
bash
Copy
Edit
/
├── server.js
├── db.js
├── routes/
│   ├── doctors.js
│   └── appointments.js
🛠️ How to Run Locally
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/healthcare-fullstack.git
cd healthcare-fullstack
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
npm start
Runs on http://localhost:3000

3. Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
Runs on http://localhost:3001

Make sure you change API URLs to point to http://localhost:3000 during local development.

🚀 Deployment Instructions
Frontend (Netlify)
Push frontend code to GitHub.

Go to Netlify, link your GitHub repo.

Set build command: npm run build

Publish directory: build/

Ensure the backend Render URL is used in fetch/axios calls.

Backend (Render)
Push backend code to GitHub.

Go to Render, create a new Web Service.

Choose repo and set:

Build Command: npm install

Start Command: node server.js

Add environment variable:

ini
Copy
Edit
PORT = 3000
Enable auto-deploy on push.

🌱 Future Development
✅ Add Authentication (JWT or OAuth) for secure login

✅ Admin Panel for doctors to manage slots

📅 Appointment Calendar View

📬 Email Notification Integration

📱 Responsive Mobile-first Design Enhancements

🔍 Search / Filter by Speciality

📊 Dashboard Analytics for Doctors/Admin

🧪 Unit & Integration Testing (Jest, React Testing Library)
