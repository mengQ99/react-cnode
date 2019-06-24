import React, { Component } from 'react';
import { Card } from 'antd';

export default class CardPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="wrap">
        {
          data.map((item, index) => {
            return (
              <Card
                title={item.title}
                type="inner"
                key={index}
              >
                <div dangerouslySetInnerHTML={{ __html: item.content }}>                 
                </div>
              </Card>
            )
          })
        }
      </div>
    )
  }
}