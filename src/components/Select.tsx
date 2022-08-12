import { Select as ChakraSelect, SelectProps as ChakraSelectProps } from '@chakra-ui/react';
import { useField } from 'formik';
import {
  FormControl,
  FormErrorMessage
} from '@chakra-ui/form-control';

export type SelectProps = ChakraSelectProps & {
  name: string;
};

export const Select: React.FC<SelectProps> = props => {
  const [ field, meta ] = useField(props.name);

  return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <ChakraSelect
        {...field}
        {...props}
        />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};