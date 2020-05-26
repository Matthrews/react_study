import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CourseCategoryAdd extends Component {
  render() {
    return (
      <div className="body course-category">
        <ol className="breadcrumb">
          <li><Link to="/course/category">课程管理</Link></li>
          <li className="active">课程分类</li>
        </ol>
        <div className="category-add">
          <form action="" className="form-horizontal">
            <div className="form-group">
              <label htmlFor="" className="col-md-4 control-label">名称</label>
              <div className="col-md-3">
                <input type="text" className="form-control input-sm" placeholder="填写分类名称"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-md-4 control-label">级别</label>
              <div className="col-md-2">
                <select name="" className="form-control input-sm">
                  <option value="">顶级分类</option>
                  <option value="">web大前端</option>
                  <option value="">JavaEE+大数据</option>
                  <option value="">Python+人工智能</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-md-4 control-label">排序</label>
              <div className="col-md-1">
                <input type="text" className="form-control input-sm" value="10"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-md-4 control-label">是否显示</label>
              <div className="col-md-3">
                <label className="checkbox-inline">
                  <input type="checkbox" checked/> 是
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox"/> 否
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-8">
                <Link to="/course/category" className="btn btn-sm btn-danger pull-right">保存</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CourseCategoryAdd;