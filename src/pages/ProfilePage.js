
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import { connect } from 'react-redux'

import user1Image from 'assets/img/users/100_1.jpg';
import { UserCard } from 'components/Card';
import Page from 'components/Page';

import React from 'react';

import {

  Col,

  Row,
} from 'reactstrap';
const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
class ProfilePage extends React.Component {


  render() {
    (console.log(this.props.totolUser))
    return (
      <Page title="Profile" breadcrumbs={[{ name: 'Profile', active: true }]}>


        <Row>
          <Col md={7}>
            <UserCard
              avatar={user1Image}
              title={this.props.user.name}
              email={this.props.user.email}
              address={this.props.user.address}
              username={this.props.user.userName}
              adharcard={this.props.user.adharcard}
              pancard={this.props.user.pancard}
              bankName={this.props.user.bankName}
              branchAddress={this.props.user.branchAddress}
              ifsc_code={this.props.user.ifsc_code}
              nomineeName={this.props.user.nomineeName}
              relation={this.props.user.relation}
              nominee_adharCard={this.props.user.nominee_adharcard}
              place={this.props.user.place}



              mobile={this.props.user.mobile}

              style={{
                height: 300,
              }}
            />



          </Col>

        </Row>






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

export default connect(mapStateToProps)(ProfilePage);
