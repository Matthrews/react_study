import * as constants from './actionType';  // ES6
import {getHomeData, getSowingData, getUserData, getStudentData, getCategoryData, getSourseData} from './../api/index';
// 0. 获取首页数据
// export const getHomeDataAction = () => ({
//     type: constants.INIT_HOME_DATA
// });
// 因为集成了redux-thunk，所以可以直接返回函数
export const getHomeDataAction = () => {
  return (dispatch) => {
    // 请求网络数据
    getHomeData().then((res) => {
      if (res.status_code === 200) {
        const homeData = res.result[0];
        dispatch({
          type: constants.INIT_HOME_DATA,
          homeData
        });
      }
    }).catch(() => {
      console.log("request failed.");
    })
  }
};

// 1. 获取轮播图列表数据
export const getSowingDataAction = () => {
  return (dispatch) => {
    // 请求网络数据
    getSowingData().then((res) => {
      if (res.status_code === 200) {
        const sowingData = res.result;
        dispatch({
          type: constants.INIT_SOWING_DATA,
          sowingData
        });
      }
    }).catch(() => {
      console.log("request failed.");
    })
  }
};

// 2. 用户登陆
export const getUserDataAction = (data, callback) => {
  return (dispatch) => {
    // 请求网络数据
    getUserData(data).then(res => {
      console.log('userData', res);
      if (res.status_code === 200) {
        const userData = res.result;
        dispatch({
          type: constants.INIT_USER_DATA,
          userData
        });
        // 成功回调
        callback && callback(userData);
      } else {
        alert(res.result);
      }
    }).catch((err) => {
      console.log(err);
    });
  }
};

// 3. 获取学生列表数据
export const getStudentDataAction = (params) => {
  return (dispatch) => {
    // 请求网络数据
    getStudentData(params).then((res) => {
      if (res.status_code === 200) {
        const studentData = res.result;
        // console.log('studentData', studentData);
        dispatch({
          type: constants.INIT_STUDENT_DATA,
          studentData
        });
      }
    }).catch(() => {
      console.log("学生数据请求失败！");
    })
  }
};

// 4. 获取课程分类列表数据
export const getCategoryDataAction = () => {
  return (dispatch) => {
    // 请求网络数据
    getCategoryData().then((res) => {
      if (res.status_code === 200) {
        const categoryData = res.result;
        // console.log('categoryData', categoryData);
        dispatch({
          type: constants.INIT_CATEGORY_DATA,
          categoryData
        });
      }
    }).catch(() => {
      console.log("课程分类数据请求失败！");
    })
  }
};

// 5. 获取课程列表数据
export const getSourseDataAction = () => {
  return (dispatch) => {
    // 请求网络数据
    getSourseData().then((res) => {
      if (res.status_code === 200) {
        const courseData = res.result;
        // console.log('courseData', courseData);
        dispatch({
          type: constants.INIT_COURSE_DATA,
          courseData
        });
      }
    }).catch(() => {
      console.log("课程数据请求失败！");
    })
  }
};