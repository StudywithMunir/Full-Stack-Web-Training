// destructing the properties/attributes when ContactCard was called and rendering in html form
function ContactCard({name,imgURL,phone,email}) {
  return <div className="card">
        <div className="top" id='top'>
          <h2>{name}</h2>
          <img
            src={imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>;
}

export default ContactCard;