import React, { useEffect } from 'react';
import M from 'materialize-css'; // Import Materialize CSS library


export default function ContactPage() {
  useEffect(() => {
    // Initialize Materialize components
    M.AutoInit();
  }, []); // Empty dependency array ensures that this effect runs only once

    return (
      <div>
        <h1>Welcome to the Contact Page</h1>
        <p>
          This is the contact page. You can use the navigation bar to visit the other
          pages.
        </p>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="message" className="materialize-textarea"></textarea>
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }