import React from "react";

function Form({isRegistered}) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* if user is not register than confirm password input will be displayed else null */}
      {isRegistered === false && (<input type="password" placeholder="Confirm Password" />)}

      {/* if user is not registered we will show Login else we will show Register */}
      <button type="submit">{isRegistered ? 'Login' : 'Register'}</button>
    </form>
  );
}

export default Form;
