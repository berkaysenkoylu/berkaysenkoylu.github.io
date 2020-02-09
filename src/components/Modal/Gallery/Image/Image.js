import React from 'react';

import classes from './Image.module.scss';

const Image = (props) => {
    let classList = [classes.Figure];

    let image = require(`../../../../images/${props.imageName}`);

    if(!props.isShowcase) {
        if(!props.isSelected) {
            classList = [classes.Figure, classes.NotSelected];
        }
        else {
            classList = [classes.Figure, classes.Selected];
        }
    }

    return (
        <figure className={classList.join(' ')} onClick={props.clicked}>
            <img src={image} alt={props.imageAlt} />
        </figure>
    )
}

export default Image;