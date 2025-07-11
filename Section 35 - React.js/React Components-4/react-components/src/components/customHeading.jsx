import React from 'react'

function CustomHeading(){
    let heading = "";
    let customStyle = {};
    let currentHour = new Date().getHours(); // 0–23

    // 00:00 ‑ 11:59  → Morning
    if (currentHour < 12) {
        heading = "Good Morning";
        customStyle.color = 'red';
    } else if (currentHour < 18) { // 12:00 ‑ 17:59  → Afternoon
        heading = "Good Afternoon";
        customStyle.color = 'green';
    } else {  // 18:00 ‑ 23:59  → Evening/Night
        heading = "Good Evening";
        customStyle.color = 'blue'; 
    }

    return <h1 style={customStyle}>{heading}</h1>;
}

export default CustomHeading;