import React, {Component} from 'react';
import {Link} from "react-router-dom";
import course from './../../Common/images/course.jpg';
import {connect} from "react-redux";

class CourseAddTwo extends Component {
  constructor(props) {
    super(props);

    const course_page = this.props.addCourseData.course_page;
    this.state = {
      course_page
    }
  }

  render() {
    const {course_page} = this.state;
    return (
      <div className="body course-add teacher-profile">
        <ol className="breadcrumb">
          <li><a href="javascript:;">课程管理</a></li>
          <li className="active">课程添加</li>
        </ol>
        <div className="steps">
          <ul className="forwards list-unstyled">
            <li>
              <Link to="/course/add_one" className="done">
                <b>1</b>
                基本信息
              </Link>
            </li>
            <li>
              <Link to="/course/add_two" className="active">
                <b>2</b>
                课程图片
              </Link>
            </li>
            <li>
              <Link to="/course/add_three">
                <b>3</b>
                课时管理
              </Link>
            </li>
          </ul>
          <div className="content settings">
            <div className="title">
              <h5>课程封面</h5>
            </div>
            <div className="picture col-md-offset-2">
              <div className="preview" style={{height: 225}}>
                <img src={course_page === "" ? course : course_page} alt=""/>
                <input
                  ref="course_page"
                  type="file"
                  className="form-control input-sm"
                  placeholder="选择课程图片"
                  onChange={() => this._previewImage("course_page")}
                />
              </div>
              <p className="tips">
                可上传jpg, gif, png格式文件, 图片建议尺寸大于400x225，文件大小不能超过2M。
              </p>
              <div className="col-md-2">
                <button
                  className="btn btn-danger btn-sm pull-right"
                  onClick={() => this._dealClick()}
                >下一步
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _previewImage(ref) {
    // get file uploaded
    let file = this.refs[ref].files[0];
    // modify image's info
    let src = "";
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    } else {
      src = "";
    }
    // reader resolved
    reader.onloadend = () => {
      src = reader.result;
      this.setState({
        course_page: src
      });
    }
  }

  _dealClick() {
    // 1. get data
    const { course_page } = this.state;
    // 2. validate data
    if (course_page === "") {
      alert("请上传课程封面图片!");
      return;
    }

    console.log(this.refs.course_page.files[0]);
    // 3. assign
    this.props.addCourseData.course_page = course_page;
    this.props.addCourseData.course_page_url = this.refs.course_page.files[0];  //传下去
    console.log(this.props.addCourseData);
    // debugger
    this.props.history.push("/course/add_three")
  }
}

const mapStateToProps = (state) => {
  return {
    addCourseData: state.addCourseData,
  }
};

export default connect(mapStateToProps, null)(CourseAddTwo);
