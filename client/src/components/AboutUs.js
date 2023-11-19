import React, { useState } from 'react';
import '../about-us.css'; // Update the path to your CSS file
import ChristinaImg from '../assets/Christina.jpeg';
import LuisCImg from '../assets/LuisC.jpeg';
import GabeImg from '../assets/Gabe.jpeg';
import IanRImg from '../assets/IanR.jpeg';
import AnaTImg from '../assets/AnaT.jpeg';
import ValeriaWImg from '../assets/ValeriaW.jpeg';
import LinkedInIconImg from '../assets/LinkedIn_icon.png';

const teamMembers = [
  {
    name: 'Christina Bernal',
    imgSrc: ChristinaImg,
    bio: '"Believe in yourself. You are braver than you think."',
    linkedin: 'https://www.linkedin.com/in/christina-bernal-239327245/',
  },
  {
    name: 'Luis Chavez',
    imgSrc: LuisCImg,
    bio: '"It always seems impossible until it is done."',
    linkedin: 'https://www.linkedin.com/in/luis-chavez-793051161/',
  },
  {
    name: 'Gabriel Gutierrez',
    imgSrc: GabeImg,
    bio: '"Hard work beats talent when talent does not work hard"',
    linkedin: 'https://www.linkedin.com/in/gabriel-gutierrez-b11360246/',
  },
  {
    name: 'Ian Rodriguez',
    imgSrc: IanRImg,
    bio: '"If everything seems under control you are just not going fast enough"',
    linkedin: 'https://www.linkedin.com/in/ian-alexander-rodriguez-24281b218/',
  },
  {
    name: 'Ana Torres',
    imgSrc: AnaTImg,
    bio: '"Stay away from those people who try to disparage your ambitions."',
    linkedin: 'https://www.linkedin.com/in/ana-torres-1a809a17b/',
  },
  {
    name: 'Valeria Wardini',
    imgSrc: ValeriaWImg,
    bio: '"When you give joy to other people, you get more joy in return."',
    linkedin: 'https://www.linkedin.com/in/valeria-wardini-96ab6423b',
  },
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const tabHeader = document.querySelectorAll('.tab-header');
  const tabContent = document.querySelectorAll('.tab-content');

  const tabClick = (tab) => {
    setActiveTab(parseInt(tab.target.dataset.index));
  };

  return (
    <div>
      <div className="U1">
        {teamMembers.map((member, index) => (
          <div key={index} className={member.name}>
            <img
              id={`Default-image-${index}`}
              src={member.imgSrc}
              alt={member.name}
              className="U01"
            />
            <h5 className="bio">{`${member.name}. ${member.bio}`}</h5>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIconImg} className="link" alt="LinkedIn" />
            </a>
          </div>
        ))}
      </div>

      <div className="container">
        {activeTab !== null && (
          <>
            <h1 className="tab-header" data-index="0">Who we are?</h1>
            <div className={`tab-content ${activeTab === 0 ? '' : 'hide'}`}>
              We are a group of passionate students who have teamed up to redefine your fitness journey.
              Our mission is to empower individuals from all walks of life to achieve their wellness goals and enhance their overall health and happiness.
            </div>

            <h1 className="tab-header" data-index="1">How do I enroll?</h1>
            <div className={`tab-content ${activeTab === 1 ? '' : 'hide'}`}>
              Embarking on your fitness journey with MyGainz is a seamless and personalized experience.
              Sign-up is effortless, just share your email address, and take a few moments to complete our questionnaire, guiding us
              to understand your fitness goals and preferences. Once enrolled, dive into a world of personalized workout plans.
              We prioritize simplicity, ensuring immediate access to a wealth of fitness resources.
              Let's start making strides towards a healthier, happier you!
            </div>

            <h1 className="tab-header" data-index="2">What makes us unique?</h1>
            <div className={`tab-content ${activeTab === 2 ? '' : 'hide'}`}>
              What sets MyGainz apart is our unwavering commitment to tailoring the fitness experience to YOU.
              Unlike generic fitness apps, we prioritize personalization from the moment you sign up. Our in-depth questionnaire
              delves into your specific goals, preferences, and requirements, enabling us to craft a truly customized fitness journey.
              Whether you're a beginner or a seasoned pro, our user-friendly interface seamlessly integrates personalized workout plans to
              keep you motivated.
            </div>
          </>
        )}
      </div>

      <div className="tab-header" data-index="0" onClick={tabClick}>
        Who we are?
      </div>
      <div className="tab-header" data-index="1" onClick={tabClick}>
        How do I enroll?
      </div>
      <div className="tab-header" data-index="2" onClick={tabClick}>
        What makes us unique?
      </div>
    </div>
  );
};

export default AboutUs;
