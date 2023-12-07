import { Grid, GridItem, Box } from '@chakra-ui/react';

export default function CategoryCards() {
  return (
    <Grid
      h='350px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Box
          h='100%'
          w='100%'
          bg='#d9e9e8'
          border='5px solid green'
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Box
          h='100%'
          w='100%'
          bg='#d9e9e8'
          border='5px solid green'
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Box
          h='100%'
          w='100%'
          bg='#d9e9e8'
          border='5px solid green'
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Box
          h='100%'
          w='100%'
          bg='#d9e9e8'
          border='5px solid green'
        />
      </GridItem>
    </Grid>
  );
}


