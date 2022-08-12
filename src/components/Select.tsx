import { Select as ChakraSelect, SelectProps as ChakraSelectProps } from '@chakra-ui/react';
import { useField } from 'formik';

export type SelectProps = ChakraSelectProps & {
  name: string;
};

export const Select: React.FC<SelectProps> = props => {
  const [ field ] = useField(props.name);

  return (
    <ChakraSelect
      {...field}
      {...props}
    />
  );
};

//use error messages/maybe validation with yup