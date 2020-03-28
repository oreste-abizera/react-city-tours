import React, { Component } from 'react'
import './tour.css'

export default class Tour extends Component {
    state = {
        infoToggle : false
    }
    toggleInfo = ()=>{
        this.setState({
            infoToggle : !this.state.infoToggle
        })
    }
    render() {
        const {img,name,city,id,info} = this.props.info
        return (
            <article className="tour">
                <div className="imageContainer">
               <img src={img} alt="city" />
               <span className="closebtn" onClick={()=>this.props.removeTour(id)}>&times;</span>
               </div>
               <div className="info">
                <h3>City : {city}</h3>
                <h4>Name : {name}</h4>
                <h5 onClick={this.toggleInfo}>info {" "}</h5>
                {this.state.infoToggle &&  
                <p>{info}</p>
                }
               </div>
            </article>
        )
    }
}
