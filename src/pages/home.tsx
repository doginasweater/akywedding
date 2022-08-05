import { Button, ButtonGroup } from '@chakra-ui/react';

export const Home: React.FC = () => {
  return (
    <main>

      <header>

        <section className="header-text">
        <div>
          <h1>Aky &amp; Andrew</h1>
          <h2>16 October 2022</h2>
          <h3>Cave Spring | Inn on the Twenty</h3>
        </div>

        <div>
        <Button colorScheme="white" variant="outline">RSVP</Button>
          </div>
        </section>

        <div className="hero">
          <img src="http://placekitten.com/1920/1080"></img>
        </div>

      </header>




      <section>
        <article className="event">
          <div>
            <h4>Events</h4>
            <p className="subtitle">Jordan, Niagara, Ontario</p>
            <h5>Ceremony</h5>
            <p className="fancy">Cave Spring Vineyard</p>
            <p>4:00PM</p>
            <p>~</p>
            <h5>Reception</h5>
            <p className="fancy">Inn on the Twenty</p>
            <p>5:30PM - 1:00AM</p>
            <p>Join us for cocktails, dinner, wine, and dancing</p>
          </div>
          <div>
            <img src="http://placekitten.com/500/500"></img>
          </div>
        </article>  
      </section>

      <section>
        <article className="travel">
          <h4>Travel</h4>
          <p>Info on hotels, travel, and ride sharing</p>
        </article>  
      </section>

      <section>
        <article className="registry">
          <h4>Registry</h4>
          <p>We are finally taking our dream vacation—previously scheduled for March 2020 and cancelled due to the pandemic—to Japan in autumn 2022 for our honeymoon. We would be so grateful if you would consider contributing to <a href="https://www.honeyfund.com/wedding/mac-donald-komar-10-17-2021" target="blank">our honeymoon fund via Honeyfund</a>.</p>
          <p>If you would prefer to give us a more conventional gift we can enjoy at home rather than away, we have also made a <a href="https://registry.thebay.com/registry/view-registry/akiandrew2021" target="blank">traditional registry at HBC</a>. Feel free to go rogue using this registry as inspiration.</p>
        </article>  
      </section>

      <section>
        <article className="story">
          <h4>Our Story</h4>
          <p>Aky and Andrew met in 2009 in a tiny little town called Trois-Pistoles on a French programme. Getting to know each other was pretty lost in translation, but Andrew overcame his clunky French and flip phone that kept deleting contact info, and Aky decided to take a chance. We spent that summer emailing each other while Andrew backpacked around Europe, and after a year of dating long distance while Aky was going to school in Ontario, we moved in together in Montreal in 2010. The rest, as they say, is history. Twelve years is a long time to spend by someone&apos;s side: we&apos;ve been through six apartments, two provinces, two undergrads and a Ph.D., more jobs than Aky can count, sickness, health, and everything in between. So when Andrew proposed by Lake Huron one spring afternoon, Aky said &quot;of course.&quot;</p>
          <p>We were married last year on 17 October, 2021. Because of pandemic restrictions, we had a very small event with only 20 guests in attendance. We can&apos;t wait to celebrate with our extended family and friends as we renew our vows. We will celebrate our marriage with a full ceremony and reception just the way we originally planned.</p>
          <p>Andrew Komar is from Calgary, Alberta. He&apos;s a civil engineer and Concrete Doctor who is really good at taking pictures of the cats. He likes Star Trek, being at the cottage, and reading science books.</p>
          <p>Aky Mac Donald is from Cape Breton Island, Nova Scotia. She&apos;s a Web Developer, ex-English teacher, and Japanese translator who puts a lot of videos of herself playing video games on the internet. She likes Final Fantasy, bubble tea, and being an incorrigible polyglot.</p>
          <p>We like to camp, go out for ramen, play video games together, and hang out with our two cats, Mister Spock and Tali&apos;Zorah vas Dundas. We presently live in Toronto.</p>
        </article>  
      </section>

    </main>
  );
};