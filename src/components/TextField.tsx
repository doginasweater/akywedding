import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/input';
import { useField } from 'formik';

export type TextFieldProps = ChakraInputProps & {
  name: string;
  label?: string;
};

//reusable text input component
export const TextField: React.FC<TextFieldProps> = props => {
  const [ field, meta ] = useField(props.name);

  return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <ChakraInput
        {...field}
        {...props}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};