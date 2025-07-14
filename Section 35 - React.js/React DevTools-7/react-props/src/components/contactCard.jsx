// importing Avatar component
import Avatar from "./Avatar";

// import details component which holds phone and email
import Details from "./details";

// destructing the properties/attributes when ContactCard was called and rendering in html form
function ContactCard({name,imgURL,phone,email}) {
  return <div className="card">
        <div className="top" id='top'>
          <h2>{name}</h2>
          {/* by wrapping img into Avatar custom component we can use that image anywhere as resuable component */}
          <Avatar imagURL={imgURL}/>
        </div>
        <div className="bottom">
          <Details phone={phone} email={email}/>
        </div>
      </div>;
}

export default ContactCard;