import React from 'react'
import styled from 'styled-components';
import CoverVideo from '../components/CoverVideo';
import Navbar from '../components/Navbar';
import Logo from './../components/Logo'

const Section = styled.section`
 position: relative;
 min-height: 200vh;
 overflow: hidden;
`;


function Home() {
  return (
    <Section>
         <Logo/>
         <Navbar/>
        <CoverVideo/>
       
    </Section>
  )
}

export default Home