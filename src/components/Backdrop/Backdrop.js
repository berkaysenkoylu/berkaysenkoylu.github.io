import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import classes from './Backdrop.module.scss';

const portalRoot = typeof document !== `undefined` ? document.getElementById('backdrop') : null;

const Backdrop = (props) => {
    let element = typeof document !== `undefined` ? document.createElement('div') : null;

    useEffect(() => {
        portalRoot.appendChild(element);

        return () => {
            portalRoot.removeChild(element);
        }
    }, [element]);

    if(element) {
        return (
            ReactDOM.createPortal(
                props.show ? <div className={classes.Backdrop} onClick={props.clicked}/> : null,
                element
            )
        );
    }
    else {
        return null;
    }
    
}
export default Backdrop;