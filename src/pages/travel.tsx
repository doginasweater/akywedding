import {
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


export const Travel = () => {
  return (
      <section>
        <article className="travel">
          <h4>Travel</h4>
            <h5>Getting to Niagara</h5>
            <h5>Getting to Cave Spring Vineyard</h5>
            <h5>Getting to Inn on the Twenty</h5>
      </article>  
      
      <article className="hotels">
        <h4>Hotels &amp; Accommodations</h4>
        <h5>Hotels</h5>
        <Text>Jordan House and Inn on the Twenty offer accommodations directly at the reception site. However, space is limited. Nearby options include the <Link as={RouterLink} to="">Ramada Jordan</Link> and </Text>
        
          <h5>Other Accommodations</h5>
      </article>

      <article className="transport">
        <h4>Transportation</h4>
          <h5>Carpooling</h5>
          <h5>Uber &amp; Taxis</h5>
            <Text>The area has uber service to help you get back to your accommodations safely. Taxis are also available out of St. Catharines, but need to be ordered ahead. Plan ahead to end the night safely, and consider sharing a ride with other guests.</Text>
      </article>
      
      </section>
  );
};
