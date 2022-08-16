import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Textarea as ChakraTextarea, TextareaProps as ChakraTextareaProps } from '@chakra-ui/react';
import { useField } from 'formik';

export type TextAreaProps = ChakraTextareaProps & {
  name: string;
  label?: string;
};

//reusable text input component
export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  const [ field, meta ] = useField(props.name);

  return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <ChakraTextarea
        {...field}
        {...props}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};