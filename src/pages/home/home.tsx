import React from "react";

import {
  Banner,
  Tool,
  Button,
  ImageCard,
  CardInfo,
  ContactCard,
  Slider
} from "../../components";

import { TOOLS, CARDS, USERS, SLIDER } from "./mock";

import {
  DesignTools,
  DesignInfo,
  DesignTitle,
  Tools,
  ToolsButton,
  CardsWrapper,
  SliderTitle,
  SliderDescription
} from "./styles";

const Home = () => {
  return (
    <div>
      <Banner
        title="The Design Thinking superpowers"
        description="Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience."
        onGetStarted={() => null}
        image="./images/banner-image.png"
        videoLink="#"
      />

      <DesignTools>
        <DesignInfo>
          <DesignTitle>We design tools to unveil your superpowers</DesignTitle>
          <Tools>
            {TOOLS.map(item =>
              <Tool
                key={item.title}
                image={item.image}
                title={item.title}
                color={item.color}
                description={item.description}
              />
            )}
          </Tools>
          <ToolsButton>
            <Button>SIGN UP NOW</Button>
          </ToolsButton>
        </DesignInfo>
      </DesignTools>

      <DesignInfo>
        <CardsWrapper>
          {CARDS.map(item =>
            <ImageCard
              key={item.image}
              reverse={!!item?.reverse}
              image={item.image}
            >
              <CardInfo {...item.cardInfo} />
            </ImageCard>
          )}
        </CardsWrapper>
      </DesignInfo>

      <ContactCard
        title="Need a super hero?"
        description="Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?"
        onClick={() => null}
        users={USERS}
      />

      <DesignInfo>
        <SliderTitle>Marketing Strategies</SliderTitle>
        <SliderDescription>Join 40,000+ other marketers and get proven strategies on email marketing</SliderDescription>
        <Slider slides={SLIDER} />
      </DesignInfo>
    </div>
  );
};

export default Home;
