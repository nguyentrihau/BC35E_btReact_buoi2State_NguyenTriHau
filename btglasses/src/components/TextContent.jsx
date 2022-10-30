import React, { Component } from 'react'
// import GlassList from './dataGlasses.json'
export default class TextContent extends Component {
  renderTxt = () => {
    const {prodDetail } = this.props;
      return <div className="content" key={prodDetail.id}>
        <img src={prodDetail.url} className='kinh img-fluid' alt="" />
        {/* Header */}
        <div className="header">
          <h5 className="name">{prodDetail.name}</h5>
          <p className="price">{prodDetail.price} $</p>
        </div>
        {/* title */}
        <p className="desc">{prodDetail.desc}</p>
      </div>
  }
  render() {
    return (
      <div id='txt_gl' className='txt'>
        {this.renderTxt(  )}
      </div>
    )
  }
}
// import React, { Component } from 'react'

// export default class TextContent extends Component {
//   render() {
//     return (
//       <div className='txt'>TextContent</div>
//     )
//   }
// }
