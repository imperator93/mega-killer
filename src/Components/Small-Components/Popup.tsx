import type { Upgrade } from "../../Models/Upgrade";
import { useSelector } from "react-redux";
import type { StoreState } from "../../Redux/Store";
import type { Minion } from "../../Models/Minion";

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
      style={{
        width: "10vh",
        height: "fit-content",
        position: "absolute",
        left: crosshairState.x - 45,
        top: crosshairState.y - 150,
        background: "white",
        zIndex: 3,
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
