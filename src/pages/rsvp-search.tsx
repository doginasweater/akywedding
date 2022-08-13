import { Input, Button } from '@chakra-ui/react';

export const RsvpSearch: React.FC = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form className="form">

        <div className="input-group">
          <Input type="text" placeholder="Enter your name" className="form" />
          </div>
          <Button colorScheme="blackAlpha" size="md">CONFIRM</Button>
        </form>
      </div>
    </div>
  );
};