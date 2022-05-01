import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
        Hi, my name is Akintola Abiodun. I'm a software developer
        </SectionText>
        <a href="/files/Akintola_Abiodun.pdf" style={{border : 2, borderColor : "red"}} download><h3>download CV</h3></a>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero