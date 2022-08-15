import { Button } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import { findParty } from '../api';
import { Formik, Form } from 'formik';
import { TextField } from '../components';
import { Party } from '../types';

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
  }, [onFound]);

  const initialValues: RsvpSearchType = {
    name: ''
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}>
            <Form>

              <div className="input-group">
                <TextField
                  name="name"
                  placeholder="Enter your full name"
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