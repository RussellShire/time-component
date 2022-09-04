import React from "react";
import DateTime from "./DateTime";

class App extends React.Component {
  render(){
  const dateTime = '20:30 31 August 2022'
  const flag = 'time'
  return (
    <div>
      <h1>I'm the app</h1>
      <DateTime dateTime={dateTime} dateTimeFlag={flag}/>
    </div>
    );
  }
}

export default App;
