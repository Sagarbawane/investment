import React from 'react';
import PropTypes from 'utils/propTypes';

import classNames from 'classnames';

import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

import Avatar from '../Avatar';

const UserCard = ({
  avatar,
  avatarSize,
  title,
  email,
  name,

  date,
  username,

  mobile,
  address,
  accountNo,
  adharcard,
  bankName,
  branchAddress,
  ifsc_code,
  nomineeName,
  nominee_adharCard,
  relation,
  pancard,
  place,


  text,
  children,
  className,
  ...restProps
}) => {
  const classes = classNames('bg-gradient-theme', className);

  return (

    <div class="card inverse className={classes} {...restProps}">




      <div class="card-body">
        <div class="p-3 flex-1">
          <h2 class="pb-3 font-weight-bold">Name:-{title} </h2>
        </div>
        <div class="d-block d-md-flex">



          <div class="p-3 flex-1">
            <p class="card-text">Email:-{email}</p>
            <p class="card-text">UserName:-{username}</p>
            <p class="card-text">Address:-{address}</p>
            <p class="card-text">Mobile:-{mobile}</p>
            <p class="card-text">AdharCard:-{adharcard}</p>
            <p class="card-text">PanCard:-{pancard}</p>

          </div>





          <div class="p-3 flex-1">
            <p class="card-text">Bank Name:-{bankName}</p>
            <p class="card-text">Branch :-{branchAddress}</p>
            <p class="card-text">IFSC:-{ifsc_code}</p>
            <p class="card-text">Nominee:-{nomineeName}</p>
            <p class="card-text">Realtion:-{relation}</p>
            <p class="card-text">Nominee AdharCard:-{nominee_adharCard}</p>
            <p class="card-text">Place:-{place}</p>
          </div>








        </div>


      </div>
    </div>
  );
};

UserCard.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  Email: PropTypes.string,
  date: PropTypes.string,
  email: PropTypes.string,
  accountNo: PropTypes.string,
  adharcard: PropTypes.string,
  bankName: PropTypes.string,
  branchAddress: PropTypes.string,
  ifsc_code: PropTypes.string,
  nomineeName: PropTypes.string,
  nominee_adharCard: PropTypes.string,
  relation: PropTypes.string,
  pancard: PropTypes.string,
  place: PropTypes.string,

  mobile: PropTypes.string,
  address: PropTypes.string,
  username: PropTypes.string,
  className: PropTypes.string,
};

UserCard.defaultProps = {
  avatarSize: 80,
};

export default UserCard;
