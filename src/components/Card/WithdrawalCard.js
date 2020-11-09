import React from 'react';
import PropTypes from 'utils/propTypes';

import classNames from 'classnames';

import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

import Avatar from '../Avatar';

const WithdrawalCard = ({
    avatar,
    avatarSize,



    date_of_withdrawal,
    amount,




    children,
    className,
    ...restProps
}) => {
    const classes = classNames('bg-gradient-theme', className);

    return (
        <Card inverse className={classes} {...restProps}>
            <CardBody className="d-flex justify-content-center align-items-left flex-column">

                <div class="card-body">


                    <p class="card-text">Date oF Withdrawal:-{date_of_withdrawal}</p>
                    <p class="card-text">Amount:-{amount}</p>

                </div>


            </CardBody>
            {children}
        </Card>
    );
};

WithdrawalCard.propTypes = {
    avatar: PropTypes.string,
    avatarSize: PropTypes.number,



    date_of_withdrawal: PropTypes.string,
    amount: PropTypes.string,

    className: PropTypes.string,
};

WithdrawalCard.defaultProps = {
    avatarSize: 80,
};

export default WithdrawalCard;
