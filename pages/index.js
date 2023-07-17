
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import TwitterEmbed from '../components/TwitterEmbed';
import Partners from '../components/Our Partners';

export default function Home() {
  return (
    <div>
      <Hero heading='مـنصـة تَـدرّب' message='رفيقة التقدم في رحلة التطور والتغيير، لإستكشاف فرص لا حدود لها' />
      <AboutUs />
      <Partners />
      <TwitterEmbed tweetId="1667957943331872768" />
    </div>
  );
}


