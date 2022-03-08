import ProfileLink from '../components/ProfileLink'
import Link from 'next/link';

const About = () => {
  return (
    <div className="mt-3">
      <p className="display-4 ">About Race Calendar</p>
      <p>
        A directory of the best <Link href="https://en.wikipedia.org/wiki/Alleycat_race">Alleycat</Link> races in North America. 
        Race Calendar is developed in New York City as way to keep track of the 
        best races for athletes, participants and spectators to keep informed on Alleycats
        throughout U.S.A, Mexico and Canada.
      </p>

      <h3>Hosting a Race?</h3>
      <p>
        Send races and 
        events to <ProfileLink username='brokeshutter' />. Listings your race is free.
      </p>

      <h3>International Races?</h3>
      <p>Please get in touch with <ProfileLink username='brokeshutter' /> if 
      you are hosting a race outside the United States / North America.</p>
    </div>
  )
}
export default About