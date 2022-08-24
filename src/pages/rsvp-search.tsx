import { Button } from '@chakra-ui/react';
import { useCallback } from 'react';
import { findParty } from '../api';
import { Formik, Form } from 'formik';
import { TextField } from '../components';
import { Party } from '../types';
import * as Yup from 'yup';

export type RsvpSearchProps = {
  onFound: (party: Party) => void;
};

export type RsvpSearchType = {
  name: string;
};

export const RsvpSearch: React.FC<RsvpSearchProps> = ({ onFound }) => {
  const handleSubmit = useCallback(async (values: RsvpSearchType) => {
    const result = await findParty(values.name);

    if (result?.data) {
      onFound(result.data);
    }
  }, [ onFound ]);

  const initialValues: RsvpSearchType = {
    name: ''
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              name: Yup.string()
                .required('Please enter your name')
            })}>
            
            <Form>

              <div className="input-group">
                Please enter the full name of one guest as it appears on your invitation
                <TextField
                  name="name"
                  
                />
              </div>

              <Button type="submit"
                colorScheme="blackAlpha"
                size="md">CONFIRM</Button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};