import React from 'react';
import Navigation from '../../components/Navigation';
import Box from '../../components/Box';
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

const InnerPage = () => {
  return (
    <Container id="#top">
      <Navigation />
      <main>
        <Box title="About me" id="about-me">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque
          </p>
        </Box>
        <Box title="Education" id="education">
          <Timeline data={timelineData} />
        </Box>
        <Box title="Experience" id="experience">
          <Expertise />
        </Box>
        <Box title="Skills" id="skills"></Box>
        <Box title="Portfolio" id="portfolio">
          <Portfolio />
        </Box>
        <Box title="Contacts" id="contacts">
          <Address />
        </Box>
        <Box title="Feedbacks" id="feedbacks">
          <Feedback />
        </Box>
      </main>
      <HashLink to={'#top'} className="btn-fixed">
        <FontAwesomeIcon icon={faChevronUp} />
      </HashLink>
    </Container>
  );
};

export default InnerPage;
