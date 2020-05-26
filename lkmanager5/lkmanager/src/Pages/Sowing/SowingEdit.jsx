import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {editSowingData} from './../../api/index';

const IMG_PRE = 'http://localhost:1688/uploads/';

class SowingEdit extends Component {
    constructor(props) {
        super(props);
        // received router
        console.log(this.props.location);
        const sowing = this.props.location.state.sowing;
        this.state = {
            id: sowing._id,
            image_title: sowing.image_title,
            image_url: IMG_PRE + sowing.image_url,
            image_small_url: IMG_PRE + sowing.image_small_url,
            image_link: sowing.image_link,
            s_time: sowing.s_time,
            e_time: sowing.e_time
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="body teacher-profile">
                    <ol className="breadcrumb">
                        <li><Link to="/sowing/list">轮播图管理</Link></li>
                        <li className="active">编辑轮播图</li>
                    </ol>
                    <div className="settings">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">图片名称</label>
                                <div className="col-md-5">
                                    <input
                                        ref="image_title"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="填写图片名称"
                                        defaultValue={this.state.image_title}
                                        onChange={(e) => this._dealInputValue(e, "image_title")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">大图片</label>
                                <div className="col-md-2 preview">
                                    <img src={this.state.image_url} style={{border: 1}}/>
                                    <input
                                        ref="image_url"
                                        type="file"
                                        className="form-control input-sm"
                                        placeholder="选择大图片"
                                        onChange={() => this._previewImage("image_url")}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">小图片</label>
                                <div className="col-md-2 preview">
                                    <img src={this.state.image_small_url} style={{border: 1}}/>
                                    <input
                                        ref="small_image_url"
                                        type="file"
                                        className="form-control input-sm"
                                        placeholder="选择小图片"
                                        onChange={() => this._previewImage("small_image_url")}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">跳转页面链接</label>
                                <div className="col-md-5">
                                    <input
                                        ref="image_link"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="填写跳转链接"
                                        defaultValue={this.state.image_link}
                                        onChange={(e) => this._dealInputValue(e, "image_link")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">计划上架时间</label>
                                <div className="col-md-5">
                                    <input
                                        ref="s_time"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="填写上架时间"
                                        defaultValue={this.state.s_time}
                                        onChange={(e) => this._dealInputValue(e, "s_time")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">计划下架时间</label>
                                <div className="col-md-5">
                                    <input
                                        ref="e_time"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="填写下架时间"
                                        defaultValue={this.state.e_time}
                                        onChange={(e) => this._dealInputValue(e, "e_time")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-8">
                                    <button onClick={() => this._dealWithClick()} className="btn btn-danger btn-sm pull-right">确认修改</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // handle change of text content of input infos
    _dealInputValue(e, type) {
        const value = e.target.value;
        if (type === "image_title") {
            this.setState({
                image_title: value
            });
        }
        else if (type === "image_link") {
            this.setState({
                image_link: value
            });
        }
        else if (type === "s_time") {
            this.setState({
                s_time: value
            });
        }
        else if (type === "e_time") {
            this.setState({
                e_time: value
            });
        }
    }

    // handle change of img content of input infos
    _previewImage(ref) {
        // get file uploaded
        let file = this.refs[ref].files[0];
        // modify image's info
        let src = "";
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        }else {
            src = "";
        }
        // reader resolved
        reader.onloadend = () => {
            src = reader.result;
            // console.log(src);
            if (ref === "image_url") {
                this.setState({
                    image_url: src
                });
            }
            else if (ref === "small_image_url"){
                this.setState({
                    image_small_url: src
                });
            }
        }
    }

    // confirm edit
    _dealWithClick() {
        // deal with text data
        const { id, image_title, image_link, s_time, e_time } = this.state;
        // deal with image data
        const {image_url, image_small_url} = this.props.location.state.sowing;
        // create form data
        let formData = new FormData();
        formData.append("id", id);
        formData.append("image_title", image_title);
        formData.append("image_link", image_link);
        formData.append("s_time", s_time);
        formData.append("e_time", e_time);

        formData.append("image_url", this.refs.image_url.files[0]|| image_url);
        formData.append("image_small_url", this.refs.small_image_url.files[0] || image_small_url);
        // debugger;  // 联调
        // send post
        editSowingData(formData).then((res) => {
            console.log(res);
            if (res.status_code === 200) {
                this.props.history.push("/sowing/list");
            }
        }).catch((err) => {
            console.log(err);
            alert("修改轮播图数据失败！");
        });
    }
}

export default SowingEdit;