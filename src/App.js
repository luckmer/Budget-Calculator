import React from 'react';
import './style/App.css';
import PresentPanel from './components/presentPanel';
import ListView from './components/listView';

export default class App extends React.Component {
  render(){
    return (
      <div className = "container">
        {/* title */}
          <div className = "tagText">budget App</div>
          {/* app information */}
          <div className ="row_present_panel">
              <PresentPanel/>
          </div>
          <div className=" View_expense_total_value_list"  id = "expense_list">
            <ListView/>
          </div>
      </div>
    );
  }

}




