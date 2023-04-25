import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import style from "../styles/Explore.module.scss";
import useTranslation from "next-translate/useTranslation";

function Explore() {
  const { t } = useTranslation("common");
  return (
    <div className={style.explore}>
      <div className={style.container}>
        <div className={style.title}>
          <span>{t("explore_sub_title")}</span>
          <h1>{t("explore_title")}</h1>
          <p>{t("explore_desc")}</p>
        </div>

        <div className={style.items}>
          <div className={style.row}>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/explore-1.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <h2>{t("explore_feature_1_title")}</h2>
                <p>{t("explore_feature_1_desc")}</p>

                <Link href="/">
                  {t("explore_read_more")}
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/explore-2.png"
                  height={250}
                  width={200}
                  alt="Quality Room"
                />
                <h2>{t("explore_feature_2_title")}</h2>
                <p>{t("explore_feature_2_desc")}</p>

                <Link href="/">
                  {t("explore_read_more")}
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/explore-3.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <h2>{t("explore_feature_3_title")}</h2>
                <p>{t("explore_feature_3_desc")}</p>

                <Link href="/">
                  {t("explore_read_more")}
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/explore-4.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <h2>{t("explore_feature_4_title")}</h2>
                <p>{t("explore_feature_4_desc")}</p>

                <Link href="/">
                  {t("explore_read_more")}
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
