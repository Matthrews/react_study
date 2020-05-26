import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_manager');

const userSchema = mongoose.Schema({
  // 姓名
  real_name: {type: String, required: false},
  // 用户名
  user_name: {type: String, required: true},
  // 密码
  user_pwd: {type: String, required: true},
  // 头像
  icon_url: {type: String, required: false},
  // 性别
  sex: {type: String, required: false},
  // 手机号码
  phone: {type: String, required: false},
  // 邮箱
  e_mail: {type: String, required: false},
  // 加入日期
  join_time: {type: Date, required: false},
  // 自我介绍
  intro_self: {type: String, required: false},
  // 当前编辑的时间
  c_time: {type: Date, default: Date.now},
  // 最后编辑时间
  l_time: {type: Date, default: Date.now},
});

const User = mongoose.model('users', userSchema);
export default  User;