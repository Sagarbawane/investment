
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux'
import { startRegisterUser } from "../client/actions/userAction";

class RegisterForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      address: "",
      adharcard: "",
      pancard: "",
      adharcard_path: "",
      pancard_path: "",
      bankName: "",
      branchAddress: "",
      accountNo: "",
      ifsc_code: "",
      upi_id: "",
      upi_mobile: "",
      nomineeName: "",
      relation: "",
      nominee_adharcard: "",
      nominee_adharcard_path: "",
      tds_path: "",
      agreement_path: "",
      place: "",



      userName: "",
      password: "",
      confirmPassword: "",
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
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      address: this.state.address,
      userName: this.state.userName,
      adharcard: this.state.adharcard,
      pancard: this.state.pancard,
      adharcard_path: this.state.adharcard_path,
      pancard_path: this.state.pancard_path,
      bankName: this.state.bankName,
      branchAddress: this.state.branchAddress,
      accountNo: this.state.accountNo,
      ifsc_code: this.state.ifsc_code,
      upi_id: this.state.upi_id,
      upi_mobile: this.state.upi_mobile,
      nomineeName: this.state.nomineeName,
      relation: this.state.relation,
      nominee_adharcard: this.state.nominee_adharcard,
      nominee_adharcard_path: this.state.nominee_adharcard_path,
      tds_path: this.state.tds_path,
      agreement_path: this.state.agreement_path,
      place: this.state.place,

      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    console.log(formData)
    const redirect = () => {
      this.props.history.push("/dashboard");
    };
    this.props.dispatch(startRegisterUser(formData, redirect))
  };
  render() {
    return (
      <div class="container ">

        <h1>Registration Form</h1>
        <br />
        <Form onSubmit={this.handleSubmit}>

          <FormGroup>
            <Label>Name</Label>

            <Input name="name"
              value={this.state.name}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>

            <Input name="email"
              value={this.state.email}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Mobile</Label>

            <Input name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>

            <Input name="address"
              value={this.state.address}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>AdharCard</Label>

            <Input name="adharcard"
              value={this.state.adharcard}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>PanCard</Label>

            <Input name="pancard"
              value={this.state.pancard}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>AdharCard-image-link</Label>

            <Input name="adharcard_path"
              value={this.state.adharcard_path}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>PanCard-image-link</Label>

            <Input name="pancard_path"
              value={this.state.pancard_path}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Bank</Label>

            <Input name="bankName"
              value={this.state.bankName}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>BranchAddress</Label>

            <Input name="branchAddress"
              value={this.state.branchAddress}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>AccountNo</Label>

            <Input name="accountNo"
              value={this.state.accountNo}
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>IFSC Code</Label>

            <Input name="ifsc_code"
              value={this.state.ifsc_code}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>UPI Id</Label>

            <Input name="upi_id"
              value={this.state.upi_id}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>UPI Mobile</Label>

            <Input name="upi_mobile"
              value={this.state.upi_mobile}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>NomineeName</Label>

            <Input name="nomineeName"
              value={this.state.nomineeName}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Relation</Label>

            <Input name="relation"
              value={this.state.relation}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Nominee_Adharcard</Label>

            <Input name="nominee_adharcard"
              value={this.state.nominee_adharcard}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Nominee_Adharcard-image-link</Label>

            <Input name="nominee_adharcard_path"
              value={this.state.nominee_adharcard_path}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>TDS-image-link</Label>

            <Input name="tds_path"
              value={this.state.tds_path}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Agreement-image-link</Label>

            <Input name="agreement_path"
              value={this.state.agreement_path}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Place</Label>

            <Input name="place"
              value={this.state.place}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>UserName</Label>

            <Input name="userName"
              value={this.state.userName}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>

            <Label>Password</Label>

            <Input name="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>

            <Label>ConfirmPassword</Label>

            <Input name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange} />
          </FormGroup>








          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              'Agree the terms and policy' : 'Remember me'
            </Label>
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

export default connect(mapStateToProps)(RegisterForm);
