import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_manager');

const courseSchema = mongoose.Schema({
  // 课程名称
  course_name: {type: String, required: true},
  // 课程标题
  course_title: {type: String, required: true},
  // 课程副标题
  course_sub_title: {type: String, required: true},
  // 课程讲师
  course_teacher: {type: String, required: true},
  // 课程连载状态{0：非连状态 1：更新中 2：已完成}
  course_serialize_status: {type: String, required: true},
  // 主分类
  main_category: {type: String, required: true},
  // 子分类
  sub_category: {type: String, required: true},
  // 课程简介
  course_intro: {type: String, required: true},
  // 课程标签
  course_tag: {type: String, required: true},
  // 课程封面
  course_page: {type: String, required: true},
  // 课时管理
  // course_manager: [
  //   {
  //     c_title: {type: String, required: true},
  //     c_video: {type: String, required: true},
  //     c_intro: {type: String, required: true},
  //     c_time: {type: String, required: true},
  //   }
  // ]
});

const Course = mongoose.model('courses', courseSchema);
export default  Course;