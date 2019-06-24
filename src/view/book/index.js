import React, { Component } from 'react';
import CardPage from '../common/card-page';
import data from "./data"

export default class Book extends Component {
  render() {
    return <CardPage data={data}/>
  }
}