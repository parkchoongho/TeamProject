const express = require("express");
const router = express.Router();
const mysql = require("mysql");

/* GET home page. */
router.post("/", function(req, res, next) {
  //   const result = { msg: "구매오류" };
  //   const con = mysql.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     password: "mysql",
  //     database: "nodejs"
  //   });
  //   con.connect(err => {
  //     if (err) {
  //       return console.error(err.message);
  //     }
  //     console.log(`DB 연결됨 => 구입가격 : ${req.body.purchasePrice}`);
  //     const sql = `insert into parchase(user_no, item_no, donation) values(
  //         (select user_no from user where email='${req.session.email}'), (select item_no from),'${req.body.purchasePrice}')`;
  //     console.log(sql);
  //     con.query(sql, (err, results, fields) => {
  //       if (err) {
  //         console.error(err.meassage);
  //         res.json(JSON.stringify(result));
  //       } else {
  //         console.log(`${results} : ${fields}`);
  //         result.msg = `${req.body.registerName}님 가입되셨습니다.`;
  //         res.json(JSON.stringify(result));
  //       }
  //       con.end(err => {
  //         if (err) {
  //           return console.error(err.message);
  //         }
  //       });
  //     });
  //   });
});

module.exports = router;
