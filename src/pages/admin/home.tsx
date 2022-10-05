import { Box, SimpleGrid, Skeleton, Stat, StatLabel, StatNumber, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import {
  getMealCounts,
  getAttendingGuests,
} from '../../api';

export const AdminHome: React.FC = () => {
  const { data: mealCounts, isLoading: mealsLoading } = useQuery([ 'get-meals' ], getMealCounts);
  const { data: attendance, isLoading: attendingLoading } = useQuery([ 'attendance' ], getAttendingGuests);
  
  const isLoading = mealsLoading || attendingLoading;

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
  
  if (!attendance) {
    return <div>uh oh!</div>;
  }

  const { attending, not_attending } = attendance.data;

  return (
    <>
      <SimpleGrid columns={4} spacing={8}>
        {mealCounts?.data?.map(x => (
          <Stat key={`meal-${x.meal_id}`}>
            <StatLabel>{x.meal_name}</StatLabel>
            <StatNumber>{x.count}</StatNumber>
          </Stat>
        ))}
        <Stat>
          <StatLabel>Attending</StatLabel>
          <StatNumber>{attending.count}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Not Attending</StatLabel>
          <StatNumber>{not_attending.count}</StatNumber>
        </Stat>
      </SimpleGrid>
      <Box mt="3rem">
        <TableContainer maxWidth={1100}>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Attending (total: {attending.count})</Th>
                <Th>Not Attending (total: {not_attending.count})</Th>
              </Tr>
            </Thead>
            <Tbody>
              {attending.guests.map((x, idx) => (
                <Tr key={`row-${x}`}>
                  <Td>{x}</Td>
                  <Td>
                    {idx < not_attending.count ? not_attending?.guests[idx] : ''}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};