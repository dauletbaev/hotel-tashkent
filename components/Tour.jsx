import Image from 'next/image'

function Tour() {
  return (
    <div className="tour">
      <div className="left">
        <Image src="/images/tour.png" width={200} height={250} alt="" />
      </div>
      <div className="right">
        <span>Luxury Hotel</span>
        <h1>Pearl Of The Adriatic.</h1>
        <p>
          Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium.
          Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat
          porttitor.Aenean vehicula ligula eu rhoncus porttitor. Duis vel
          lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.
        </p>
        <p>
          Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus
          vitae lorem at, egestas consectetur urna. Integer id ultricies elit.
          Maecenas sodales nibh, quis posuere felis. In commodo mi lectus
          venenatis metus eget fringilla. Suspendisse varius ante eget.
        </p>
      </div>
    </div>
  )
}

export default Tour
