import React, { useState } from 'react';
import { Box, Flex, Input, Image, Text, Button, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [imageDetails, setImageDetails] = useState({
    url: 'https://via.placeholder.com/300',
    title: 'Name',
    description: 'Description',
  });

  const handleSearch = () => {
    
    
    setImageDetails({
      url: 'https://via.placeholder.com/300',
      title: 'Name',
      description: 'Description.',
    });
  };

  return (
    <Box p={4}>
      <InputGroup mb={4}>
        <InputLeftAddon>
          <Button
            aria-label="Search"
            leftIcon={<SearchIcon />}
            onClick={handleSearch}
            marginRight="3"  
          >
            Search
          </Button>
        </InputLeftAddon>
        <Input
          placeholder=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
      </InputGroup>

      <Flex alignItems="center" justifyContent="center" mb={4}>
        <Image
          src={imageDetails.url}
          alt={imageDetails.title}
          boxSize="300px"
          border="2px solid green"  
          borderRadius="md" 
        />
        <Box ml={4}>
          <Text fontSize="lg" fontWeight="bold">
            {imageDetails.title}
          </Text>
          <Text>{imageDetails.description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;









