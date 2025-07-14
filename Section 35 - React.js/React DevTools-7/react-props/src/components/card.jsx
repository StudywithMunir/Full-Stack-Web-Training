import React from 'react'

// using props which access the attributes/properties of Card component from App.jsx
// 1. Basic approach (where we use props.propertyName)
// function Card(props) {
//     return <div>
//         <h2>{props.name}</h2>
//         <img
//         src= {props.imgSource}
//         alt="avatar_img"
//         />
//         <p>{props.tel}</p>
//         <p>{props.email}</p>
//     </div>;
// }


// 2. Modern Approach (Destructure the props)
function Card({name,imgSource,tel,email}) {
    return <div>
        <h2>{name}</h2>
        <img
        src= {imgSource}
        alt={`${name}'s avatar`} //dynamic image alt
        />
        <p>{tel}</p>
        <p>{email}</p>
    </div>;
}

export default Card;