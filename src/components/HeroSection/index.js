import React,{useContext} from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'

import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { DataContext } from "../../index";

const HeroSection = () => {
    const data = useContext(DataContext);
    const userName = data?.user?.about?.name;

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {userName}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                            {data?.user?.about?.title}
                                                        </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>

                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={data?.user?.about?.avatar.url} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection