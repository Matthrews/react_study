import React, {Component} from 'react';
import {connect} from "react-redux";
import {getCategoryDataAction} from "../../Store/actionCreators";

class CourseAdd extends Component {
  constructor(props) {
    super(props);
    const addCourseData = this.props.addCourseData;
    this.state = {
      course_name: addCourseData.course_name
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="body course-add">
          <ol className="breadcrumb">
            <li><a href="javascript:">课程管理</a></li>
            <li className="active">课程添加</li>
          </ol>
          <div className="steps create">
            <div className="title">
              <h5>创建课程 <small>CREATE A COURSE</small></h5>
            </div>
            <div className="form-horizontal  col-md-offset-3 col-md-6">
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">课程名称</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control input-sm"
                    placeholder="请填写课程名称"
                    value={this.state.course_name}
                    onChange={(e) => this._dealInputValue(e)}
                  />
                  <small className="text-danger">注意: 课程名称即对外展示的信息</small>
                </div>
              </div>
              <div className="col-md-11">
                <button
                  className="btn btn-danger btn-sm pull-right"
                  onClick={() => this._dealClick()}
                >创建课程
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.reqCategoryData();
  }
  _dealInputValue(e) {
    // 1. get input value
    const value = e.target.value;
    // update state
    console.log(value);
    this.setState({
      course_name: value
    })
  }

  _dealClick() {
    // 1. validate input value
    const {course_name} = this.state;
    if (course_name === "" || course_name === undefined) {
      alert("课程名称不能为空！");
      return;
    }
    this.props.addCourseData.course_name = course_name;
    // 2. go to next step
    this.props.history.push("/course/add_one");
  }
}

const mapStateToProps = (state) => {
  return {
    addCourseData: state.addCourseData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    reqCategoryData() {
      const action = getCategoryDataAction();
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseAdd);