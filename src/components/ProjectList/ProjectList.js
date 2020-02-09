import React, { useState, useEffect, useRef } from 'react';

import Project from './Project/Project';
import classes from './ProjectList.module.scss';

import Modal from '../Modal/Modal';

const ProjectList = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});

    let timeout = useRef(null);

    let projectData = require('../../data/projects.json');

    useEffect(() => {
        return () => {
            clearTimeout(timeout.current);
        }
    }, []);

    const onModalOpenedHandler = (id) => {
        let project;
        Object.keys(projectData).forEach(p => {
            if(projectData[p].id === id) {
                project = projectData[p];
            }
        });
        setSelectedProject(project);

        setShowModal(true);
    }

    const onModalClosedHandler = () => {
        timeout.current = setTimeout(() => {
            setShowModal(false);
        }, 200);
    }

    return (
        <>
            <Modal show={showModal} closed={onModalClosedHandler} project={selectedProject} />
            <div className={classes.ProjectList}>
                {Object.keys(projectData).map((project) => {
                    return <Project
                        key={projectData[project].id}
                        index={projectData[project].id}
                        title={projectData[project].title}
                        image={projectData[project].image}
                        description={projectData[project].description}
                        url={projectData[project].url}
                        selectProject={() => onModalOpenedHandler(projectData[project].id)}
                    />
                })}
            </div>
        </>
    )
}

export default ProjectList;