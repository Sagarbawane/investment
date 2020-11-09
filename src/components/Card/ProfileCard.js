import React from 'react';
import PropTypes from 'utils/propTypes';

import classNames from 'classnames';

import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

import Avatar from '../Avatar';

const ProfileCard = ({
  avatar,
  avatarSize,
  title,
  email,
 
  date,
  
  text,
  children,
  className,
  ...restProps
}) => {
  const classes = classNames('bg-gradient-theme', className);

  return (
    <Card inverse className={classes} {...restProps}>
      <CardBody className="d-flex justify-content-center align-items-left flex-column">
        
        <div class="card-body">
        <h5 class="card-title">{title}</h5>
      
  <p class="card-text">{email}</p>

  <p class="card-text">{date}</p>

       
      </div>
        
        
      </CardBody>
      {children}
    </Card>
  );
};
 ProfileCard.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  title: PropTypes.string,
 
  date: PropTypes.string,
  email: PropTypes.string,

  className: PropTypes.string,
};
 ProfileCard.defaultProps = {
  avatarSize: 80,
};

export default ProfileCard;
