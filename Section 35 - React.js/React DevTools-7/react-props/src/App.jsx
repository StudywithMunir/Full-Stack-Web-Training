import React from 'react'
import Card from './components/card';
import ContactCard from './components/contactCard'
import contact from './modules/contact' //contains array of object which contain contact in properties form
import Avatar from './components/Avatar';

function App(){
  const imgAddress = "https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png";
  return <div>
      <h1 className="heading">My Contacts</h1>
      {/* calling reuseable Avatar component */}
      <Avatar imagURL={imgAddress}/>
      {/* importing dynamic data from contact.js into ContactCard Component */}
      <ContactCard name={contact[0].name} imgURL={contact[0].imgURL} phone={contact[0].phone} email={contact[0].email}/>
      <ContactCard name={contact[1].name} imgURL={contact[1].imgURL} phone={contact[1].phone} email={contact[1].email}/>
      <ContactCard name={contact[2].name} imgURL={contact[2].imgURL} phone={contact[2].phone} email={contact[2].email}/>
    </div>;
}

export default App;