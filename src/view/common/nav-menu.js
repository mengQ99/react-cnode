import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from 'antd';

class NavMenu extends Component {

  constructor(props){
    super(props)
    this.state = { cur: this.getCur(this.props.location) }
  }

  getCur(location){
    return location.pathname.split('/')[1]
  }

  shouldComponentUpdate(nextProps){
    debugger
    let cur = this.getCur(nextProps.location) 
    if(cur !== this.state.cur) {
      this.setState({cur})
      return false
    }
    return true
  }

  render(){
    let { mode, className } = this.props
    return (
      <Menu mode={mode} className={className} selectedKeys={[this.state.cur]}>
        <Menu.Item key="index"><Link to="/index/all"><Icon type="home"/>首页</Link></Menu.Item>
        <Menu.Item key="book"><Link to="/book"><Icon type="book"/>教程</Link></Menu.Item>
        <Menu.Item key="about"><Link to="/about"><Icon type="info-circle-o"/>关于</Link></Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(NavMenu)