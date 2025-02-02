import React from 'react'
import styled from 'styled-components';
import MainVideo from '../assets/Walking Girl.mp4';
import { motion } from 'framer-motion';


const VideContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;

video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
`;

const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`}
`;

const Title = styled(motion.div)`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};

div {
  display: flex;
  flex-direction: row;
}
h1  {
  font-family: "Kaushan Script";
  text-decoration: none;
  font-size: ${props => props.theme.fontBig};
  text-shadow: 1px 1px 1px ${props => props.theme.body};
}

h2 {
  font-family: "Sirin Stencil";
  text-decoration: none;
  font-size: ${props => props.theme.fontlg};
  text-shadow: 1px 1px 1px ${props => props.theme.body};
  text-transform: capitalize;
  font-weight: 300;
}
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

function CoverVideo() {
  return (
    <VideContainer>
      <DarkOverlay/>
      <Title
      variants={container}
       initial="hidden"
        animate="show"
      >
      <div>
      <motion.h1 
      variants={item}
         data-scroll data-scroll-speed="4" data-scroll-delay="0.13">W</motion.h1 >
      <motion.h1 
      variants={item}  data-scroll data-scroll-speed="4" data-scroll-delay="0.06">I</motion.h1 >
      <motion.h1 
      variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.04">B</motion.h1 >
      <motion.h1 
      variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.03">E</motion.h1 >
      </div>
      <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.04" >Inspire. Create. Belive</h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay loop muted></video>
      </VideContainer>
  )
}

export default CoverVideo