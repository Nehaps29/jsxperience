import React from 'react';
import { Box, Flex, Image, Text, Heading, Spacer } from "@chakra-ui/react";
import Slider from 'react-slick';
import Clementine from '../assets/Clementine.png'
import Blue from '../assets/Blue.png'
import Canterbury from '../assets/Canterbury.png'
import Celosia from '../assets/Celosia.png'
import Daylily from '../assets/Daylily.png'
import Hollyhock from '../assets/Hollyhock.png'
import Ornamental from '../assets/Ornamental.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const plants = [
    {
      name: 'Clementine Red',
      image: Clementine,
      description: '"A unique series of Columbine, featuring fluffy double flowers that resemble a small Clematis bloom, held upfacing on stems, well above the lacy green foliage mound. This selection produces blooms in shades of rosy red with a yellow center. Flowers are attractive to hummingbirds. Great in containers. Removing spent flowers will increase the blooming time. Great in containers. Since Columbines are relatively short lived, allow some of the plants to go to seed and self sow, however, resulting seedlings may not resemble the mother plant. Leaf miners or sawfly may disfigure the leaves around flowering time. Simply trim off the ugly foliage and the plants will grow fresh leaves. A Fleuroselect Quality Award winner."',
      resource: 'www.perennials.com',
      cycle: 'Perennials',
    },
    {
      name: 'Daylily',
      image: Daylily,
      description: '"Trophytaker® Daylilies must pass a stringent series of tests, proving themselves to be more beautiful, longer blooming, hardy, vigorous and pest resistant than average varieties. This showy selection bears bright, gold flowers with a red eyezone. Petals are lightly ruffled with a thin edging in red. Blooms mid to late summer. Semi-evergreen. Plants do not usually require dividing for several years, but are easily split apart in fall or early spring. Spent flower stems can be trimmed back after blooms are finished. Cut back dead foliage in mid to late winter. Flowers are edible. May well prove to be hardy in Zone 2 or 3."',
      resource: 'www.perennials.com',
      cycle: 'Perennials',
    },
    {
      name: 'Ornamental',
      image: Ornamental,
      description: '"The Ornamental Comfreys are similar to the herbal types, but on a more restrained scale and much less invasive. This selection is low-growing, forming a clump of coarse light-green leaves, dappled in creamy-yellow. Red buds turn into soft blue hanging bells in early summer. Moist, shady sites suit this best, but this species will even tolerate dry shade conditions. Plants quickly fill in to form a thick, dense groundcover. Clumps may be easily divided in early spring or fall. CAUTION: Harmful if eaten."',
      resource: 'www.perennials.com',
      cycle: 'Perennials',
    },
    {
      name: 'Blue Daze',
      image: Blue,
      description: '"Blue Daze is winter hardy to USDA Zones 9 to 11. In colder zones, it is grown as an annual in hanging baskets and containers or in the ground as a bedding plant or ground cover. Blue Daze tolerates a wide range of soils, including sandy soils and soils with poor nutrient levels. However, the soil must be well-drained, as Blue Daze plants that are too wet can quickly contract fungal diseases that will severely shorten their life span. Regular moisture and a balanced fertilizer will help get the plants established. The plants’ grey-green foliage serves as a backdrop for small but plentiful brilliant blue funnel-shaped flowers."',
      resource: 'www.txmg.org',
      cycle: 'Annuals',
    },
    {
      name: 'Celosia',
      image: Celosia,
      description: '"The name comes from the Greek word kḗleos meaning burning and refers to the flame-like flowers. The flowers range in shape as plumes and crested types and colors and can be yellow, white, orange, pink and red. There are both tall and dwarf varieties. Celosia tolerates most soils except heavy clay and does not like wet feet. They do best grown in full sun and well-drained soils. Celosias are showy long-blooming annuals that add a splash of color when planted en masse or as an accent in the garden and also do well in pots. They often will readily reseed so deadhead if this is not desirable."',
      resource: 'www.plants.ces.ncsu.edu',
      cycle: 'Annuals',
    },
    {
      name: 'Canterbury Bells',
      image: Canterbury,
      description: '"Canterbury Bells is a tall biennial with showy flowers in an interesting cup-and-saucer shape that appears in the summer. This plant thrives in full sun to partial shade and moist, well-draining soil and reasonably cool temperatures. Afternoon shade or filtered sunlight is necessary for warmer regions. As a biennial, only a low-growing clump or rosette of green leaves will appear in the first year, which should be well mulched in winter. The second year, Canterbury bells flowers will form, usually in summer, atop tall, upright stems. Planting a group together will help plants support each other without staking, although in windy locations stakes may be needed. Plant 12  - 15 inches apart. To have continuous blooms every year, allow some of the flower seed pods to mature and re-seed the flower bed."',
      resource: 'www.plants.ces.ncsu.edu',
      cycle: 'Biennials',
    },
    {
      name: 'Hollyhock',
      image: Hollyhock,
      description: '"Herbaceous flowering plant of the hibiscus, or mallow, family (Malvaceae) native to China but widely cultivated for its handsome flowers. The several varieties include annual, biennial, and perennial forms. The plant grows almost absolutely straight for about 1.5–2.7 metres (5–9 feet), with the flowers borne along the stem. The leaves have five to seven lobes. Commonly white, pink, red, or yellow, the flowers are 7.5 cm (3 inches) or more across and are borne along the upper portion of the stem. The plants readily reseed and are considered invasive species in some areas outside their native range."',
      resource: 'www.britannica.com',
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
                    src={app.image}
                    alt={app.name}
                  />
                  <Flex direction='column' ml={{ base: 0, sm: 4 }} textAlign="center">
                    <Box>
                      <Text fontSize='xl' fontWeight='bold' mb='2'>
                        {app.name}
                      </Text>
                      <Text py='2' textAlign='justify'>{app.description}</Text>
                      <Text textAlign='justify' fontSize='sm' fontStyle='italic'>{app.resource}</Text>
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
                    src={app.image}
                    alt={app.name}
                  />
                  <Flex direction='column' ml={{ base: 0, sm: 4 }} textAlign="center">
                    <Box>
                      <Text fontSize='xl' fontWeight='bold' mb='2'>
                        {app.name}
                      </Text>
                      <Text py='2' textAlign='justify'>{app.description}</Text>
                      <Text textAlign='justify' fontSize='sm' fontStyle='italic'>{app.resource}</Text>
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
                    src={app.image}
                    alt={app.name}
                  />
                  <Flex direction='column' ml={{ base: 0, sm: 4 }} textAlign="center">
                    <Box>
                      <Text fontSize='xl' fontWeight='bold' mb='2'>
                        {app.name}
                      </Text>
                      <Text py='2' textAlign='justify'>{app.description}</Text>
                      <Text textAlign='justify' fontSize='sm' fontStyle='italic'>{app.resource}</Text>
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
