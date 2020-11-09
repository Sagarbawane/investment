import React from 'react';
import PropTypes from 'utils/propTypes';

import classNames from 'classnames';

import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

import Avatar from '../Avatar';

const InvestmentCard = ({
  avatar,
  avatarSize,


  name,

  username,
  date_of_investment,
  capital_amount,
  return_interest_percentage,
  lock_in_period,



  children,
  className,
  ...restProps
}) => {
  const classes = classNames('bg-gradient-theme', className);

  return (
    <Card inverse className={classes} {...restProps}>
      <CardBody className="d-flex justify-content-center align-items-left flex-column">

        <div class="card-body">


          <p class="card-text">Date Of Investment:-{date_of_investment}</p>
          <p class="card-text">Amount:-{capital_amount}</p>
          <p class="card-text">Interest:-{return_interest_percentage}%</p>
          <p class="card-text">Period:-{lock_in_period} Months</p>

        </div>


      </CardBody>
      {children}
    </Card>
  );
};

InvestmentCard.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,

  name: PropTypes.string,

  date_of_investment: PropTypes.string,
  capital_amount: PropTypes.string,
  return_interest_percentage: PropTypes.string,
  lock_in_period: PropTypes.string,

  username: PropTypes.string,
  className: PropTypes.string,
};

InvestmentCard.defaultProps = {
  avatarSize: 80,
};

export default InvestmentCard;
