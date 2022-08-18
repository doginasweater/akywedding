import { Button, List, ListItem, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteRsvp, getMealOptions, getRsvps } from '../../api';
import { GuestDto, MealOption } from '../../types';

const processGuest = (guest: GuestDto, mealOptions: MealOption[]) => {
  const selectedMeal = mealOptions.find(x => x.meal_id === guest.meal_id);

  return (
    <List spacing={1}>
      <ListItem>
        <b>{guest.name}</b>: {guest.is_attending ? 'Attending' : 'Not Attending'}
      </ListItem>
      <ListItem>
        <b>Meal Choice</b>: {selectedMeal?.name ?? 'Meal not found'}
      </ListItem>
    </List>
  );
};

export const RSVPs: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: mealOptions, isLoading } = useQuery(
    ['get-meals'],
    () => getMealOptions()
  );

  const { data: rsvps, isLoading: rsvpsLoading } = useQuery(
    ['get-rsvps'],
    () => getRsvps()
  );

  const { mutateAsync, isLoading: deleteLoading } = useMutation((id: number) => {
    return deleteRsvp(id);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get-rsvps']);
    }
  });

  const handleDelete = useCallback(async (id: number) => {
    await mutateAsync(id);
  }, [mutateAsync]);

  if (isLoading || rsvpsLoading || deleteLoading) {
    return <Spinner />;
  }

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Guests</Th>
            <Th>Music</Th>
            <Th>Comments</Th>
            <Th>Created</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rsvps?.map(x => (
            <Tr key={`row-${x.rsvp_id}`}>
              <Td>{x.rsvp_id}</Td>
              <Td>
                <List spacing={2}>
                  {x.guests.map(y => (
                    <ListItem key={`${x.rsvp_id}-${y.guest_id}`}>
                      {processGuest(y, mealOptions?.data ?? [])}
                    </ListItem>
                  ))}
                </List>
              </Td>
              <Td>{x.music}</Td>
              <Td>{x.comments}</Td>
              <Td>{new Date(x.created_at).toLocaleString()}</Td>
              <Td>
                <Button onClick={() => handleDelete(x.rsvp_id)} colorScheme="red">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};