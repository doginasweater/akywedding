import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { useField } from 'formik';

export type InputProps = ChakraInputProps & {
  name: string;
};

export const Input: React.FC<InputProps> = props => {
  const [ field ] = useField(props.name);

  return (
    <ChakraInput
      {...field}
      {...props}
    />
  );
};