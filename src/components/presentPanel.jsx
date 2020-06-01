import React from 'react';
import CalculatePanel from './calculatePanel';
import ValueControlAmount from './ValueControlAmount';
import ValueControl from './valueControl';

export default class PresentPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: '', amountValue: '', BudgetValue: '' };
        //value
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    //Calculate panel
    handleChange(e){
        this.setState({[e.currentTarget.name]:e.currentTarget.value});
    }
    handleSubmit(e){
        e.preventDefault();
        //amount control
        if(this.state.amountValue === "" || this.state.value === "" || this.state.value === ""){
            return;
        }
    }
    render(){        
        return(
            <div className ="row_present_panel" >
                {/* value */}
                    <div className = "values">
                        <h4 className="info_title"> 
                        <CalculatePanel
                            value ={this.state.value }
                            handleSubmit = {this.handleSubmit}
                            handleChange = {this.handleChange}
                        />
                        </h4>
                        <h4 className ="budget" id="budget"> 
                        </h4>
                    </div>
                    {/* expenses */}
                    <div className = "values">
                        <h4 className ="info_title">
                        <ValueControlAmount
                            amountValue ={this.state.amountValue }
                            amountHandleSubmit = {this.handleSubmit}
                            amountHandleChange = {this.handleChange}
                        />
                        </h4>
                    {/* budget */}
                    <h4 className ="budget" id="expenses" ></h4>
                    </div>
                        <div className ="values">
                            <h4 className ="info_title"> 
                            <ValueControl
                                BudgetValue = {this.state.BudgetValue}
                                expenseInputHandleSubmit = {this.handleSubmit}
                                expenseInputHandleChange = {this.handleChange}
                            />
                            </h4>
                            <div className ="TotalValue">
                            { this.state.value - this.state.amountValue  + this.state.BudgetValue}  
                            </div>
                            <h4 className ="balance" id="balance"> </h4>
                        </div>
                    <div>
                </div>
            </div>
        )
    }
}  