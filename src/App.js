import React from "react";
import DateTime from "./DateTime";

class App extends React.Component {
  render(){

    const dateTime = '31 aug 2022'
    const flag = 'date'

  return (
    <div>
      <DateTime dateTime={dateTime} dateTimeFlag={flag}/>
    </div>
    );
  }
}

export default App;
