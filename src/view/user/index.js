import React, { Component } from 'react';
import { Avatar, Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import RecentList from './recent-list'
import axios from 'axios';

class User extends Component {

  componentWillMount(){
    this.getData(this.props.match.params.id)
  }

  shouldComponentUpdate(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      this.getData(nextProps.match.params.id)
      return false
    }
    return true
  }

  getData(id){
    this.props.dispatch((dispatch) => {
      dispatch({
        type: 'USER_UPDATE'
      })
      axios.get(`https://cnodejs.org/api/v1/user/${id}`)
        .then(res => {
          dispatch({
            type: 'USER_UPDATE_SUCCESS',
            data: res.data
          })
        }).catch(err => {
          dispatch({
            type: 'USER_UPDATE_ERROR'
          })
        })
    })
  }

  render() {
    let { avatar_url, loginname, create_at, score, recent_topics, recent_replies } = this.props.data
    let { loading } = this.props
    return (
      <div className="wrap">
        <Avatar src={avatar_url} style={{ width: 100, height: 100, borderRadius: '50%', margin: '10px auto', display: 'block' }} />
        <Row style={{ textAlign: 'center', margin: '20px 0' }}>
          <Col md={8}>用户名：<Button type="link">{loginname}</Button></Col>
          <Col md={8}>积分：<Button type="link">{score}</Button></Col>
          <Col md={8}>注册时间：<Button type="link">{create_at.split('T')[0]}</Button></Col>
        </Row>
        <RecentList loading={loading} data={recent_topics} title="最近创建的话题"/>
        <RecentList loading={loading} data={recent_replies} title="最近回复的话题"/>
      </div>
    )
  }
}

export default connect(state => state.user)(User)