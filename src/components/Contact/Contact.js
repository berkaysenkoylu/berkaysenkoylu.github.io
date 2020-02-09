import React from 'react';

import svg from '../../images/sprite.svg';
import classes from './Contact.module.scss';

const Contact = () => {
    return (
        <section className={classes.Contact}>
            <header className={classes.Contact__Header}>
                <h2>Always happy to hear from you!</h2>
            </header>

            <div className={classes.Contact__Text}>
                <p>
                    <svg className={classes.Contact__Text__Icon}>
                        <use xlinkHref={`${svg}#icon-envelop`}></use>
                    </svg>
                    senkoylu_berkay@yahoo.com
                </p>

                <a href="https://github.com/berkaysenkoylu">
                    <svg className={classes.Contact__Text__Icon}>
                        <use xlinkHref={`${svg}#icon-github`}></use>
                    </svg>
                    Github
                </a>
            </div>
        </section>
    )
}

export default Contact;