import React from "react";

class DateTime extends React.Component {
   
    date(d){
        return d.toLocaleDateString("en-GB")
    }
    
    time(d){
        return d.toLocaleTimeString()
    }

    dateTime(d){
        return d.toLocaleDateString("en-GB") + " at " + d.toLocaleTimeString()
    }

    render(){

    let validated = true
    const errorMessage = []
    const d = new Date(this.props.dateTime)

    if(this.props.dateTimeFlag !== "date" && this.props.dateTimeFlag !== "time" && this.props.dateTimeFlag !== "dateTime"){
        validated = false;
        errorMessage.push('Incorrect flag, please choose date, time or dateTime')
    }  

    if(isNaN(d.getTime())){
        validated = false;
        errorMessage.push('Incorrect date format')
    }
    console.log(validated)
     
    return (
        <>
            {/* {d.getTime()} */}
            {validated === false && errorMessage}
            {this.props.dateTimeFlag === "date" && validated? this.date(d) : ''}
            {this.props.dateTimeFlag === "time" && validated? this.time(d) : ''}
            {this.props.dateTimeFlag === "dateTime"&& validated? this.dateTime(d) : ''}
        </>
    );
  }
}

export default DateTime;
