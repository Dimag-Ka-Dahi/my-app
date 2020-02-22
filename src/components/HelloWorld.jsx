import React, { Component } from "react";
import TableauReport from "tableau-react";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <span>Hello World Testing</span>
        <TableauReport url="http://public.tableau.com/views/RegionalSampleWorkbook/Storms" />
      </div>
    );
  }
}

export default HelloWorld;
