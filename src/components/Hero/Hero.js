import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding> 
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br/>
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
    Web Developer, Blockchain enthusiast with interests in web3 development. Graduated in Letters-English and passionate about Linguistics, especially Natural Processing Language. Knowledge of data analysis and manipulation with Python, MySQL and MongoDB.
    </SectionText>
    <Button onClick = {() => window.location ='https://google.com'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;