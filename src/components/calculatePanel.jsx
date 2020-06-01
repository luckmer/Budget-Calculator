import React from 'react';
import { Input  } from '../styledComponents/input';
import { Form } from '../styledComponents/form';

export default class CalculatePanel extends React.Component{
    render(){
        return(
                // {/* budget control */}
                <Form id=" budget_form" className = "budget_form"  >
                    <h5 id ="budget_form" className = "budget_form">please enter your budget</h5>
                    {/* add value */}
                    <div className="form_group">
                    <Input
                        name={"value"}
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        type = "number" 
                        className =" amount_control" 
                        id ="budget_input" 
                        placeholder ="Value"
                    />
                </div>
                    <div>Value: {this.props.value}</div>
            </Form>
        )
    }
}