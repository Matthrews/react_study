import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Mine from "../Pages/Mine/Mine";
import SowingList from "../Pages/Sowing/SowingList";
import SowingAdd from "../Pages/Sowing/SowingAdd";
import SowingEdit from "../Pages/Sowing/SowingEdit";
import CourseAdd from "../Pages/Course/CourseAdd";
import CourseList from "../Pages/Course/CourseList";
import CourseTopic from "../Pages/Course/CourseTopic";
import CourseCategory from "../Pages/Course/CourseCategory";

let routes = [
    {path: '/', component: Home, exact: true},
    {path: '/user', component: User},
    {path: '/mine', component: Mine},
    {path: '/sowing_list', component: SowingList},
    {path: '/sowing_add', component: SowingAdd},
    {path: '/sowing_edit', component: SowingEdit},
    {path: '/course_add', component: CourseAdd},
    {path: '/course_category', component: CourseCategory},
    {path: '/course_list', component: CourseList},
    {path: '/course_topic', component: CourseTopic},
];
export default routes;
