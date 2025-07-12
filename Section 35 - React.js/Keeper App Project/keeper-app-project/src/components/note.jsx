import React from 'react'

const paraStyle = {
    fontSize: '1rem',
    fontFamily: 'Arial',
    fontWeight: 'bold',
};

function Note(){
    return <div className='Notes'>
        <p style={paraStyle}>This is the Note Title</p>
        <p>This is note content</p>
    </div>;
}

export default Note;