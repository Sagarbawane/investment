import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import { connect } from 'react-redux'

import user1Image from 'assets/img/users/100_1.jpg';
import WithdrawalCard from 'components/Card/WithdrawalCard';
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

class TotolWithdrawalPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",

    };
  }
  renderData = () => {
    console.log(this.props.user);

    const data = this.props.withdrawal.map((ele) => {
      console.log(ele);

      return (

        <Row>
          <Col lg={12} >
            <WithdrawalCard
              avatar={user1Image}

              date_of_withdrawal={ele.date_of_withdrawals}
              amount={ele.amount}




              style={{
                height: 300,
              }}
            />
          </Col>

        </Row>
      );
    });

    return <div className="row">{data}</div>;
  };
  renderUserData = () => {
    console.log(this.props.user);
    const Withdrawal = this.props.withdrawal;



    let userData = Withdrawal.filter((ele) => {
      if (ele.userId == this.props.user._id)
        return ele;

    });


    const data = userData.map((ele) => {
      return (


        <WithdrawalCard
          avatar={user1Image}
          date_of_withdrawal={ele.date_of_withdrawals}
          amount={ele.amount}



          style={{
            height: 300,
          }}
        />

      )

    })




    return <div className="row">{data}</div>;
  };

  render() {



    {
      if (this.props.user) {
        if (this.props.user.roles) {
          if (this.props.user.roles.includes('superAdmin' || 'admin')) {


            return (

              <div>
                <h3>All Withdrawal</h3>
                {this.renderData()}</div>

            )


          }
          else {
            return (

              <div>
                <h3>Your Withrawal</h3>
                {this.renderUserData()}</div>
            )
          }
        }
      }
    }

  }


}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    totolUser: state.totolUser,
    withdrawal: state.withdrawal
  };
};

export default connect(mapStateToProps)(TotolWithdrawalPage);
