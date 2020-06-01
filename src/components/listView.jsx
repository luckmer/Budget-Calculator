import React from 'react';
import PresentPanel from './presentPanel';
export default function ListView(){
    return(
        <div className=" View_expense_total_value_list"  id = "expense_list">
            <h5 className ="list_item" id ="listItemText" >expense title</h5>
            <h5 className ="list_item" id ="listIemValue" > expense value</h5>
            <h5 className ="list_item" id ="ToDoList" ></h5>
        </div>
    )
}