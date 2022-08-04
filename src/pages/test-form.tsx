import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useCallback, useState } from 'react';
import { Input } from '../components';

export type TestFormType = {
  firstName: string;
  lastName: string;
};

export const TestForm: React.FC = () => {
  const [ resultText, setResultText ] = useState('');

  const initialValues: TestFormType = {
    firstName: '',
    lastName: ''
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
          <Button type="submit">
            Do it
          </Button>
        </Form>
      </Formik>
      <p>{resultText}</p>
    </>
  );
};