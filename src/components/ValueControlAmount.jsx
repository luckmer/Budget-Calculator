import React from 'react';
import { Input  } from "../styledComponents/input";
import { Form } from '../styledComponents/form';

export default class ValueControlAmount extends React.Component{
    render(){
        return(
            <Form  id ="expense_form" className="expense_form" >
                <h5 className ="amount_text_capitalize"> please enter your expense amount</h5>
                <div className ="amount_form_group" >
                    <Input
                    name = {"amountValue"}
                    value = {this.props.amountValue}
                    onChange = {this.props.amountHandleChange}
                    type="number"
                    className = "amount_control"
                    id = "amount_input"
                    placeholder="Value"
                    />
                </div>
                <div>Value: {this.props.amountValue}</div>
            </Form>
        )
    }
}