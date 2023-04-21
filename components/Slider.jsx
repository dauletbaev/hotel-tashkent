import ImageSlider from './ImageSlider'

const slides = [
  {
    url: '/images/slider-bg-1.png',
    title: 'Enjoy a Luxury Experience',
  },
  {
    url: '/images/slider-bg-2.png',
    title: 'Enjoy a Luxury Experience',
  },
]

function Slider() {
  return (
    <div className="slider">
      <ImageSlider slides={slides} />
    </div>
  )
}

export default Slider
