import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './DashBoard.css';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PageTrainsition from '../PageTransition/PageTrainsition';
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const [animateOutlet, setAnimateOutlet] = useState(false);

  useEffect(() => {
    if (animateOutlet) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.outlet-container',
        { webkitFilter: 'blur(3px)', filter: 'blur(3px)', duration:0.5 },
        { webkitFilter: 'blur(0px)', duration: 1 ,delay: 0.5}
      );
    }
  }, [animateOutlet]);

  const handleblur = () =>{
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(
      '.outlet-container',
      { webkitFilter: 'blur(3px)', filter: 'blur(3px)', duration:0.5 },
      { webkitFilter: 'blur(0px)', duration: 1 ,delay: 0.5}
    );
  }

  return (
  <>
    <div className='das'>
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <div className="sidebar-links">
          <div onClick={() => {navigate('myaccount'); handleblur()}} className='tabs'>Contact</div>
          <div onClick={() => {navigate('projects'); handleblur()}} className='tabs'>Projects</div>
          
          
          <div onClick={() => {navigate('/newlogin'); handleblur()}} className='tabs'>Logout</div>
          <div onClick={() =>{navigate('/newlogin'); handleblur()}} className='tabs'>Admin</div>
        </div>
      </div>
      <div className={`outlet-container ${animateOutlet ? 'animate' : ''}`}>
        <Outlet />
      </div>
    </div>
    </div>
    </>
  );
};

export default Dashboard;
