import React, { Component } from 'react';
import { Layout, Row, Col, Divider, Icon, Dropdown, Button } from 'antd';
import NavMenu from './nav-menu';

class MainHeader extends Component {
  render() {
    return (
      <Layout.Header>
        <Row>
          <Col md={6} xs={24}><h1 id="logo">cnode</h1></Col>
          <Col md={18} xs={0}>
            <Divider type="vertical"></Divider>
            <NavMenu mode="horizontal" className="header-nav"/>
          </Col>
          <Col md={0} xs={24} style={{ position: 'absolute', top: 0, right: 0, width: 'auto' }}>
            <Dropdown 
              overlay={( <NavMenu/> )} 
              trigger={['click']}
              placement="bottomLeft"
            >
              <Button type="link">
                <Icon type="menu" style={{fontSize: 18, color: '#FFF'}}/>
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}
export default MainHeader