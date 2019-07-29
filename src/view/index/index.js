import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import IndexList from './list';

class Index extends Component {
  render() {
    let tab = this.props.match.params.id
    let menu = [
      { title: '全部', key: 'all' },
      { title: '精华', key: 'good' },
      { title: '问题', key: 'ask' },
      { title: '分享', key: 'share' },
      { title: '招聘', key: 'job' },
      { title: '测试', key: 'dev' },
    ]
    return (
      <Row className="wrap">
        <Col md={6}>
          <Menu id="indexMenu" defaultSelectedKeys={[this.props.location.pathname.split('/')[2]]} mode="inline">
            {
              menu.map(e => (
                <Menu.Item key={e.key}>
                  <Link to={"/index/"+ e.key}>{e.title}</Link>
                </Menu.Item>
              ))
            }
          </Menu>         
        </Col>
        <Col md={18}>
          <IndexList tab={tab}/>
        </Col>
      </Row>

    )
  }
}

export default Index