// import './slide.scss'
import Image from 'next/image'
import { IconStar } from '@tabler/icons-react'

function Slide() {
  return (
    <div className="slide">
      <div className="container">
        <div className="title">
          <span>Testimonial</span>
          <h1>What Our Clients Says</h1>
          <p>
            Proin consectetur non dolor vitae pulvinar. Pellentesque
            sollicitudin dolor eget neque viverra, sed interdum metus interdum.
            Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
        <div className="slide-container">
          <div className="slide-item">
            <div className="top">
              <Image
                src="/images/testi-avatar-1.png"
                width={200}
                height={250}
                alt=""
              />
              <div>
                <h2>Jina Nilson</h2>
                <span>Client</span>
              </div>
              <Image
                src="/images/testi-quote.png"
                height={250}
                width={200}
                alt=""
              />
            </div>
            <div className="stars">
              <IconStar className="icon" />
              <IconStar className="icon" />
              <IconStar className="icon" />
              <IconStar className="icon" />
              <IconStar className="icon" />
            </div>
            <p>
              “Phasellus aliquam quis lorem amet dapibus feugiat vitae purus
              vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies.
              Morbi vitae semper consequat ipsum semper quam”.
            </p>
          </div>

          <div className="slide-item">
            <div className="top">
              <Image
                src="/images/testi-avatar-1.png"
                width={200}
                height={250}
                alt=""
              />
              <div>
                <h2>Jina Nilson</h2>
                <span>Client</span>
              </div>
              <Image
                src="/images/testi-quote.png"
                height={250}
                width={200}
                alt=""
              />
            </div>
            <div className="stars">
              <IconStar className="icon" />
              <IconStar className="icon" />
              <IconStar className="icon" />
              <IconStar className="icon" />
              <IconStar className="icon" />
            </div>
            <p>
              “Phasellus aliquam quis lorem amet dapibus feugiat vitae purus
              vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies.
              Morbi vitae semper consequat ipsum semper quam”.
            </p>
          </div>

          <div className="slide-item">
            <div className="top">
              <Image
                src="/images/testi-avatar-1.png"
                width={200}
                height={250}
                alt=""
              />
              <div>
                <h2>Jina Nilson</h2>
                <span>Client</span>
              </div>
              <Image
                src="/images/testi-quote.png"
                width={200}
                height={250}
                alt=""
              />
            </div>
            <div className="stars">
              <IconStar className="icon" />
              <IconStar className="icon" />
              <IconStar className="icon" />
              <IconStar className="icon" />
              <IconStar className="icon" />
            </div>
            <p>
              “Phasellus aliquam quis lorem amet dapibus feugiat vitae purus
              vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies.
              Morbi vitae semper consequat ipsum semper quam”.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
