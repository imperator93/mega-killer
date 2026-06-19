import type { Upgrade } from "../../Models/Upgrade";
import { useSelector } from "react-redux";
import type { StoreState } from "../../Redux/Store";
import type { Minion } from "../../Models/Minion";
import style from "./popup.module.css";

export const Popup = ({
  item,
  type,
}: {
  item: Upgrade | Minion;
  type: "upgrade" | "minion";
}) => {
  const crosshairState = useSelector((state: StoreState) => state.crosshair);
  return (
    <div
      className={style["main"]}
      style={{
        left: crosshairState.x - 45,
        top: crosshairState.y - 150,
      }}
    >
      {type == "upgrade" ? (
        <>
          <h5>{item.name}</h5>
          <div>{item.description}</div>
          <div>
            <strong>Level </strong>
            {item.level}
          </div>
          <div>{item.cost}</div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
