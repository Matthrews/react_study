import express from 'express';
import mysql from './../src/mysqlConfig';

const router = express.Router({});
mysql.connect();

/**
 * 获取学生数据(所有)
 */
router.get('/stu/api/list', (req, res, next) => {
  // 1. 接收传递的参数
  let {page, pageSize} = req.query;
  page = Number.parseInt(page)  === 1 ? 2 : Number.parseInt(page);
  pageSize = Number.parseInt(pageSize);
  // 2. 查询数据
  let start = 0;
  // select floor(exp(sum(log(2 - 1) + log(10))));
  const query = mysql.query("select floor(exp(sum(log(" + (page - 1) + ") + log(" + (pageSize) + ")))) s;", (error, results, fields) => {
    if (error) {
      return next(error);
    }
    start = results[0].s;
    // console.log('results', results[0].s);
    // console.log('fields', fields);
    console.log('sql1', query.sql);

    const q = mysql.query("select * from students limit " + start + ", " + pageSize + "", (err, students) => {
      if (err) {
        return next(err);
      }
      console.log('sql2', q.sql);
      console.log('students', students.length);
      res.json({
        status_code: 200,
        result: students
      });
    });
  });


});

/**
 * 获取学生记录总数
 */
router.get('/stu/api/count', (req, res, next) => {
  mysql.query("select count(*) as c from students", (err, count) => {
    if (err) {
      return next(err);
    }
    console.log('count', count[0]['c']);
    res.json({
      status_code: 200,
      result: count[0]['c']
    })
  });
});

// mysql.end();  // 有这一行就报错

module.exports = router;