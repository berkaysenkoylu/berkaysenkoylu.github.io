import React from 'react';

import svg from '../../../images/sprite.svg';
import classes from './Project.module.scss';

const Project = (props) => {
    let colors_light = ['rgba(255, 87, 129, 0.15)', 'rgba(255, 185, 0, 0.15)', 'rgba(41, 152, 255, 0.15)'];
    let colors_dark = ['rgba(186, 38, 93, 0.3)', 'rgba(206, 98, 40, 0.3)', 'rgba(86, 67, 250, 0.3)'];

    let image = require(`../../../images/${props.image}`);
    let style = {
        backgroundImage: `linear-gradient(to bottom, ${colors_light[props.index % 3]}, ${colors_dark[props.index % 3]}), url(${image})`
    }

    return (
        <div className={classes.Project}>
            <div className={[classes.Project__Side, classes.Project__Side__Front].join(' ')}>
                <div className={classes.Project__Picture} style={style}>
                    &nbsp;
                </div>
                <div className={classes.Project__Content}>
                    <h4 className={[classes.Project__Heading, classes[`Project__Heading__${props.index % 3 + 1}`]].join(' ')}>
                        {props.title}
                    </h4>
                    <div className={classes.Project__Description}>
                        {props.description}
                    </div>
                </div>
            </div>
            <div className={[classes.Project__Side, classes.Project__Side__Back, classes[`Project__Side__Back__${props.index % 3 + 1}`]].join(' ')}>
                <div className={classes.Project__Cta}>
                    <button className={classes.Project__Cta__Link} onClick={props.selectProject}>
                        <svg className={classes.Project__Cta__Link__Icon}>
                            <use xlinkHref={`${svg}#icon-info-circle`}></use>
                        </svg>
                        <span className={classes.Project__Cta__Link__Text}>
                            More Info
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Project;