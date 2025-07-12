import React from 'react'
import Card from './components/card';

function App(){
  return <div>
    <h1>My Contacts</h1>
    {/* name,imgSource,tel and email are custom properties that will be triggered in Card component(with Props) */}
    {/* Props are actually properties, where we call Card component we can declare custom attributes inside Card
    instance and in Card.jsx in Card(props) function we can pass the attributes using props.property */}

    {/* calling 1st instance of card component with props */}
    <Card name="Beyonce" imgSource="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com"/>

    {/* calling 2nd instance of card component with props */}
    <Card name="Jack Bauer" imgSource="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel="+987 654 321" email="jack@nowhere.com"/>
  </div>;
}

export default App;