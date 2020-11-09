import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import { connect } from 'react-redux'

import user1Image from 'assets/img/users/100_1.jpg';
import { UserCard } from 'components/Card';
import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
class AdminPage extends React.Component {
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
      <Page title="Admin" breadcrumbs={[{ name: 'Admin', active: true }]}>

        {this.props.totolUser.map((ele) => {
          if (ele.roles == 'admin') {
            return (
              <Row>
                <Col md={7}>
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

export default connect(mapStateToProps)(AdminPage);
