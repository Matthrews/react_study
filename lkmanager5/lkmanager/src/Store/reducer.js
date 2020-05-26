import * as constants from './actionType';
// 默认数据
const defaultState = {
  homeData: {},
  sowingData: [],
  userData: {},
  studentData: [],
  categoryData: [],
  addCourseData: {
    // 课程名称
    course_name: '',
    // 课程标题
    course_title: '',
    // 课程副标题
    course_sub_title: '',
    // 课程讲师
    course_teacher: '',
    // 课程连载状态{0：非连状态 1：更新中 2：已完成}
    course_serialize_status: '',
    // 主分类
    main_category: '',
    // 子分类
    sub_category: '',
    // 课程简介
    course_intro: '',
    // 课程标签
    course_tag: '',
    // 课程封面
    course_page: '',
    // 课程封面url
    course_page_url: {},
    // 课时管理
    // course_manager: [
    //   {
    //     c_title: '',
    //     c_video: '',
    //     c_intro: '',
    //     c_time: '',
    //   }
    // ]
  },
  courseData: [],
};

export default (state = defaultState, action) => {
  if (action.type === constants.INIT_HOME_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    // newState.homeData = state.homeData;
    newState.homeData = action.homeData;
    return newState;
  } else if (action.type === constants.INIT_SOWING_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.sowingData = action.sowingData;
    return newState;
  } else if (action.type === constants.INIT_USER_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    // 将用户数据存放在本地
    sessionStorage.setItem("userData", JSON.stringify(action.userData));
    newState.userData = action.userData;
    return newState;
  } else if (action.type === constants.INIT_STUDENT_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.studentData = action.studentData;
    return newState;
  } else if (action.type === constants.INIT_CATEGORY_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.categoryData = action.categoryData;
    return newState;
  } else if (action.type === constants.ADD_COURSE_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.addCourseData = action.addCourseData;
    return newState;
  } else if (action.type === constants.INIT_COURSE_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.courseData = action.courseData;
    return newState;
  }
  return state;
}