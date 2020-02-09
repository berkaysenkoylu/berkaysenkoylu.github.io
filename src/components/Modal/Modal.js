import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import Gallery from './Gallery/Gallery';

const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;

const Modal = (props) => {
    const [modalClasses, setModalClasses] = useState([classes.ModalContainer]); // KEEP IT OR LEAVE IT

    let element = typeof document !== `undefined` ? document.createElement('div') : null;

    useEffect(() => {
        portalRoot.appendChild(element);
        return () => {
            portalRoot.removeChild(element);
        }
    }, [element]);

    useEffect(() => {
        setModalClasses([classes.ModalContainer]); // KEEP IT OR LEAVE IT
    }, [props.show]);

    const closeModalHandler = () => {
        props.closed();

        setModalClasses([classes.ModalContainer, classes.ModalContainer__Closed]); // KEEP IT OR LEAVE IT
    }

    if(element) {
        return (
            ReactDOM.createPortal(
                props.show ? (
                    <div className={modalClasses.join(' ')}>
                        <Backdrop show={props.show} clicked={closeModalHandler} />
                        <div className={classes.Modal}>
                            <button 
                                className={classes.ModalClose}
                                onClick={closeModalHandler}></button>

                            <Gallery images={props.project.images} />

                            <div className={classes.ModalContent}>
                                <header className={classes.ModalContent__Title}>
                                    <h2>{props.project.title}</h2>
                                </header>

                                <div className={classes.ModalContent__Description}>
                                    {props.project.description}
                                </div>

                                <div className={classes.ModalContent__Technology}>
                                    <h3>Technologies</h3>
                                    <ul>
                                        {props.project.technology.map(tech => {
                                            return <li key={tech}>{tech}</li>
                                        })}
                                    </ul>
                                </div>

                                <div className={classes.ModalContent__CallToAction}>
                                    {props.project[`src-url`] !== "" ? <a href={props.project[`src-url`]} className={classes.ModalContent__CallToAction__Src}>Source code</a> : null}
                                    
                                    <a href={props.project.url} className={classes.ModalContent__CallToAction__Live}>Live</a>
                                </div>
                            </div>
                        </div>
                    </div>) : null,
                element
            )
        );
    }
    else {
        return null;
    }

}

export default Modal;