import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import TxtTag from '../common/txt-tag'
import axios from 'axios';


class IndexList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
    }
  }

  //父组件render，子组件就会触发componentWillReceiveProps方法
  componentWillReceiveProps(nextProps) {
    if (this.props.tab !== nextProps.tab) {
      this.setState({page: 1})
      this.getData(nextProps.tab, 1)
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.page !== nextState.page){
      this.getData(nextProps.tab, nextState.page)
      return false
    }
    return true
  }

  componentWillMount(){
    this.getData(this.props.tab, this.state.page)
  }

  getData(tab, page) {
    this.props.dispatch((dispatch) => {
      dispatch({ type: 'LIST_UPDATE' })
      axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
        .then(res => {
          dispatch({
            type: 'LIST_UPDATE_SUCCESS',
            data: res.data
          })
        })
        .catch(err => {
          dispatch({
            type: 'LIST_UPDATE_ERROR',
            data: err
          })
        })
    })
  }

  render() {
    let { loading, data } = this.props
    let pagination = {
      current: this.state.page,
      pageSize: 10,
      total: 999,
      onChange: cur => {
        this.setState({ page: cur })
      }
    }
    return <List
      loading={loading}
      dataSource={data}
      pagination={loading? false: pagination}
      renderItem={item => (
        <List.Item
          actions={["回复：" + item.reply_count, "访问：" + item.visit_count]}
          key={item.id}
          style={{ paddingLeft: 12, borderLeft: '1px solid #e8e8e8' }}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.author.avatar_url} />}
            title={
              <div>
                <TxtTag data={item} />
                <Link to={"/details/" + item.id}>{item.title}</Link>
              </div>
            }
            description={
              <p>
                <Link to={"/user/" + item.author.loginname}>
                  {item.author.loginname}
                </Link>&nbsp;
                发表于 {item.create_at.split('T')[0]}
              </p>
            }
          />
        </List.Item>
      )}>
    </List>
  }
}

export default connect(state => state.list)(IndexList)