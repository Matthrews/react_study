import React, {Component} from 'react';
import md5 from 'md5';
import {editPwdData} from "../../api";

const S_KEY = 'idewdewW342ejwf.ITLIKE.coM';
// 1. 获取用户本地信息
const userData = JSON.parse(sessionStorage.getItem("userData"));
const IMG_PRE = 'http://localhost:1688/uploads/';

class ResetPwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: userData.token || '',
      old_pwd: '',
      new_pwd: '',
      re_pwd: ''
    }
  }

  render() {
    const {old_pwd, new_pwd, re_pwd} = this.state;
    return (
      <div className="container-fluid">
        <div className="body">
          <div className="repass">
            <div className="form-horizontal col-md-offset-2">
              <div className="form-group">
                <label htmlFor="" className="col-md-3 control-label">原密码</label>
                <div className="col-md-4">
                  <input
                    name="old_pwd"
                    type="text"
                    className="form-control input-sm"
                    value={old_pwd}
                    onChange={(e) => this._onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-3 control-label">新密码</label>
                <div className="col-md-4">
                  <input
                    name="new_pwd"
                    type="password"
                    className="form-control input-sm"
                    value={new_pwd}
                    onChange={(e) => this._onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-3 control-label">确认密码</label>
                <div className="col-md-4">
                  <input
                    name="re_pwd"
                    type="text"
                    className="form-control input-sm"
                    value={re_pwd}
                    onChange={(e) => this._onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-7">
                  <button
                    className="btn btn-success btn-danger  pull-right"
                    onClick={() => this._onSubmit()}
                  >修 改</button>
                  <button
                    className="btn btn-success btn-warning pull-right"
                    onClick={() => this.props.history.goBack()}
                    style={{marginRight: 10}}
                  >返 回</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onInputChange(e) {
    // 1.1 获取数据
    let inputName = e.target.name;
    let inputValue = e.target.value;
    console.log(inputName, inputValue);
    // 1.2 更新状态机
    this.setState({
      [inputName]: inputValue
    });
  }

  _onSubmit() {
    // 1.1 数据校验
    const {token, old_pwd, new_pwd, re_pwd} = this.state;
    if (new_pwd !== re_pwd) {
      alert("两次输入密码不一致！");
      return;
    }
    // 1.2 数据加密
    const md5_old_pwd = md5(old_pwd + S_KEY);
    const md5_new_pwd = md5(new_pwd + S_KEY);
    console.log(md5_old_pwd, md5_new_pwd);

    let params = new URLSearchParams();  // 相当于FormData
    params.append('token', token);
    params.append('old_pwd', md5_old_pwd);
    params.append('new_pwd', md5_new_pwd);
    // 1.3 调用接口
    editPwdData(params).then((res) => {
      console.log(res);
      // 删除本地数据
      if (res.status_code == 200) {
        alert("密码修改成功！");
        sessionStorage.removeItem("userData");
        // 返回首页重新登陆
        this.props.history.push('/');
      }
    }).catch((err) => {
      console.log(err);
      alert('操作有误！');
    });
  }
}

export default ResetPwd;