import React, {Component} from 'react';
import {getSourseDataAction} from "../../Store/actionCreators";
import {connect} from "react-redux";

const IMG_PRE = 'http://localhost:1688/uploads/';

class CourseList extends Component {
  render() {
    const {courseData} = this.props;
    console.log('courseData', courseData);
    return (
      <div className="container-fluid">
        <div className="body course-list">
          <ol className="breadcrumb">
            <li><a href="javascript:">课程管理</a></li>
            <li className="active">课程列表</li>
          </ol>
          <div className="courses">
            {
              courseData.map((course, index) => {
                return (
                  <div className="course" key={index}>
                    <div className="pic">
                      <img src={IMG_PRE + course.course_page} alt=""/>
                    </div>
                    <div className="info">
                      <a href="javascript:">{course.course_name}</a>
                      <ul className="list-unstyled">
                        <li>
                          <span>讲师：{course.course_teacher}</span>
                          <span>类别：{course.main_category}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.reqCourseData();
    const jwt = require('jsonwebtoken');
    const payload = {
      name: 'boom'
    };
    const secret = 'JQREAD';
    const token = jwt.sign(payload, secret); // 签发
    console.log(token)
  }
}

// get state to reducer
const mapStateToProps = (state) => {
  return {
    courseData: state.courseData
  }
};
// dispatch action to server
const mapDispatchToProps = (dispatch) => {
  return {
    reqCourseData() {
      const action = getSourseDataAction();
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);