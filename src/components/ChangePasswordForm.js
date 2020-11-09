
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux'
import { startChangePassword } from "../client/actions/userAction";

class ChangePasswordForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {


      password: "",

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


      password: this.state.password,

    };
    console.log(formData)
    const redirect = () => {
      this.props.history.push("/");
    };
    console.log(formData)
    const _id = this.props.user._id
    console.log(_id)
    this.props.dispatch(startChangePassword(_id, formData, redirect))
  };
  render() {
    return (
      <div class="container ">

        <h1>Change Password</h1>
        <br />
        <Form onSubmit={this.handleSubmit}>

          <FormGroup>

            <Label>Password</Label>

            <Input name="password"

              value={this.state.password}
              onChange={this.handleChange} />
          </FormGroup>

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

export default connect(mapStateToProps)(ChangePasswordForm);
