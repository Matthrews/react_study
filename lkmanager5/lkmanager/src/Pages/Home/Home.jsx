import React, {Component} from 'react';
import {connect} from "react-redux";
import {getHomeDataAction} from './../../Store/actionCreators';
import LKEchartsOne from './../../Components/LKTool/LKEchartsOne';
import LKEchartsTwo from './../../Components/LKTool/LKEchartsTwo';

class Home extends Component {
    render() {
        const {homeData} = this.props;
        console.log('homeData', homeData);
        return (
            <div className="container-fluid">
                <div className="body teacher-profile">
                    <div className="profile">
                        <div className="row c1">
                            <div className="col-md-4">
                                <div className="cell s1">
                                    <i className="fa fa-users"></i>
                                    <h4>登录用户</h4>
                                    <h5>{homeData.login_user}</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="cell s2">
                                    <i className="fa fa-registered"></i>
                                    <h4>新增注册</h4>
                                    <h5>{homeData.new_register}</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="cell s3">
                                    <i className="fa fa-camera"></i>
                                    <h4>课程新增学员</h4>
                                    <h5>{homeData.new_stu_course}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row c1">
                            <div className="col-md-4">
                                <div className="cell s4">
                                    <i className="fa fa-safari"></i>
                                    <h4>班级新增学员</h4>
                                    <h5>{homeData.new_stu_classes}</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="cell s5">
                                    <i className="fa fa-opera"></i>
                                    <h4>新增会员</h4>
                                    <h5>{homeData.new_member}</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="cell s6">
                                    <i className="fa fa-question"></i>
                                    <h4>未回复问答</h4>
                                    <h5>{homeData.mot_reply}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="lk-chart">
                            <div className="chart">
                                <LKEchartsOne />
                            </div>
                            <div className="chart">
                                <LKEchartsTwo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.reqHomeData();
    }
}

// get state
const mapStateToProps = (state) => {
    return {
        homeData: state.homeData
    }
};
// dispatch action
const mapDispatchToProps = (dispatch) => {
    return {
        reqHomeData() {
            const action = getHomeDataAction();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
