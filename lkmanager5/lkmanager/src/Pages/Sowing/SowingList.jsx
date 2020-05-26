import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSowingDataAction} from './../../Store/actionCreators';
import {removeSowingData} from './../../api/index';
import {Link} from "react-router-dom";

const IMG_PRE = 'http://localhost:1688/uploads/';

class SowingList extends Component {
    render() {
        const {sowingData} = this.props;
        console.log('sowingData', sowingData);
        return (
            <div className="container-fluid">
                <div className="body advert">
                    <ol className="breadcrumb">
                        <li><a href="/sowing/list">轮播图管理</a></li>
                        <li className="active">轮播图列表</li>
                    </ol>
                    <div className="page-title">
                        <a href="/sowing/add" className="btn btn-danger btn-sm pull-right">添加轮播图</a>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                        </div>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <td>序号</td>
                                <th>图片名称</th>
                                <th>大图</th>
                                <th>小图</th>
                                <th>跳转链接</th>
                                <th>上架时间</th>
                                <th>下架时间</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                sowingData.map((sowing, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>LK00{index + 1}</td>
                                            <td>{sowing.image_title}</td>
                                            <td><img src={IMG_PRE + sowing.image_url} alt={sowing.image_title} style={{width: 200, height: 50}}/></td>
                                            <td><img src={IMG_PRE + sowing.image_small_url} alt={sowing.image_title} style={{width: 100, height: 50}}/></td>
                                            <td>{sowing.image_link}</td>
                                            <td>{sowing.s_time.substring(0, 10)}</td>
                                            <td>{sowing.e_time.substring(0, 10)}</td>
                                            <td>
                                                {/*<a href="/sowing_edit" className="btn btn-primary btn-xs">编辑</a>*/}
                                                <Link
                                                    className="btn btn-primary btn-xs"
                                                    to={{
                                                        pathname: "/sowing/edit",
                                                        state: { sowing }
                                                    }}
                                                >编辑</Link>
                                                <button className="btn btn-danger btn-xs" onClick={() => this._removeSowing(sowing._id)}>删除</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.reqSowingData();
    }

    // delete one sowing by id
    _removeSowing(id) {
        removeSowingData(id).then((res) => {
            console.log(res);
            // request sowing data
            if (res.status_code === 200) {
                this.props.reqSowingData();
            }
        }).catch(() => {
            alert("删除轮播图失败！");
        })
    }
}

const mapStateToProps = (state) => {
    return {
        sowingData: state.sowingData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        reqSowingData() {
            const action = getSowingDataAction();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SowingList);