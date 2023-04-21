import Room from '~/components/Room'
import Tour from '~/components/Tour'

export default function Rooms() {
  return (
    <div className="rooms">
      <div className="top">
        <h1>
          First impression are important, but last impression we leave with
          customer we leave the most lasting impression.
        </h1>
      </div>

      <Room page="view" />
      <Tour />
    </div>
  )
}
