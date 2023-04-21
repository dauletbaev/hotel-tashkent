import Image from 'next/image'

function AboutFeature() {
  return (
    <div className="about-feature">
      <div className="container">
        <div className="title">
          <span>Our Features</span>
          <h1>Sunny and warm Nukus is the capital of Karakalpakstan</h1>
          <p>
            Proin consectetur non dolor vitae pulvinar. Pellentesque
            sollicitudin dolor eget neque viverra, sed interdum metus interdum.
            Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
        <div className="features">
          <div className="left">
            <div className="items">
              <div className="item">
                <Image
                  src="/images/about-feature-1.jpg"
                  width={200}
                  height={250}
                  alt=""
                />
                <h2>Furniture</h2>
                <span>
                  Our furniture brought from abroad to order. A carefully
                  selected palette of color and style will always be
                  recognizable among our guests.
                </span>
                <b></b>
              </div>
              <div className="item">
                <Image
                  src="/images/about-feature-2.jpeg"
                  width={200}
                  height={250}
                  alt=""
                />
                <h2>Best service</h2>
                <span>
                  Our motto is to be the best in our field. And the most
                  important thing is to always keep a high level of service.
                </span>
                <b></b>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="items">
              <div className="item">
                <Image
                  src="/images/about-feature-3.jpg"
                  width={200}
                  height={250}
                  alt=""
                />
                <h2>Food and beverages</h2>
                <span>
                  Delicious and healthy food is always to everyone&apos;s
                  liking, especially when food reduces fatigue and stress during
                  travel. And we know about this!
                </span>
                <b></b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFeature
