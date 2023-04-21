import AboutUs from '~/components/AboutUs'
import Explore from '~/components/Explore'
import New from '~/components/New'
import Room from '~/components/Room'
import Slide from '~/components/Slide'
import Slider from '~/components/Slider'

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUs page="home" />
      <Explore />
      <Room page="home" />
      <Slide />
      <New />
    </>
  )
}
