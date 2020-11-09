
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux'
import { startGetAddWithdrawal } from "../client/actions/withdrawalAction";

class WithdrawalPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      amount: "",


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
      amount: this.state.amount,


    };
    console.log(formData)
    const redirect = () => {
      this.props.history.push("/dashboard");
    };
    this.props.dispatch(startGetAddWithdrawal(formData, redirect()))
  };
  render() {
    return (
      <div class="container ">

        <h1>Withdrawal Form</h1>
        <br />
        <Form onSubmit={this.handleSubmit}>

          <FormGroup>
            <Label>Withdrawal Amount</Label>

            <Input name="amount"
              value={this.state.amount}
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
    totolUser: state.totolUser
  };
};

export default connect(mapStateToProps)(WithdrawalPage);
