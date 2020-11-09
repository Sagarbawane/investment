import { STATE_LOGIN} from 'components/AuthForm';
import RegisterForm from 'components/RegisterForm';
import  ChangePasswordForm from 'components/ChangePasswordForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const ProfilePage = React.lazy(() => import('pages/ProfilePage'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
const UserPage = React.lazy(() => import('pages/UserPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));

const FormPage = React.lazy(() => import('pages/FormPage'));
//const UserDashboardPage = React.lazy(() => import('pages/UserDashboardPage'));
const InvestmentPage = React.lazy(() => import('pages/InvestmentPage'));
const WithdrawalPage = React.lazy(() => import('pages/WithdrawalPage'));
const AdminPage = React.lazy(() => import('pages/AdminPage'));
const TotolInvestmentPage = React.lazy(() => import('pages/TotolInvestmentPage'));
const TotolWithdrawalPage = React.lazy(() => import('pages/TotolWithdrawalPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            {/* <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            /> */}

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                { <Route exact path="/dashboard" component={DashboardPage} /> }
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route
              exact
              path="/signup"
              layout={EmptyLayout}
              component={RegisterForm}
            />
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/user" component={UserPage} />
                <Route exact path="/withdrawals" component={TotolWithdrawalPage} />
                <Route exact path="/investments" component={TotolInvestmentPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/admin" component={AdminPage} />
                <Route exact path="/badges" component={BadgePage} />
                <Route
                  exact
                  path="/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/changePassword" component={ChangePasswordForm} />
                <Route exact path="/withdrawal" component={WithdrawalPage} />
                <Route exact path="/investment" component={InvestmentPage} />
                <Route exact path="/forms" component={FormPage} />
              
                <Route exact path="/charts" component={ChartPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
