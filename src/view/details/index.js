import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import TxtTag from '../common/txt-tag';
import Replies from './replies';
import { connect } from 'react-redux';
import axios from 'axios';


class Details extends Component {

  componentWillMount(){
    this.getData(this.props.match.params.id)
  }

  getData(id) {
    this.props.dispatch((dispatch) => {
      dispatch({
        type: 'DETAILS_UPDATE'
      })
      axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
        .then(res => {
          dispatch({
            type: 'DETAILS_UPDATE_SUCCESS',
            data: res.data
          })
        }).catch(err => {
          dispatch({
            type: 'DETAILS_UPDATE_ERROR'
          })
        })
    })
  }

  render() {
    let { loading, data } = this.props
    return (
      <div className="wrap">
        <Card
          loading={loading}
          title={(
            <div>
              <h1>{data.title}</h1>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TxtTag data={data} />
                <Avatar src={data.author.avatar_url} />&nbsp;&nbsp;
                <Link to={'/user/' + data.author.loginname}>{data.author.loginname}</Link>
                &nbsp;发表于&nbsp;{data.create_at.split('T')[0]}
              </div>
            </div>
          )}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: data.content
            }}
          >
        </div>
        </Card>
        <Replies
          loading={loading}
          replies={data.replies}
          replyCount={data.reply_count}
        />
      </div>
    )
  }
}

export default connect(state => state.details)(Details)