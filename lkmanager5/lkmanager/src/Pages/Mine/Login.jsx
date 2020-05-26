import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUserDataAction} from "./../../Store/actionCreators"
import md5 from 'md5';

const S_KEY = 'idewdewW342ejwf.ITLIKE.coM';  // 私盐

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_pwd: ""
    };
  }

  render() {
    return (
      <div className="login">
        <div className="login-wrap">
          <div className="avatar">
            <img src="./uploads/logo.jpg" className="img-circle" alt=""/>
          </div>
          <div className="col-md-offset-1 col-md-10">
            <div className="input-group input-group-lg">
              <span className="input-group-addon">
                <i className="fa fa-id-card-o"/>
              </span>
              <input
                name="user_name"
                type="text"
                className="form-control"
                placeholder="撩课口令"
                onChange={e => this._onInputChange(e)}
                onKeyUp={e => this._onInputKeyUp(e)}
              />
            </div>
            <div className="input-group input-group-lg">
              <span className="input-group-addon">
                <i className="fa fa-key"/>
              </span>
              <input
                name="user_pwd"
                type="password"
                className="form-control"
                placeholder="密码"
                onChange={e => this._onInputChange(e)}
                onKeyUp={e => this._onInputKeyUp(e)}
              />
            </div>
            <button
              type="button"
              className="btn btn-lg btn-danger btn-block"
              onClick={() => this._onSubmit()}
            >
              登 录
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 输入框发生变化时触发事件
  _onInputChange(e) {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    console.log(inputName, inputValue);  // 键值对
    this.setState({
      [inputName]: inputValue
    });
  }

  // 键盘回车时触发事件
  _onInputKeyUp(e) {
    if (e.keyCode === 13) {
      this._onSubmit();
    }
  }

  // 提交表单触发事件
  _onSubmit() {
    // 获取数据
    const {user_name, user_pwd} = this.state;
    // 验证数据
    if (!user_name || !user_pwd) {
      alert("输入口令不能为空！");
      return;
    }
    // 密码加密
    const md5_user_pwd = md5(user_pwd + S_KEY);
    console.log(md5_user_pwd);

    let params = new URLSearchParams();  // 相当于FormData
    params.append('user_name', user_name);
    params.append('user_pwd', md5_user_pwd);

    // 发起网路亲请求
    this.props.reqLogin(
      // 1. 直接提交数据出错
      // {
      //   '{"user_name":"tre","user_pwd":"0fa6ea9e14429f199e8471b3e1ccf35d"}': ''
      // }
      // user_name,
      // user_pwd: md5_user_pwd
      // 2. 使用URLSearchParams后提交的数据
      // {
      //   user_name: 'matthew',
      //   user_pwd: '95de582a47dcb49bf6986977460f682d'
      // }
      params
      , (userData) => {
        // alert("来了！");
        if (userData.token !== '') {
        // debugger;
          this.props.history.push('/');  // 意味着刷新，reducer里面数据就没了
        }
      });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reqLogin(data, callback) {
      const action = getUserDataAction(data, callback);
      dispatch(action);
    }
  }
};

export default connect(null, mapDispatchToProps)(Login);