import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class About extends React.Component {
  render() {
    return(
      <center>
        <br/> <br/> <br/>
        <p> This is an About page! </p>
      </center>
    );
  }
}

export default function printAbout() {
  return (<About />);
}
