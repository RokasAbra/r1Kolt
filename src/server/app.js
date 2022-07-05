const express = require("express");
const app = express();
const port = 3008;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_test",
});
app.post("/admin/new_scooter", (req, res) => {
    const sql = `
    INSERT INTO scooters
    (registrationCode)
    VALUES (?)
    `;
    con.query(sql, [req.body.registrationCode], (err, result) => {
      if (err) throw err;
      res.send({
        result,
        msg: { text: "OK, new Cat was created", type: "success" },
      });
    });
  });
  //READ
app.get("/admin/new_scooter", (req, res) => {
    const sql = `
  SELECT *
  FROM new_scooter
  ORDER BY title
  `;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

app.listen(port, () => {
    console.log(`Bebras klauso porto Nr ${port}`);
}); 