import ProfileLink from '../components/ProfileLink'
import Link from 'next/link';

const About = () => {
  return (
    <div className="mt-3">
      <p className="display-4 ">About Race Calendar</p>
      <p>
        A directory of the best <Link href="https://en.wikipedia.org/wiki/Alleycat_race">Alleycat</Link> races in North America. 
        Race Calendar is developed in New York City to keep track of the 
        best races for athletes, participants and spectators. Use race calendar to keep informed on Alleycats
        throughout U.S.A, Mexico and Canada.
      </p>

      <h3>Race Hosts</h3>
      <p>See a <Link href="/race-hosts">directory of Alleycat race hosts</Link>. 
      From first time organizers to veterans and pioneers, a compilation of the current Alleycat organizers. Are you hosting a race? 

        Send races and 
        events to <ProfileLink username='brokeshutter' />. Listings your race is free.
      </p>

      <h3>International Races</h3>
      <p>Please get in touch with <ProfileLink username='brokeshutter' /> if 
      you are hosting a race outside the United States / North America.</p>

    </div>
  )
}
export default About