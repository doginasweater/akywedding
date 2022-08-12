import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Textarea } from '@chakra-ui/react';
import { Field, useField } from 'formik';


//reusable text input component
export const TextAreaField = ({ label, ...props }) => {
  const [ field, meta ] = useField(props);

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel htmlFor="email">{label}</FormLabel>
      <Field as={Textarea}
        {...field}
        {...props}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

