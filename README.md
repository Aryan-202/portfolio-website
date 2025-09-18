```
    portfolio-backend/
│
├── package.json
├── server.js              # Entry point (starts Express server)
│
├── config/
│   ├── db.js              # Database connection (MongoDB/Postgres if needed)
│   ├── mailer.js          # Nodemailer transporter setup
│
├── routes/
│   ├── projectRoutes.js   # Routes for projects (GET/POST/etc. if dynamic)
│   ├── contactRoutes.js   # Routes for contact form
│   └── resumeRoutes.js    # Routes for resume (optional)
│
├── controllers/
│   ├── projectController.js  # Logic for project routes
│   ├── contactController.js  # Logic for sending email
│   └── resumeController.js   # Logic for resume handling
│
├── models/                # Only if you’re using DB
│   ├── Project.js
│   └── Message.js
│
├── utils/
│   └── validateInput.js   # Input validation helpers
│
└── .env                   # Secrets (email credentials, DB URI, etc.)

```