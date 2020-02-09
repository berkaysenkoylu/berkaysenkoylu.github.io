import React, { useState } from 'react';

import classes from './Gallery.module.scss';
import Image from './Image/Image';

const Gallery = (props) => {
    const [imageIndex, setImageIndex] = useState(0);

    const onImageSelectedHandler = (id) => {
        setImageIndex(id);
    }

    return (
        <div className={classes.Gallery}>
            <div className={classes.Gallery__Showcase}>
                <Image imageName={props.images[imageIndex].name} alt={props.images[imageIndex].alt} isShowcase={true} />
            </div>

            <div className={classes.Gallery__Container}>
                {props.images.map(image => {
                    return <Image
                        key={image.id}
                        alt={image.alt}
                        imageName={image.name}
                        clicked={() => onImageSelectedHandler(image.id)}
                        isSelected={image.id === imageIndex}
                    />
                })}
            </div>
        </div>
    )
}

export default Gallery;