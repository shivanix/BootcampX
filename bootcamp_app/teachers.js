//Database connection code
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


//Accepted the cohort name as input from the user.
let teachersArgue =[`${process.argv[2]}`];

let query = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;`


pool.query(query, teachersArgue)
.then(res => {
  res.rows.forEach(row => {
    //console.log(row)
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));