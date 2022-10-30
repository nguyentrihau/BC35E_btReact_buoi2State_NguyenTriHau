import React, { Component } from 'react'
// import GlassList from './dataGlasses.json';
// const GlassList = require('./dataGlasses.json')
// console.log(GlassList);


export default class ListGlasses extends Component {
  renderGlasses = () => {
    const { data } = this.props;
    return data.map((item, index) => {
      return <div className='pic_glass col-sm-2' key={index}>
        <img src={item.url} onClick={()=>{
          this.props.viewDetail(item);
          document.getElementById("txt_gl").classList.add('addclass');
        }} className='img-fluid p-1' alt="" />
      </div>
    })
  }
  render() {
    return (
      <div style={{ gap: '10px' }} className='list_glass1  mt-5 row'>
        {this.renderGlasses()}
      </div>
    )
  }
}
