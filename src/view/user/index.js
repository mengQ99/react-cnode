import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import data from './data';
import RecentList from './recent-list'

class User extends Component {
  render() {
    let { avatar_url, loginname, create_at, score } = data.data
    return (
      <div className="wrap">
        <Avatar src={avatar_url} style={{ width: 100, height: 100, borderRadius: '50%', margin: '10px auto', display: 'block' }} />
        <Row style={{ textAlign: 'center', margin: '20px 0' }}>
          <Col md={8}>用户名：<a>{loginname}</a></Col>
          <Col md={8}>积分：<a>{score}</a></Col>
          <Col md={8}>注册时间：<a>{create_at.split('T')[0]}</a></Col>
        </Row>
        <RecentList loading={false} data={data.data.recent_topics} title="最近创建的话题"/>
        <RecentList loading={false} data={data.data.recent_replies} title="最近回复的话题"/>
      </div>
    )
  }
}

export default User