import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_manager');

const studentSchema = mongoose.Schema({
  // 注册账号
  reg_account: {type: String, required: true},
  // 昵称
  user_name: {type: String, required: true},
  // 年龄
  user_age: {type: String, required: true},
  // 性别
  user_sex: {type: String, required: true},
  // 地区
  area: {type: String, required: true},
  // 手机号码
  phone: {type: String, required: true},
  // 积分
  points: {type: String, required: true},
  // 注册时间
  reg_time: {type: Date, default: Date.now},
  // 登录时间
  last_login_time: {type: Date, default: Date.now},
});

const Student = mongoose.model('students', studentSchema);
export default  Student;