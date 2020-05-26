import React, { Component } from 'react';
import LKHeader from "../Header/LKHeader";
import LKAside from "../Aside/LKAside";

class Layout extends Component {
  render() {
    return (
      // 上面确定了，左边确定了，就差主面板
      <div className="App">
        <LKHeader />
        <div className="main">
          <LKAside />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;