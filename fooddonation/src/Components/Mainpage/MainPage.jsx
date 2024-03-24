import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingPage from '../LoadingPage/LoadingPage';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  const elements = useRef([]);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".pro",
      { opacity: 0, y: "30%" },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".pro",
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".projects",
      { opacity: 0, y: "30%" },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        delay: "+=0.1",
        scrollTrigger: {
          trigger: ".projects",
          start: "top 104%",
        },
      }
    );

    gsap.fromTo(
      ".pro2",
      { opacity: 0, y: "30%" },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        delay: "+=0.1",
        scrollTrigger: {
          trigger: ".pro2",
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".articles",
      { opacity: 0, y: "30%" },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        delay: "+=0.1",
        scrollTrigger: {
          trigger: ".articles",
          start: "top 104%",
        },
      }
    );

    gsap.fromTo(
      ".donate-button",
      { opacity: 0, y: "30%" },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".header",
          start: "top 50%",
        },
      }
    );
  }, []);

  const handleDonateClick = () => {
    
  };

  return (
    <div className="main-page">
      <div className="header">
        <h1>Where every flavor tells a story.</h1>
        
    
       
        <button className="donate-button" onClick={() => navigate("/volunteer")}>
          Donate
        </button>

      </div>
      <div className="featured-projects">
        <h2 className='pro' ref={elements}></h2>
        <div className='projects'>
        <div className="project-card">
                <img src={'https://upload.wikimedia.org/wikipedia/commons/f/f3/The_Logo_of_the_Robin_Hood_Army.jpg'} alt="Project 1" />
                <h3>The ROBIN HOOD ARMY</h3>
                <p>The Robin Hood Army is a volunteer-based NGO that works to get surplus food from restaurants to the less fortunate sections of society in cities across India.</p>
              </div>
              <div className="project-card">
                <img src={'https://b.zmtcdn.com/data/o2_assets/fb8ec579b8f48d197f042a8e229e8c661621256027.png'} alt="Project 2" />
                <h3>FEEDING INDIA</h3>
                <p>In January 2019, Zomato and Feeding India (registered as Hunger Heroes) collaborated to eradicate hunger and malnutrition in India..</p>
              </div>
              <div className="project-card">
                <img src={'https://www.theprotector.in/wp-content/uploads/2021/09/Roti1.jpg'} alt="Project 3" />
                <h3>ROTI BANK</h3>
                <p>Roti bank is a non – profit organization which focus on working for the relief of the people and help them sleep in the night after  a proper meal.</p>
              </div>
              <div className="project-card">
                <img src={'https://www.akshayapatra.org/wp-content/uploads/2023/05/Group-6829-1.png'} alt="Project 4" />
                <h3>AKSHAYA PATRA</h3>
                <p>The Akshaya Patra Foundation is a NGO organisation. The Foundation  eliminate classroom hunger by implementing the PM POSHAN  Programme.</p>
              </div>
              
        </div>
      </div>

      

      <div className="latest-articles">
      <h3>Helping Others With Love and Local Assistance!</h3>
          
          <p>We believe that local communities play a crucial role in addressing food insecurity. By partnering with
              local businesses and volunteers, we create a network of support that ensures no one in our community goes
              hungry.<br/>
              <p>Behind Donate is a passionate team dedicated to making a positive impact. We come from diverse
              backgrounds, but we share a common goal: to create a world where everyone has access to nutritious meals.</p>
              
              </p>
              <h3>The Problem of World Hunger</h3>
              <p>There are approximately 1,010.6 hungry people all over the world. Countries like Burundi, Eritrea, Comoros, Timor Leste, Sudan, Chad, and Yemen Republic.
                <br/> Most of the people who are hungry all day are usually in poverty. to solve this the people get jobs such as farming and working at other places, 
                <br/>but sadly do not get enough money to feed their family; Which leaves them tired and hungry.…</p>
                <p><h3>Can you imagine a world without hunger?</h3></p>
                <p>Adequate nutrition and clean water is essential for all human life. No one can survive for long without it.
                  <br/> Yet, hunger remains near the top of societal problems in America. In fact, 38.3 million people live in food-insecure households according to the USDA. 
                  <br/>Fortunately, we have feeding programs to help address some of this need.</p>
                  <p>Thanks to social media, reaching potential donors for a food drive is easier than ever.
                    <br/> However, what you’ll still need an emotionally impactful caption to cut through the noise. 
                    <br/>With that in mind, I’ve compiled a long list of captions and quotes designed to increase donations. </p>
                    <p><h3>Have questions or suggestions?</h3>We&#39;d love to hear from you! Reach out to us at
              9487423696 
              visit our [holla@gmail.com] page for more information.</p>
              <p><h2>Thank you for joining us in the fight against hunger!</h2></p>
      </div>
    </div>
  );
}

export default LoadingPage(MainPage);
