import React from 'react'


class Myapp extends React.Component {
 
  render() {
    let style={
      backgroundColor:this.props.hexCode
    }
    return (
        <>
            <div className="color" style={style}>

            </div>
        </>
        )
  }
}

export default Myapp