import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Mine/Login";
import User from "./Pages/User/User";

import SowingRouter from "./Pages/Sowing/SowingRouter";
import CourseRouter from "./Pages/Course/CourseRouter";
import MineRouter from "./Pages/Mine/MineRouter";

import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import * as constants from "./Store/actionType";

class App extends Component {
  componentWillMount() {
    this.props.reqLocalData();
  }

  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={User}/>
          <Route path="/mine" component={MineRouter}/>
          <Route path="/sowing" component={SowingRouter}/>
          <Route path="/course" component={CourseRouter}/>
          {/*go to this page for no match*/}
          <Route component={ErrorPage}/>
        </Switch>
      </Layout>
    );
    return (
      // primary router
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={
              this.props.userData ? (props) => LayoutRouter :
                () => <Redirect to="/login" push/>
            }
          />
          <Route path="/login" component={Login}/>
          <Route path="/" render={props => LayoutRouter}/>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    reqLocalData() {
      // get local data
      const userInfo = JSON.parse(sessionStorage.getItem("userData"));
      dispatch({
        type: constants.INIT_USER_DATA,
        userData: userInfo
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
