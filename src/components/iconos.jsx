import React from 'react';
import PropTypes from 'prop-types'
function ImageIcon({ src, alt, text }){
    return(
        <div className='image-FCMobilewiki3'>
            <img
                className='icon'
                src={require(`../images/${src}`)} 
                alt={alt}
            />
            {<p className='image-text'>{text}</p>} 
        </div>
    )
}

ImageIcon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default ImageIcon;