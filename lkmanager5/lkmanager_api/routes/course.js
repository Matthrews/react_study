import express from 'express';
import Course from './../models/Course';
import formidable from 'formidable';
import config from './../src/config';
import {basename} from 'path';

const router = express.Router({});

/**
 * 往数据库中插入一条新纪录
 */
router.post('/course/api/add', (req, res, next) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = config.upload_path;
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err);
    }
    // 1. 处理表单字段
    const body = fields;
    // 解析上传的文件名称, 存入到数据库
    body.course_page = basename(files.course_page.path);

    // 2. 操作数据库
    const course = new Course({
      // 课程名称
      course_name: body.course_name,
      // 课程标题
      course_title: body.course_title,
      // 课程副标题
      course_sub_title: body.course_sub_title,
      // 课程讲师
      course_teacher: body.course_teacher,
      // 课程连载状态{0：非连状态 1：更新中 2：已完成}
      course_serialize_status: body.course_serialize_status,
      // 主分类
      main_category: body.main_category,
      // 子分类
      sub_category: body.sub_category,
      // 课程简介
      course_intro: body.course_intro,
      // 课程标签
      course_tag: body.course_tag,
      // 课程封面
      course_page: body.course_page,
      sub_course: []
    });
    course.save((err, result) => {
      if (err) {
        return next(err)
      }
      // console.log(result);
      res.json({
        status_code: 200,
        result: '添加课程成功'
      });
    })
  });
});
/**
 * 获取课程数据(所有)
 */
router.get('/course/api/list', (req, res, next) => {
  // 1. 接收传递的参数
  let {page, pageSize} = req.query;
  page = Number.parseInt(page);
  pageSize = Number.parseInt(pageSize);
  // 2. 查询数据
  Course.find().skip((page - 1) * pageSize).limit(pageSize).exec((err, courses) => {
    if (err) {
      return next(err);
    }
    // console.log('courses', courses);
    res.json({
      status_code: 200,
      result: courses
    })
  });
});

module.exports = router;