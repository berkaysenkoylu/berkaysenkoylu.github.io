import React from 'react';
import { Link } from 'gatsby';

import classes from './Home.module.scss';

const Home = () => {
    return (
        <div className={classes.Home}>
            <figure className={classes.Home__Shape}>
                <div className={classes.Home__Image}></div>
                <figcaption className={classes.Home__Image__Caption}>
                    <span role="img" aria-label="wave-emoji">👋</span> Hello! 
                </figcaption>
            </figure>

            <div className={classes.Home__Text}>
                <header>
                    <h2>Welcome!</h2>
                </header>
                <p>Pleasure to meet you! My name’s <strong>Berkay Senkoylu</strong>.</p>

                <p>I’m an ambitious, imaginative, and resourceful software developer.</p>
                
                <p>I develop full stack web applications and computer games.</p>

                <p>For more information, see my <Link to="/resume" className={classes.Resume__Link}>résumé</Link>.</p>
            </div>
        </div>
    )
}

export default Home;