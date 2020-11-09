import logo200Image from 'assets/img/logo/logo_200.png';
import {connect} from 'react-redux'
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdPeople,
  MdMood,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdTransferWithinAStation,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
  
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
let  investmentItems;
let navItems;
let     withdrawalItems;





const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
   
    isOpenInvestment: false,
    isOpenWithdrawal: false,
  }

 
  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };
  

  render() {
    console.log(this.props.user)
    {if (this.props.user){
if(this.props.user.roles){
      if(this.props.user.roles.includes('superAdmin')){
    
         navItems = [
          { to: '/dashboard', name: 'Super Admin Dashboard', exact: true, Icon: MdDashboard },
          { to: '/profile', name: 'Profile', exact: false, Icon: MdAccountCircle },
          { to: '/user', name: 'Users', exact: false, Icon:  MdPeople },
          { to: '/admin', name: 'Admins', exact: false, Icon:MdMood },
          { to: '/signup', name: 'Register User', exact: false, Icon: MdChromeReaderMode },
         
         
          { to: '/widgets', name: 'Request', exact: false, Icon: MdSend },
          { to: '/changePassword', name: 'ChangePassword', exact: false, Icon: MdChromeReaderMode },
        ];
        
    }else if(this.props.user.roles.includes('admin')){
      navItems = [
        { to: '/dashboard', name:'Admin Dashboard', exact: true, Icon: MdDashboard },
        { to: '/profile', name: 'Profile', exact: false, Icon: MdAccountCircle  },
        { to: '/user', name: 'Users', exact: false, Icon: MdPeople},
      
      
        { to: '/changePassword', name: 'ChangePassword', exact: false, Icon: MdChromeReaderMode },
      ];
      investmentItems=[ { to: '/investment', name: ' Totol Investment', exact: false, Icon: MdInsertChart },
        { to: '/investment', name: 'investment', exact: false, Icon:MdTransferWithinAStation }]
        withdrawalItems=[ { to: '/investment', name: ' Totol Withdrawal', exact: false, Icon: MdInsertChart },
        { to: '/withdrawal', name: 'Withdrawal', exact: false, Icon:MdTransferWithinAStation }]
    } else{
        navItems = [
        { to: '/dashboard', name: ' Dashboard', exact: true, Icon: MdDashboard },
        { to: '/profile', name: 'Profile', exact: false, Icon: MdAccountCircle  },
     
       
        { to: '/widgets', name: 'Request', exact: false, Icon:MdSend},
        { to: '/changePassword', name: 'ChangePassword', exact: false, Icon: MdChromeReaderMode},
      ];
     
    }
    }
  }
    }
    console.log(this.props.user)
    {if (this.props.user){
if(this.props.user.roles){
      if(this.props.user.roles.includes('superAdmin')){
    
        investmentItems=[ { to: '/investments', name: ' All Investment', exact: false, Icon: MdInsertChart },
        { to: '/investment', name: 'investment', exact: false, Icon:MdTransferWithinAStation }]
        withdrawalItems=[ { to: '/withdrawals', name: ' All Withdrawal', exact: false, Icon: MdInsertChart },
        { to: '/withdrawal', name: 'withdrawal', exact: false, Icon:MdTransferWithinAStation }]
        
    }else if(this.props.user.roles.includes('admin')){
      
      investmentItems=[ { to: '/investments', name: ' ALL Investment', exact: false, Icon: MdInsertChart },
        { to: '/investment', name: 'investment', exact: false, Icon:MdTransferWithinAStation }]
        withdrawalItems=[ { to: '/withdrawals', name: ' ALL Withdrawal', exact: false, Icon: MdInsertChart },
        { to: '/withdrawal', name: 'Withdrawal', exact: false, Icon:MdTransferWithinAStation }]
    } else{
        
      investmentItems=[ { to: '/investments', name: ' ALL Investment', exact: false, Icon: MdInsertChart },
      { to: '/investment', name: 'investment', exact: false, Icon:MdTransferWithinAStation }]
      withdrawalItems=[ { to: '/withdrawals', name: '  ALL Withdrawal', exact: false, Icon: MdInsertChart },
      { to: '/withdrawal', name: 'Withdrawal', exact: false, Icon:MdTransferWithinAStation }]
    }
    }
  }
    }
  
   
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              
              <span className="text-white">
                Investment <FaGithub />
              </span>
            </SourceLink>
          </Navbar>
          { navItems !== undefined && (
        
          <Nav vertical>
            
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Investment')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Investment</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state. isOpenInvestment
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state. isOpenInvestment}>
              {investmentItems.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Withdrawal')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Withdrawal</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenWithdrawal
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenWithdrawal}>
              {withdrawalItems.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

          </Nav>
          )}
        </div>
      </aside>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    totolUser:state.totolUser
  };
};

export default connect(mapStateToProps )(Sidebar);


 
