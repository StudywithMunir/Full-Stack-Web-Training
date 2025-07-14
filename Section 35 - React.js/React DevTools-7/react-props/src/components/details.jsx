// Destructing phone and email attributes/properties and when they called in contactCard values are assigned there
// which then came from App.jsx phone={contact[0].phone} email={contact[0].email}
function Details({phone,email}) {
    return <div>
        <p>{phone}</p>
        <p>{email}</p>
    </div>;
}

export default Details;