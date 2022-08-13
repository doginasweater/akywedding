import {
  Link
} from '@chakra-ui/react';


export const Travel = () => {
  return (
    <main>
      <section>
        <article className="travel">
          <h2>Travel</h2>
        <h3>Getting to Niagara</h3>
        <p>If traveling by air, there are two main options for getting to Niagara from Toronto: by car or by GO train on the Lakeshore West Line. However, the GO service is a commuter line and thus does not run all day. From Pearson (Toronto International) Airport, the UP Express train can take you to Union Station to access the GO train. From Billy Bishop (Toronto City) Airport, a quick streetcar ride can get you to Union. The nearest GO station to the wedding venue is St. Catharines. St. Catharines is about 15 minutes by car from the wedding venue.</p>
        <p>It is much simpler to drive to the Niagara region via the QEW, so if possible, renting a car is the most convenient option. If renting a car, flying into Pearson is much more convenient than flyng into Billy Bishop. Reach out to Aky or Andrew if you need help planning your trip, can offer ride sharing, or would like to find a ride.</p>

        <h3>Getting to Cave Spring Vineyard</h3>
        <p>The ceremony at Cave Spring Vineyard is about a 10 minute drive from the reception at Inn on the Twenty. Alternative forms of transportation are not as widely available, so carpooling is encouraged.</p>
        
      </article>  
      
      <article className="hotels">
        <h2>Hotels &amp; Accommodations</h2>
        <h3>Hotels</h3>
          <p><Link href="https://www.vintage-hotels.com/jordan-house/" isExternal color="grey.500">Jordan House</Link> and <Link href="https://www.vintage-hotels.com/inn-on-the-twenty/" isExternal color="grey.500">Inn on the Twenty</Link> offer accommodations directly at the reception site. However, space is limited. Nearby options include:</p>
        <ul>
          <li>
              <Link href="https://www.bestwestern.com/en_US/book/hotels-in-st-catharines/best-western-st-catharines-hotel-conference-centre/propertyCode.66105.html" isExternal color="grey.500">Best Western St. Catharines</Link>
          </li>
            <li>
              <Link href="https://www.wyndhamhotels.com/en-ca/ramada/jordan-station-ontario/ramada-jordan-beacon-harbourside-resort/overview" isExternal color="grey.500">Ramada Jordan</Link>
            </li>
            <li>
              <Link href="https://www.ihg.com/holidayinn/hotels/us/en/st-catharines/ycmsa/hoteldetail" isExternal color="grey.500">Holiday Inn St. Catharines</Link>
          </li>
          <li>
              <Link href="https://www.capriinn.com/" isExternal color="grey.500">Capri Inn St. Catharines</Link>
          </li>
            <li><Link href="https://www.hilton.com/en/hotels/ycmmbhx-hampton-st-catharines-niagara/" isExternal color="grey.500">Hampton Inn St. Catharines</Link></li>
            <li><Link href="https://www.choicehotels.com/en-ca/ontario/st-catharines/comfort-inn-hotels/cn303" isExternal color="grey.500">Confort Inn St. Catharines</Link></li>
          </ul>
        
        <h2>Other Accommodations</h2>
          <p><Link href="https://www.airbnb.ca/s/Jordan--Lincoln--ON--Canada/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&place_id=ChIJCdXisahS04kRksOJhprJPuw&date_picker_type=calendar&checkin=2022-10-16&checkout=2022-10-17&source=structured_search_input_header&search_type=autocomplete_click" isExternal color="grey.500">Airbnb</Link> is another option, especially for large groups or if you plan to spend extra time enjoying the Niagara region. Search for "Jordan, Lincoln, ON" (or click the link—I've done it for you!)</p>

      </article>

      <article className="transport">
        <h2>Transportation</h2>

        <h3>Carpooling</h3>
        <p>Many guests will be driving to the venue. If you have room in your car, please let Aky or Andrew know if you would like to share your ride between venues or to hotels. Similarly, if you need help getting a ride, reach out to us. We'll do our best to hook you up with a fellow guest to share with.</p>

        <h3>Uber &amp; Taxis</h3>
        <p>The area has uber service to help you get back to your accommodations safely. Taxis are also available out of St. Catharines, but need to be ordered ahead. Plan ahead to end the night safely, and consider sharing a ride with other guests.</p>
      </article>
      
      </section>
      </main>
  );
};
