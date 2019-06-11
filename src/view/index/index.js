import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';

class Index extends Component {
  render() {
    return (
      <Row className="wrap">
        <Col md={6} xs={0}>
          <Menu>
            <Menu.Item>
              <Link to="/index/ask">全部</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/good">精华</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/ask">问题</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/share">分享</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/job">招聘</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/dev">测试</Link>
            </Menu.Item>
          </Menu>         
        </Col>
        <Col md={18}></Col>
      </Row>

    )
  }
}

export default Index