import React, { Component } from "react";
import TableauReport from "tableau-react";

class HelloWorld extends Component {
  render() {
    const options = {
      //   height: 100,
      //   width: 100,
      hideTabs: false,
      hideToolbar: true
    };

    const filters = {
      Colors: ["Blue", "Red"],
      Sizes: ["Small", "Medium"]
    };

    const parameters = {
      Param1: "Value",
      Param2: "Other Value"
    };
    return (
      <div>
        <span>Hello World Testing</span>
        <TableauReport
          url="http://public.tableau.com/views/RegionalSampleWorkbook/Storms"
          filters={filters}
          parameters={parameters}
          options={options} // vizCreate options
          // Overwrite default query params
          // defaults to '?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes'
          query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
        />
        <TableauReport url="https://public.tableau.com/views/DashboardDesignContest-CTGEdits/RedesignedDashboard?:display_count=y" />
      </div>
    );
  }
}

export default HelloWorld;
