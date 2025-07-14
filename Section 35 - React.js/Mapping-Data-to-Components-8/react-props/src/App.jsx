import React from 'react'
import ContactCard from './components/contactCard'
import contacts from './modules/contact' //contains array of object which contain contact in properties form

function createCard(contact) {
  return (
    <ContactCard 
    // left side values are from contactCard component and right side values are from contact.js(actual data)
    key = {contact.id} //mandatory and must be unique (react needed this)
    id = {contact.id}  //from contact.js
    name = {contact.name}
    imgURL={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
    />
  );
}

function App(){
  return <div>
      <h1 className="heading">My Contacts</h1>
      {/* prints the Card in a loop */}
      {contacts.map(createCard)}
    </div>;
}

export default App;