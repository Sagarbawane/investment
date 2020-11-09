import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {connect} from 'react-redux'
import {startGetAddInvestment } from "../client/actions/investmentAction";

class InvestmentPage extends React.Component {

  
 constructor(props) {
    super(props);
    this.state = {
      capital_amount:"",
      return_interest_percentage:"",
      lock_in_period:""
     
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      capital_amount:this.state.capital_amount,
      return_interest_percentage:this.state.return_interest_percentage,
      lock_in_period:this.state.lock_in_period
     
    };
    console.log(formData)
    const redirect = () => {
      this.props.history.push("/dashboard");
    };
    this.props.dispatch(startGetAddInvestment(formData,redirect))
  };
  render() {
    return (
<div class="container ">
  
  <h1>Investment Form</h1>
  <br/>
        <Form onSubmit={this.handleSubmit}>

        <FormGroup>
            <Label>Totol Investment Amount</Label>

            <Input name="capital_amount"
              placeholder='Totol Amount'
                value={this.state.capital_amount}
                onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Interest Rate</Label>

            <Input name="return_interest_percentage"
            placeholder='Add In Percentege'
                value={this.state.return_interest_percentage}
                onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Lock_In_Period</Label>

            <Input name="lock_in_period"
             placeholder='Add In Months'
                value={this.state.lock_in_period}
                onChange={this.handleChange} />
          </FormGroup>
         
         
          <hr />
          <Button
            size="lg"
            className="bg-gradient-theme-left border-0"
            block
            onClick={this.handleSubmit}>
           Submit
          </Button>
  
  
  
         
        </Form>
        </div>
      );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    totolUser:state.totolUser
  };
};

export default connect(mapStateToProps )(InvestmentPage);
