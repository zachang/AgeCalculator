import React, { Component } from 'react';
import birthday from '../assets/birthday.jpeg';

class AgeStats extends Component {

  timeSince = (date) => {
    let today = new Date().getTime();
    let chosenDate = new Date(date).getTime();
    let dateDifference = Math.abs(today - chosenDate);
    let days = Math.floor(dateDifference / (1000*3600*24));
    let years = Math.floor(days/365);
    days = days - years * 365;
    let months = Math.floor(days/31);
    days = days - months * 31;


    return `${years}years, ${months}months, ${days}days`;
  };

  render() {
    return(
      <div>
        {
          this.props.date ?
            <div>
              <h3>{this.props.date}</h3>
              <h4>Congrats on {this.timeSince(this.props.date)} !!</h4>
              <img src={birthday} alt="birthday"/>
            </div>
            :
            <h4>Please, Enter valid date</h4>
        }

      </div>
    )
  }
}


export default AgeStats;