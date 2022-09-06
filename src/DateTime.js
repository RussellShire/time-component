import React from "react";

class DateTime extends React.Component {
    render(){

    const convertDate = () => {
        const d = new Date(this.props.dateTime)

        if(this.props.dateTimeFlag !== "date" && this.props.dateTimeFlag !== "time" && this.props.dateTimeFlag !== "dateTime"){
            throw new Error('use the correct flag names please: data, time or dateTime.') 
        }  

        if(isNaN(d.getTime())){
            throw new Error('use correct date format. Ideally ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) to ensure compatibility across browsers')
        
        }
        return d
    }

    try {
        convertDate()    
    } catch (e) {
        console.error(e);
    }
    
    const d = convertDate()

    return (
        <>
            {this.props.dateTimeFlag === "date" && d.toLocaleDateString("en-GB")}
            {this.props.dateTimeFlag === "time" && d.toLocaleTimeString()}
            {this.props.dateTimeFlag === "dateTime"&& d.toLocaleDateString("en-GB") + " at " + d.toLocaleTimeString()}
        </>
    );
  }
}

export default DateTime;
