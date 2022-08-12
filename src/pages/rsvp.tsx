import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useCallback, useState } from 'react';
import { Input, Select } from '../components';

export type TestFormType = {
  firstName: string;
  lastName: string;
  choice: string;
};

export const Rsvp: React.FC = () => {
  const [ resultText, setResultText ] = useState('');

  const initialValues: TestFormType = {
    firstName: '',
    lastName: '',
    choice: '',
  };

  const handleSubmit = useCallback((values: TestFormType) => {
    setResultText(JSON.stringify(values));
  }, []);

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Input name="firstName" placeholder="First name" />
          <Input name="lastName" placeholder="Last name" />
          <Select name="choice" placeholder="Pick one">
            <option value="beans">Beans</option>
            <option value="ham">Ham</option>
            <option value="burritos">Burritos</option>
          </Select>
          <Button type="submit">
            Do it
          </Button>
        </Form>
      </Formik>
      <p>{resultText}</p>
    </>
  );
};