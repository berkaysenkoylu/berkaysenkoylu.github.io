import React from 'react';
import { Link } from "gatsby";

import svg from '../../../images/sprite.svg';
import classes from './NavLink.module.scss';

const NavLink = (props) => {
    return (
        <Link
            to={props.to}
            className={[classes.Link, classes[`Link__${props.number + 1}`]].join(' ')}
            activeClassName={classes[`Link__Active${props.number + 1}`]}
        >
            <svg className={[classes.Link__Icon, classes[`Link__Icon${props.number + 1}`]].join(' ')}>
                <use xlinkHref={`${svg}#icon-${props.icon}`}></use>
            </svg>
            <span>
                {props.linkName}
            </span>
        </Link>
    )
}

export default NavLink;