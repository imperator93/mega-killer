import type { Minion } from "./../../Models/Minion.ts";
import style from "./minionShopComponent.module.css";

export const MinionShopComponent = ({ minion }: { minion: Minion }) => {
  return (
    <button
      style={{
        backgroundImage: `URL("${minion.background_pic_anim_1}")`,
        backgroundSize: "100%",
        objectFit: "cover",
      }}
      className={style["main"]}
    ></button>
  );
};
