import AboutUs from '~/components/AboutUs'
import AboutFeature from '~/components/AboutFeature'

export default function About() {
  return (
    <div className="about">
      <div className="top">
        <h1>
          All of our accommodation options comprise luxury amenities such as tea
          & coffee makers, minibars
        </h1>
      </div>
      <AboutUs page="about" />
      <AboutFeature />
    </div>
  )
}
