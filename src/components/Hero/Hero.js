import React, { Component } from 'react';
import "./hero.css";
import one from '../assets/1.jpg'
export default class Hero extends Component {
  render() {
    return (
      <div className={this.props.cName}>
        <img src={one} alt=''/>
        <div className='hero-text'>
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
           <a href={this.props.url} className={this.props.btnClass}>
            {this.props.buttonText}
           </a>
        </div>
        </div>
      
    );
  }
}
