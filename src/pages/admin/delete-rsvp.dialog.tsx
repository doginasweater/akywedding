import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';
import { useCallback, useRef } from 'react';
import { AdminRsvpViewModel } from '../../types';

export type DeleteRsvpDialogProps = {
  rsvp: AdminRsvpViewModel;
  open: boolean;
  onDelete: (id?: number) => void;
};

export const DeleteRsvpDialog: React.FC<DeleteRsvpDialogProps> = ({ onDelete, open, rsvp }) => {
  const cancelRef = useRef(null);

  const handleCancel = useCallback(() => {
    onDelete();
  }, [ onDelete ]);

  const handleDelete = useCallback(() => {
    onDelete(rsvp.rsvp_id);
  }, [ onDelete, rsvp.rsvp_id ]);

  return (
    <AlertDialog isOpen={open} leastDestructiveRef={cancelRef} onClose={onDelete}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete RSVP
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? You cannot undo this.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleCancel}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};