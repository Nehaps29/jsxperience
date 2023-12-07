import React from 'react';
import { Box, Flex, Image, Text, Heading, Spacer } from "@chakra-ui/react";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const plants = [
    {
      name: 'Clementine Red',
      imageSrc: '/src/assets/images/Clementine.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus debitis at aliquid assumenda laudantium, reiciendis, maiores dolorum ipsum quaerat harum magni non nulla voluptatibus delectus nihil, officia deleniti consectetur sit',
      cycle: 'Perennials',
    },
    {
      name: 'Daylily',
      imageSrc: '/src/assets/images/Daylily.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus debitis at aliquid assumenda laudantium, reiciendis, maiores dolorum ipsum quaerat harum magni non nulla voluptatibus delectus nihil, officia deleniti consectetur sit',
      cycle: 'Perennials',
    },
    {
      name: 'Ornamental',
      imageSrc: '/src/assets/images/Ornamental.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus debitis at aliquid assumenda laudantium, reiciendis, maiores dolorum ipsum quaerat harum magni non nulla voluptatibus delectus nihil, officia deleniti consectetur sit',
      cycle: 'Perennials',
    },
    {
      name: 'Blue Daze',
      imageSrc: '/src/assets/images/Blue.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus debitis at aliquid assumenda laudantium, reiciendis, maiores dolorum ipsum quaerat harum magni non nulla voluptatibus delectus nihil, officia deleniti consectetur sit',
      cycle: 'Annuals',
    },
    {
      name: 'Celosia',
      imageSrc: '/src/assets/images/Celosia.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus debitis at aliquid assumenda laudantium, reiciendis, maiores dolorum ipsum quaerat harum magni non nulla voluptatibus delectus nihil, officia deleniti consectetur sit',
      cycle: 'Annuals',
    },
    {
      name: 'Canterbury Bells',
      imageSrc: '/src/assets/images/Canterbury.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus debitis at aliquid assumenda laudantium, reiciendis, maiores dolorum ipsum quaerat harum magni non nulla voluptatibus delectus nihil, officia deleniti consectetur sit',
      cycle: 'Biennials',
    },
    {
      name: 'Hollyhock',
      imageSrc: '/src/assets/images/Hollyhock.png',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus debitis at aliquid assumenda laudantium, reiciendis, maiores dolorum ipsum quaerat harum magni non nulla voluptatibus delectus nihil, officia deleniti consectetur sit',
      cycle: 'Biennials',
    },
  ];

  const CustomPrevArrow = (props) => (
    <div {...props} style={{ ...props.style, left: '-30px', zIndex: 1, color: 'black', fontSize: '24px', cursor: 'pointer' }} >
      <span>&#9664;</span>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props} style={{ ...props.style, right: '-30px', zIndex: 1, color: 'black', fontSize: '24px', cursor: 'pointer' }} >
      <span>&#9654;</span>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <Box>
        <Heading py='1'>PERENNIALS</Heading>
        <Slider {...settings}>
          {plants
            .filter((plant) => plant.cycle.toLowerCase() === 'perennials')
            .map((app, index) => (
              <Box key={index}>
                <Flex direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' justify="center" align="center">
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={app.imageSrc}
                    alt={app.name}
                  />
                  <Flex direction='column' ml={{ base: 0, sm: 4 }} textAlign="center">
                    <Box>
                      <Text fontSize='xl' fontWeight='bold' mb='2'>
                        {app.name}
                      </Text>
                      <Text py='2'>{app.description}</Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            ))}
        </Slider>
      </Box>

      <Spacer mt={6} />

      <Box>
        <Heading py='1'>ANNUALS</Heading>
        <Slider {...settings}>
          {plants
            .filter((plant) => plant.cycle.toLowerCase() === 'annuals')
            .map((app, index) => (
              <Box key={index}>
                <Flex direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' justify="center" align="center">
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={app.imageSrc}
                    alt={app.name}
                  />
                  <Flex direction='column' ml={{ base: 0, sm: 4 }} textAlign="center">
                    <Box>
                      <Text fontSize='xl' fontWeight='bold' mb='2'>
                        {app.name}
                      </Text>
                      <Text py='2'>{app.description}</Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            ))}
        </Slider>
      </Box>

      <Spacer mt={6} />

      <Box>
        <Heading py='1'>BIENNIALS</Heading>
        <Slider {...settings}>
          {plants
            .filter((plant) => plant.cycle.toLowerCase() === 'biennials')
            .map((app, index) => (
              <Box key={index}>
                <Flex direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' justify="center" align="center">
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={app.imageSrc}
                    alt={app.name}
                  />
                  <Flex direction='column' ml={{ base: 0, sm: 4 }} textAlign="center">
                    <Box>
                      <Text fontSize='xl' fontWeight='bold' mb='2'>
                        {app.name}
                      </Text>
                      <Text py='2'>{app.description}</Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            ))}
        </Slider>
      </Box>

      <Spacer mt={6} />
    </>
  );
};

export default Home;









