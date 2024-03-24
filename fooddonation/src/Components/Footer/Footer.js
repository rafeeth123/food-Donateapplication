import React from 'react'
import './Footer.css';
import LoadingPage from '../LoadingPage/LoadingPage';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-main'>
        <div className='inner-footer-box'>
            <div className='top-box'>
                <Link to="/" style={{textDecoration:"none"}}>
                <div>
                    <p>About</p>
                </div>
                </Link>
                <Link to="/feedback" style={{textDecoration:"none"}}>
                <div>
                    <p>Feedback</p>
                </div>
                </Link>
                <Link to="/privacypolicy" style={{textDecoration:"none"}}>
                <div>
                    <p>Privacy</p>
                </div>
                </Link>
                <Link to="/terms" style={{textDecoration:"none"}}>
                <div>
                    <p>Terms</p>
                </div>
                </Link>
                <Link to="/community" style={{textDecoration:"none"}}>
                <div>
                    <p>Help</p>
                </div>
                </Link>
            </div>
            <div className='bottom-box'>
                <p>© 2023 Donate! for hunger</p>
            </div>
        </div>
    </div>
  )
}

export default LoadingPage(Footer);