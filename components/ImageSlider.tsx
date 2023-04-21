'use client'
import { useEffect, useState } from 'react'
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react'

interface Props {
  slides: {
    url: string
    title: string
  }[]
}

function ImageSlider({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hover, setHover] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 1 ? 0 : currentIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 1 ? 0 : currentIndex + 1
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? 1 : 0)
    }, 2500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div
      className="relative min-h-[730px] bg-cover bg-center flex items-center justify-center transition duration-500 ease-in-out"
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="text-white py-32 text-center">
        <h1 className="text-7xl">{slides[currentIndex].title}</h1>
        <p className="text-stone-300 max-w-md mx-auto my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vitae
          expedita voluptatum quis laborum nobis sit, ab aperiam sequi odio
          voluptates veritatis.
        </p>
        <button className="py-3 px-2 font-semibold border border-white">
          DISCOVER MORE
        </button>
        <button
          className={`w-14 h-14 rounded-full flex items-center justify-center bg-white transition-all delay-500 ease-out left-0 top-[50%] absolute ${
            hover ? 'translate-x-[100%]' : '-translate-x-[200%]'
          }`}
          onClick={goToPrevious}
        >
          <IconChevronLeft className="text-black" />
        </button>
        <button
          className={`w-14 h-14 rounded-full flex items-center justify-center bg-white transition-all delay-500 ease-out right-0 top-[50%] absolute ${
            hover ? '-translate-x-[100%]' : 'translate-x-[200%]'
          }`}
          onClick={goToNext}
        >
          <IconChevronRight className="text-black" />
        </button>
      </div>
    </div>
  )
}

export default ImageSlider
