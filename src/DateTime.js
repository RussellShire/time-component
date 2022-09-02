import React from "react";

class DateTime extends React.Component {
    render(){

    let validated = true
    
    if(this.props.dateTimeFlag !== "date" && this.props.dateTimeFlag !== "time" && this.props.dateTimeFlag !== "dateTime"){
        validated = false;
    }  
     
    return (
    <>
        {/* TESTING */}
        <h1>I'm the date time component {this.props.dateTime}</h1>
        <p>Date Flag: {this.props.dateTimeFlag}</p>
        <p>Valid input: {JSON.stringify(validated)}</p>

        {validated === false && 'incorrect input'}
        {this.props.dateTimeFlag === "date" && validated? 'this is a date' : ''}
        {this.props.dateTimeFlag === "time" && validated? 'this is a time' : ''}
        {this.props.dateTimeFlag === "dateTime"&& validated? 'this is a date and time': ''}
    </>
    );
  }
}

export default DateTime;
