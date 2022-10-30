import React, { Component } from 'react'
import Body from './Body'
import Header from './Header'
import GlassList from './dataGlasses.json';

// console.log(GlassList);
export default class TryGlasses extends Component {
  render() {
    return (
      <div className='bg-tryglass'>
        <div><Header /></div>
        <div><Body data={GlassList}/></div>
      </div>
    )
  }
}
