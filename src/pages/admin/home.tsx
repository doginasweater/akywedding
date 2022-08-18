import { Box, SimpleGrid, Skeleton, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getMealOptions } from '../../api';

export const AdminHome: React.FC = () => {
  const { data: mealOptions, isLoading } = useQuery(
    ['get-meals'],
    () => getMealOptions()
  );

  if (isLoading) {
    return (
      <SimpleGrid columns={4} spacing={8}>
        <Box>
          <Skeleton />
        </Box>
        <Box>
          <Skeleton />
        </Box>
        <Box>
          <Skeleton />
        </Box>
        <Box>
          <Skeleton />
        </Box>
      </SimpleGrid>
    );
  }

  return (
    <SimpleGrid columns={4} spacing={8}>
      {mealOptions?.data?.map(x => (
        <Stat key={`meal-${x.meal_id}`}>
          <StatLabel>{x.name}</StatLabel>
          <StatNumber>0</StatNumber>
        </Stat>
      ))}
    </SimpleGrid>
  );
};