import React from 'react';
import './MyAccount.css';
export default function MyAccount() {
  return (
    
    <div className="myaccount-main-content">
    
      <div className="myaccount-welcome">
        <h1>Welcome</h1>
        <p>
          Here, you can  stay updated on
          recent activities, and access various tools and features to enhance
          your experience.
        </p>
      </div>
      
      <div className="myaccount-social">
        <h2>Social</h2>
        <div className="myaccount-social-inner">
          <div className="myaccount-social-links">
            <p>Instagram : </p>
            <p className="myaccount-links">
              <a href="https://www.instagram.com/lekaa.sk/?igshid=MzNlNGNkZWQ4Mg%3D%3D">Instagram</a>
            </p>
          </div>
          <div className="myaccount-social-links">
            <p>X : </p>
            <p className="myaccount-links">
              <a href="https://twitter.com/AkshayaPatra?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">X</a>
            </p>
          </div>
          <div className="myaccount-social-links">
            <p>Email : </p>
            <p className="myaccount-links">
              <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1">email</a>
            </p>
          </div>
        </div>
      </div>
      </div>
    
  );
}
