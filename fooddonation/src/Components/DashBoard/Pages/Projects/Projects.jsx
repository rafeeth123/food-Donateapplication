import React from 'react';
import './Projects.css';
import Project1 from '../../../Mainpage/Project 1.jpg';
import Project2 from '../../../Mainpage/Project 2.jpg';
import Project3 from '../../../Mainpage/Project 3.jpg';
import Project4 from '../../../Mainpage/Project 4.png';

export default function Projects() {
  return (
    <div className="projects-main-content">
      <div className='projects-welcome'>
        <div className='pro'>
        <h1>PROJECTS</h1>
        </div>
        <p>Where every flavor tells a story.</p>
      </div>
      <div className='projects-projects'>
        <div className="projects-project-card">
          <img src={'https://upload.wikimedia.org/wikipedia/commons/f/f3/The_Logo_of_the_Robin_Hood_Army.jpg'} alt="Project 1" />
          <h3>The ROBIN HOOD ARMY</h3>
          <p>The Robin Hood Army is a volunteer-based NGO that works to get surplus food from restaurants to the less fortunate sections of society in cities across India.</p>
        </div>
        <div className="projects-project-card">
          <img src={'https://b.zmtcdn.com/data/o2_assets/fb8ec579b8f48d197f042a8e229e8c661621256027.png'} alt="Project 2" />
          <h3>FEEDING INDIA</h3>
          <p>In January 2019, Zomato and Feeding India (registered as Hunger Heroes) collaborated to eradicate hunger and malnutrition in India.</p>
        </div>
        <div className="projects-project-card">
          <img src={'https://www.theprotector.in/wp-content/uploads/2021/09/Roti1.jpg'} alt="Project 3" />
          <h3>ROTI BANK</h3>
          <p>Roti bank is a non – profit organization which focus on working for the relief of the people and help them sleep in the night after  a proper meal..</p>
        </div>
        <div className="projects-project-card">
          <img src={'https://www.akshayapatra.org/wp-content/uploads/2023/05/Group-6829-1.png'} alt="Project 4" />
          <h3>AKSHAYA PATRA</h3>
          <p>The Akshaya Patra Foundation is a NGO organisation. The Foundation  eliminate classroom hunger by implementing the PM POSHAN  Programme..</p>
        </div>
      </div>
    </div>
  )
}
