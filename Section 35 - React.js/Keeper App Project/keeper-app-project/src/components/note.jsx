import React from 'react'

const paraStyle = {
    fontSize: '1rem',
    fontFamily: 'Arial',
    fontWeight: 'bold',
};

// destructing title, content so when the Note component called values will be rendered
function Note({title, content}) {
    return (
        <div className='Notes'>
            <p style={paraStyle}>{title}</p>
            <p>{content}</p>
        </div>
    );
}

export default Note;