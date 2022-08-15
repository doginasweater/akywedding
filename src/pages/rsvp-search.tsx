import { Button } from '@chakra-ui/react';
import { useState, useCallback, useEffect } from 'react';
import { findParty } from '../api';
import { Formik, Form } from 'formik';
import { TextField } from '../components';

export type RsvpSearchType = {
  name: string;
};

export const RsvpSearch: React.FC = () => {

  const [ party, setParty ] = useState();

  const handleSubmit = useCallback(async (values: RsvpSearchType) => {
    const result = await findParty(values.name);
  }, []);


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