import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_manager');

const categorySchema = mongoose.Schema({
  // 分类名称
  main_title: {type: String, required: true},
  // 课程数量
  main_total_count: {type: Number, required: true},
  // 是否显示
  main_is_show: {type: String, required: true},
  // 排序
  main_sort: {type: String, required: true},
  // 子课程
  sub_course: [
    {
      sub_title: {type: String, required: true},
      sub_total_count: {type: Number, required: true},
      sub_is_show: {type: Number, required: true},
      sub_sort: {type: String, required: true},
    }
  ]
});

const Category = mongoose.model('categorys', categorySchema);
export default  Category;