import React, { Component } from 'react';
import CardPage from '../common/card-page';
import data from './data';

class About extends Component {
  render() {
    return <CardPage data={data}/>
  }
}

export default About