import { Popup } from "../Small-Components/Popup.tsx";
import type { Minion } from "./../../Models/Minion.ts";
import style from "./minionShopComponent.module.css";

export const MinionShopComponent = ({ minion }: { minion: Minion }) => {
  return (
    <>
      <button
        style={{
          cursor: "pointer",
          height: "10%",
          backgroundImage: `URL("${minion.background_pic_anim_1}")`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className={style["main"]}
      ></button>
      <Popup item={minion} type="minion" />
    </>
  );
};
