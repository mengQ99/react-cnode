import React, { Component } from 'react';
import { Tag } from 'antd';

const tag = {
  top: { color: 'magenta', txt: '置顶' },
  good: { color: 'geekblue', txt: '精华' },
  job: { color: 'cyan', txt: '招聘' },
  share: { color: 'purple', txt: '分享' },
  ask: { color: 'green', txt: '问答' },
  dev: { color: 'lime', txt: '测试' }
}

const getTagType = (d) => {
  return d.top? 'top': d.good? 'good': d.tab
}

export default class TxtTag extends Component {
  render() {
    let t = tag[getTagType(this.props.data)]
    return <Tag color={t.color}>{t.txt}</Tag>
  }
}