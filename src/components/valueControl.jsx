import React from 'react';
import { Input  } from "../styledComponents/input";
import { Form } from '../styledComponents/form';

export default class  ValueControl extends React.Component{
    render(){
        return(
                //  expense form
                <Form  id ="expense_form" className="expense_form"  >
                    <h5 className ="text_capitalize"> please enter your expense </h5>
                    <div className = "expense_form_group_input">
                    <Input
                        value = {this.props.BudgetValue}
                        onChange = {this.props.expenseInputHandleChange}
                        name ={"BudgetValue"} 
                        type ="text"
                        placeholder = "Text"
                        className = "amount_control"
                        id="expense_input"
                    />
                    </div>
                    <div>Text : {this.props.BudgetValue}</div>
                </Form>
                
        )
    }
}
