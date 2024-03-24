import React from 'react'
import Myapp from './Myapp'
import "Rendomcolor.css";
class Rendomcolor extends React.Component {
    constructor(){
        super();
        this.state = {
            colorNum:1,
            colors:[]
        };
        for(let i=0;i<this.state.colorNum;i++){
            this.state.colors.push({hexCode:this.generateColor()})
        }

    }

    generateColor(){
        return '#'+Math.rendom().tostring(16).substr(-6);

    }
    updatecolor(index){
        let colors=this.state.colors.slice();
        const currentColor=this.generateColor();
        colors[index].hexCode=currentColor
        this.state({
            colors:colors
        })
    }
  render() {
    return (
      <>
        <div className='color_container'>
            {this.state.colorNum.map((color,index)=>
                <Myapp key={`color-${index}`} index={index} update={this.updatecolor.bind(this)} hexCode={color.hexCode} />
            )}
        </div>
      </>
    )
  }
}

export default Rendomcolor