// import './new.scss'
import Image from 'next/image'
import Link from 'next/link'

function New() {
  return (
    <div className="new">
      <div className="container">
        <div className="title">
          <span>Our Blog</span>
          <h1>Latest Blog & News</h1>
          <p>
            Proin consectetur non dolor vitae pulvinar. Pellentesque
            sollicitudin dolor eget neque viverra, sed interdum metus interdum.
            Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
        <div className="items">
          <div className="item">
            <div className="top">
              <Image src="/images/new-1.jpg" width={200} height={250} alt="" />
            </div>
            <div className="bottom">
              <span>3rd Aprip 2023</span>
              <h2>Cras accumsan nulla nec lacus ultricies placerat.</h2>
              <p>
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.
              </p>
              <Link href="/">READ MORE</Link>
            </div>
          </div>

          <div className="item">
            <div className="top">
              <Image src="/images/new-2.jpg" width={200} height={250} alt="" />
            </div>
            <div className="bottom">
              <span>3rd Aprip 2023</span>
              <h2>Cras accumsan nulla nec lacus ultricies placerat.</h2>
              <p>
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.
              </p>
              <Link href="/">READ MORE</Link>
            </div>
          </div>

          <div className="item">
            <div className="top">
              <Image src="/images/new-3.jpg" width={200} height={250} alt="" />
            </div>
            <div className="bottom">
              <span>3rd Aprip 2023</span>
              <h2>Cras accumsan nulla nec lacus ultricies placerat.</h2>
              <p>
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.
              </p>

              <Link href="/">READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
