import React, { Component } from 'react';
import { Card, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';

export default class RecentList extends Component {
  render() {
    console.log(this.props)
    const { loading, title, data } = this.props
    return (
      <Card
        loading={loading}
        title={title}
        type="inner"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
              <List.Item key={item.id} style={{position: 'relative', lineHeight: '32px'}}>
                <Avatar src={item.author.avatar_url}/>
                <Link style={{margin: '0 10px'}} to={'/user/'+item.author.loginname}>{item.author.loginname}</Link>
                <p className="listTitle"><Link to={'/details/'+item.id}>{item.title}</Link></p>
                <time style={{position: 'absolute', top: 10, right: 0}}>{item.last_reply_at.split('T')[0]}</time>
              </List.Item>
            )
          }
        >

        </List>
      </Card>
    )
  }
}

