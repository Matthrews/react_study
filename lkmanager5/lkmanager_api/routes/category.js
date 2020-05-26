import express from 'express';
import formidable from 'formidable';
import config from './../src/config';
import Category from "../models/Category";

const router = express.Router({});

/**
 * 往数据库中插入一条新纪录
 */
router.post('/category/api/add', (req, res, next) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = config.upload_path;
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err);
    }

    // 2. 操作数据库
    const category = new Category({
      // 分类名称
      main_title: fields.main_title,
      // 课程数量
      main_total_count: fields.main_total_count,
      // 是否显示
      main_is_show: fields.main_is_show,
      // 排序
      main_sort: fields.main_sort,
      // 子课程
      sub_course: [
        {
          "sub_title": fields.sub_title,
          "sub_total_count": fields.sub_total_count,
          "sub_is_show": fields.sub_is_show,
          "sub_sort": fields.sub_sort,
        },
      ]
    });
    category.save((err, result) => {
      if (err) {
        return next(err)
      }
      res.json({
        status_code: 200,
        result: '添加分类数据成功'
      });
    })
  });
});
/**
 * 获取分类列表
 */
router.get('/category/api/list', (req, res, next) => {
  Category.find().exec((err, categorys) => {
    if (err) {
      return next(err);
    }
    res.json({
      status_code: 200,
      result: categorys
    })
  });
});

module.exports = router;