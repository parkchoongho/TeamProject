const express = require("express");
const router = express.Router();
const mysql = require("mysql");

/* GET users listing. */
router.post("/", function(req, res, next) {
  //biz
  const result = { msg: "회원가입오류" };

  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "webproject"
  });

  con.connect(err => {
    if (err) {
      return console.error(err.message);
    }
    console.log(
      `DB 연결됨 => ${req.body.registerName} : ${req.body.registerEmail}`
    );

    const sql = `insert into member(name, email, password) values('${
      req.body.registerName
    }', '${req.body.registerEmail}','${req.body.registerPw}')`;

    console.log(sql);

    con.query(sql, (err, results, fields) => {
      if (err) {
        console.error(err.meassage);
        res.json(JSON.stringify(result));
      } else {
        console.log(`${results} : ${fields}`);
        result.msg = `${req.body.registerName}님 가입되셨습니다.`;
        res.json(JSON.stringify(result));
      }
      con.end(err => {
        if (err) {
          return console.error(err.message);
        }
      });
    });
  });
});

module.exports = router;
