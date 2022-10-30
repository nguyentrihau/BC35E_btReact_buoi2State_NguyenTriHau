import React, { Component } from 'react'
import ListGlasses from './ListGlasses'
import Test from './Test'
import TextContent from './TextContent'


export default class Body extends Component {
    state = {
        glassesDetail:{
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    viewDetail = (glassesClick)=>{
        // console.log(glassesClick);
        this.setState({
            glassesDetail:glassesClick
        })
    }
    render() {
        const {data} = this.props;
        return (
            <div>
                <div className="mybody d-flex justify-content-around">
                    <div>
                        <div className='test'>
                            <Test/>
                            <TextContent data={data} prodDetail={this.state.glassesDetail}/>
                        </div>
                    </div>
                    <div className='test'><Test /></div>
                </div>

                <div className='listGlasses container '><ListGlasses data={data} viewDetail={this.viewDetail} /></div>
            </div>
        )
    }
}
