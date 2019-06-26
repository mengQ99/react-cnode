import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import data from './data';
import TxtTag from '../common/txt-tag';
import Replies from './replies'

const res = data.data

export default class Details extends Component {
  render() {
    return (
      <div className="wrap">
        <Card
          title={(
            <div>
              <h1>{res.title}</h1>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TxtTag data={res} />
                <Avatar src={res.author.avatar_url} />&nbsp;&nbsp;
                <Link to={'/user/' + res.author.loginname}>{res.author.loginname}</Link>
                &nbsp;发表于&nbsp;{res.create_at.split('T')[0]}
              </div>
            </div>
          )}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: res.content
            }}
          >
        </div>
        </Card>
        <Replies
          loading={false}
          replies={res.replies}
          replyCount={res.reply_count}
        />
      </div>
    )
  }
}