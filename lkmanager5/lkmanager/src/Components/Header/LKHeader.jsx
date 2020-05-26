import React, {Component} from 'react';

class LKHeader extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-custom">
                    <div className="navbar-header">
                        <a href="javascript:" className="navbar-brand">撩课数据分发管理系统</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="javascript:"><i className="fa fa-cloud-upload"></i>教育云中心</a></li>
                        <li><a href="javascript:"><i className="fa fa-yelp"></i>分销中心</a></li>
                        <li><a href="javascript:"><i className="fa fa-xing"></i>CRM对接中心</a></li>
                        <li><a href="/mine"><i className="fa fa-user"></i>个人中心</a></li>
                        <li><a href="javascript:"><i className="fa fa-bell"></i><span
                            className="badge">20</span></a></li>
                        <li><a style={{cursor: 'pointer'}} onClick={() => this._logOut()}>
                            <i className="fa fa-sign-out"></i>退出</a></li>
                    </ul>
                </nav>
            </div>
        );
    }

    // 退出登录
    _logOut() {
        // 1. 清除本地数据
        sessionStorage.removeItem("userData");
        // 2. 回到首页
        window.location.href = '/';
    }
}

export default LKHeader;
