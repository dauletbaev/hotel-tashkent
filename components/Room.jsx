// import './room.scss'
import Link from "next/link";
import Image from "next/image";
import {
  IconWifi,
  IconCoffee,
  IconToolsKitchen2,
  IconHotelService,
} from "@tabler/icons-react";
import style from "../styles/Room.module.scss";

function Room({ page }) {
  return (
    <div className={style.room}>
      <div className={style.container}>
        <div className={style.title}>
          {page !== "view" && <span>Room</span>}
          <h1>{page === "view" ? "Other rooms" : "Rooms & Suites"}</h1>
          {page !== "view" && (
            <p>
              Proin consectetur non dolor vitae pulvinar. Pellentesque
              sollicitudin dolor eget neque viverra, sed interdum metus
              interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor
              iaculis vel
            </p>
          )}
        </div>

        <div className={style.items}>
          <div className={style.row}>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/room-1.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <div className={style.bottom}>
                  <div className={style.buttons}>
                    <Link href="/view-room">View</Link>
                    <Link href="/">Book Now</Link>
                  </div>
                  <h2>Delux Double Room</h2>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <div className={style.icons}>
                    <IconWifi className={style.icon} />
                    <IconHotelService className={style.icon} />
                    <IconCoffee className={style.icon} />
                    <IconToolsKitchen2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/room-2.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <div className={style.bottom}>
                  <div className={style.buttons}>
                    <Link href="/">View</Link>
                    <Link href="/">Book Now</Link>
                  </div>
                  <h2>Super Balcony Double Room</h2>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <div className={style.icons}>
                    <IconWifi className={style.icon} />
                    <IconHotelService className={style.icon} />
                    <IconCoffee className={style.icon} />
                    <IconToolsKitchen2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.row}>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/room-3.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <div className={style.bottom}>
                  <div className={style.buttons}>
                    <Link href="/">View</Link>
                    <Link href="/">Book Now</Link>
                  </div>
                  <h2>Superior Double Room</h2>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <div className={style.icons}>
                    <IconWifi className={style.icon} />
                    <IconHotelService className={style.icon} />
                    <IconCoffee className={style.icon} />
                    <IconToolsKitchen2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/room-2.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <div className={style.bottom}>
                  <div className={style.buttons}>
                    <Link href="/">View</Link>
                    <Link href="/">Book Now</Link>
                  </div>
                  <h2>Superior Double Room</h2>
                  <p>
                    Nullam molestie lacus sit amet velit fermentum feugiat.
                    Mauris auctor eget nunc sit amet.
                  </p>
                  <div className={style.icons}>
                    <IconWifi className={style.icon} />
                    <IconHotelService className={style.icon} />
                    <IconCoffee className={style.icon} />
                    <IconToolsKitchen2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
