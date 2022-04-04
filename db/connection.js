const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'ty8318372s',
  database: 'employee_tracker'
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
  });
  

module.exports = db;
