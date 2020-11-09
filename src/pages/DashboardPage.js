



import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import { connect } from 'react-redux'
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');
    let User = this.props.totolUser;
    let admin = User.filter((ele) => {
      if (ele.roles.includes('admin')) {
        return ele;
      }
    });
    let user = User.filter((ele) => {
      if (ele.roles.includes('user')) {
        return ele;
      }
    });
    let Investment = this.props.investment.map((ele) => {

      return ele;

    });
    let Withdrawal = this.props.withdrawal.map((ele) => {

      return ele;

    });
    let usercount = user.length
    let admincount = admin.length
    let investmentCount = Investment.length
    let withdrawalCount = Withdrawal.length
    {
      if (this.props.user) {
        if (this.props.user.roles) {
          if (this.props.user.roles.includes('superAdmin' || 'admin')) {
            return (
              <Page
                className="DashboardPage"
                title="Dashboard"
                breadcrumbs={[{ name: 'Dashboard', active: true }]}
              >
                <Row>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <NumberWidget
                      title="Total User"

                      number={user.length}
                      color="secondary"
                      progress={{
                        value: usercount,

                      }}
                    />
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <NumberWidget
                      title="Total Investment"
                      number={investmentCount}

                      color="secondary"
                      progress={{
                        value: investmentCount,

                      }}
                    />
                  </Col>



                  <Col lg={6} md={6} sm={6} xs={12}>
                    <NumberWidget
                      title="Totol Withdrawal"
                      subtitle="This month"
                      number={withdrawalCount}
                      color="secondary"
                      progress={{
                        value: withdrawalCount,

                      }}
                    />
                  </Col>



                  <Col lg={6} md={6} sm={6} xs={12}>
                    <NumberWidget
                      title="Totol Admin"

                      number={admin.length}
                      color="secondary"
                      progress={{
                        value: admincount,

                      }}
                    />
                  </Col>


                </Row>
                <Col md="12" sm="12" xs="12">
                  <Card>
                    <CardHeader>New Users</CardHeader>
                    <CardBody>
                      <UserProgressTable
                        headers={[
                          <MdPersonPin size={25} />,
                          'Name',
                          'UserName',
                          'Email',
                          '%',
                        ]}
                        usersData={userProgressTableData}
                      />
                    </CardBody>
                  </Card>
                </Col>


              </Page>
            )

          }
          else {
            return (
              <Page
                className="DashboardPage"
                title="Dashboard"
                breadcrumbs={[{ name: 'Dashboard', active: true }]}
              >
                <Row>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <NumberWidget
                      title="Total Investment"
                      subtitle="This month"
                      number="9.8k"
                      color="secondary"
                      progress={{
                        value: 75,
                        label: 'Last month',
                      }}
                    />
                  </Col>



                  <Col lg={6} md={6} sm={6} xs={12}>
                    <NumberWidget
                      title="Totol Withdrawal"
                      subtitle="This month"
                      number="3,400"
                      color="secondary"
                      progress={{
                        value: 90,
                        label: 'Last month',
                      }}
                    />
                  </Col>


                </Row>

              </Page>
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
    investment: state.investment,
    withdrawal: state.withdrawal
  };
};

export default connect(mapStateToProps)(DashboardPage);

