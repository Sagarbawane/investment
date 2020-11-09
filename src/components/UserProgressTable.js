import React from 'react';
import PropTypes from 'utils/propTypes';
import {connect} from 'react-redux'

import { Table, Progress } from 'reactstrap';

import Avatar from 'components/Avatar';

import withBadge from 'hocs/withBadge';
import {
  MdAccountBox,MdSentimentVerySatisfied

} from 'react-icons/md';


class UserProgressTable extends React.Component{
  render(){
    let User = this.props.totolUser;
    let admin = User.filter((ele) => {
      if (ele.roles.includes('admin')) {
        return ele;
      }
    });
 
  return (
    <Table responsive>
      <thead>
        <tr>
          <th><MdAccountBox  size={32}/></th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Time</th>
         
        </tr>
      </thead>
      {this.props.totolUser.map((ele,)=>{
       let index=1
        if(ele.roles.includes('user')){
          return(
            <tbody>
        
            <tr>
          <th scope="row"><MdSentimentVerySatisfied  size={25}/></th>
          <td>{ele.name}</td>
          <td>{ele.userName}</td>
          <td>{ele.email}</td>
          <td>{ele.date}</td>
           
            </tr>
           
          </tbody>
          )
        }
      })}
     
    </Table>
  );
}
    
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    totolUser:state.totolUser
  };
};

export default connect(mapStateToProps )(UserProgressTable);

