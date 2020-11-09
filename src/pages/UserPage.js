
import { connect } from 'react-redux'

import user1Image from 'assets/img/users/100_1.jpg';
import { UserCard } from 'components/Card';
import Page from 'components/Page';

import React from 'react';

import {

  Col,

  Row,
} from 'reactstrap';
class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",

    };
  }
  render() {
    (console.log(this.props.totolUser))
    return (
      <Page title="Users" breadcrumbs={[{ name: 'Users', active: true }]}>

        {this.props.totolUser.map((ele) => {
          if (ele.roles == 'user') {
            return (
              <Row>
                <Col md={7} >
                  <UserCard
                    avatar={user1Image}
                    title={ele.name}
                    email={ele.email}
                    address={ele.address}
                    username={ele.userName}
                    adharcard={ele.adharcard}
                    pancard={ele.pancard}
                    bankName={ele.bankName}
                    branchAddress={ele.branchAddress}
                    ifsc_code={ele.ifsc_code}
                    nomineeName={ele.nomineeName}
                    relation={ele.relation}
                    nominee_adharCard={ele.nominee_adharcard}
                    place={ele.place}

                    mobile={ele.mobile}

                    style={{
                      height: 300,
                    }}
                  />

                </Col>




              </Row>


            )
          }
        })}




      </Page>
    )

  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    totolUser: state.totolUser
  };
};

export default connect(mapStateToProps)(UserPage);
