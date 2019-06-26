import React, { Component } from 'react';
import { Card, Avatar, List } from 'antd';
import { Link } from 'react-router-dom';

export default class Replies extends Component {
  render() {
    const { loading, replies, replyCount } = this.props;
    return (
      <Card
        loading={loading}
        title={replyCount + '条回复'}
        type="inner"
      >
        <List
          itemLayout="vertical"
          dataSource={replies}
          renderItem={item => (
            <List.Item extra={item.ups.length>0? <span>{item.ups.length}人赞过</span>: ''} key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.author.avatar_url} />}
                description={
                  <div>
                    <Link to={"/user/" + item.author.loginname}>
                      {item.author.loginname}
                    </Link>
                    发表于 {item.create_at.split('T')[0]}
                  </div>
                }
              />
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </List.Item>
          )}>
          
          </List>
      </Card>
    )
  }
}