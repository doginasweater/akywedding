import {
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';



export const Home: React.FC = () => {
  return (
    <div className="home">

      <section className="main-section">
        <div className="header-text">
          <h1>Aky &amp; Andrew</h1>
        </div>
        <div className="details">
          <h2>16 October 2022</h2>
          <h3>Cave Spring | Inn on the Twenty</h3>
          <RouterLink to="/rsvp">
            <Button colorScheme="blackAlpha" size="lg">RSVP</Button>
          </RouterLink>
        </div>
      </section>

      <section>
        <article className="event">
          <div>
            <h4>Events</h4>
            <h5>Ceremony</h5>

            <p>Cave Spring Vineyard</p>
            <p className="subtitle">Beamsville, Ontario</p>
            <p>4:00PM</p>
            <p>~</p>
            <h5>Reception</h5>
            <p>Inn on the Twenty</p>
            <p className="subtitle">Jordan, Ontario</p>
            <p>5:30PM - 1:00AM</p>
            <p>Join us for cocktails, dinner, wine, and dancing</p>
          </div>

        </article>
      </section>



      <section>
        <article className="story">
          <h4>Our Story</h4>
          <p>Aky and Andrew met in 2009 in a tiny little town called Trois-Pistoles on a French programme. Getting to know each other was pretty lost in translation, but Andrew overcame his clunky French and flip phone that kept deleting contact info, and Aky decided to take a chance. We spent that summer emailing each other while Andrew backpacked around Europe, and after a year of dating long distance while Aky was going to school in Ontario, we moved in together in Montreal in 2010. The rest, as they say, is history. Twelve years is a long time to spend by someone&apos;s side: we&apos;ve been through six apartments, two provinces, two undergrads and a Ph.D., more jobs than Aky can count, sickness, health, and everything in between. So when Andrew proposed by Lake Huron one spring afternoon, Aky said &quot;of course.&quot;</p>
          <p>We were married last year on 17 October, 2021. Because of pandemic restrictions, we had a very small event with just over 20 guests in attendance. We can&apos;t wait to celebrate with our extended family and friends as we renew our vows. We will celebrate our marriage with a full ceremony and reception just the way we originally planned.</p>
          <p>Andrew Komar is from Calgary, Alberta. He&apos;s a civil engineer and Concrete Doctor who is really good at taking pictures of the cats. He likes Star Trek, being at the cottage, and reading science books.</p>
          <p>Aky Mac Donald is from Cape Breton Island, Nova Scotia. She&apos;s a Web Developer, ex-English teacher, and Japanese translator who puts a lot of videos of herself playing video games on the internet. She likes Final Fantasy, crochet, and being an incorrigible polyglot.</p>
          <p>We like to camp, go out for bubble tea, play video games together, and hang out with our two cats, Mister Spock and Tali&apos;Zorah vas Dundas. We presently live in Toronto.</p>
        </article>

      </section>

    </div>
  );
};