import Room from "~/components/Room";
import Tour from "~/components/Tour";
import style from "../styles/Rooms.module.scss";

export default function Rooms() {
  return (
    <div className={style.rooms}>
      <div className={style.top}>
        <h1>
          First impression are important, but last impression we leave with
          customer we leave the most lasting impression.
        </h1>
      </div>

      <Room page="room" />
      <Tour />
    </div>
  );
}
