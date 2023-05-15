import React from 'react';
import Box from '../../components/Box';
import Panel from '../../components/Panel';
import Timeline from '../../components/Timeline';
import Expertise from '../../components/Expertise';
import Feedback from '../../components/FeedBack';
import Address from '../../components/Address';
import Portfolio from '../../components/Portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { Container } from '../../components/styles/Container.styled';
import { timelineData } from '../../constants/timelineData';
import { expertiseData } from '../../constants/expertiseData';
import { feedbackData } from '../../constants/feedbacksData';

const InnerPage = () => {
  return (
    <Container id="#top">
      <Panel />
      <main>
        <Box title="About me" id="about-me">
          <p>
            Hi, my name is Nurzhan and I am a Junior Web Developer. I have
            experience in HTML, CSS, SCSS, JavaScript, React, NextJS, and MUI.
            I'm excited to be here and I would like to tell you a little bit
            more about my skills and experience. I am proficient in HTML, and I
            have experience in creating and formatting web pages using semantic
            markup. I am also skilled in CSS and SCSS, and I can create
            responsive layouts and custom styles that enhance the look and feel
            of web pages. In addition, I have experience in working with CSS
            frameworks such as Material UI to create modern and dynamic web
            designs. My JavaScript skills are strong, and I am proficient in
            using JavaScript to create dynamic user interfaces and web
            applications. I have experience in creating interactive web
            applications using React and NextJS, and I am familiar with React's
            component-based architecture and the NextJS server-side rendering
            framework. Furthermore, I am skilled in using Material UI to create
            modern and responsive user interfaces. I have experience in creating
            reusable React components and integrating them with Material UI to
            create consistent and cohesive user interfaces. I am a quick learner
            and enjoy staying up-to-date with the latest web development
            technologies and frameworks. I am also passionate about
            collaborating with other developers and designers to create
            high-quality web projects that meet user needs. Thank you for
            considering my skills and experience for your web development
            projects. I am excited to work with you to create dynamic and
            engaging web applications.
          </p>
        </Box>
        <Box title="Education" id="education">
          <Timeline data={timelineData} />
        </Box>
        <Box title="Experience" id="experience">
          <Expertise data={expertiseData} />
        </Box>
        <Box title="Skills" id="skills"></Box>
        <Box title="Portfolio" id="portfolio">
          <Portfolio />
        </Box>
        <Box title="Contacts" id="contacts">
          <Address />
        </Box>
        <Box title="Feedbacks" id="feedbacks">
          <Feedback data={feedbackData} />
        </Box>
      </main>
      <HashLink to={'#top'} className="btn-fixed">
        <FontAwesomeIcon icon={faChevronUp} />
      </HashLink>
    </Container>
  );
};

export default InnerPage;
