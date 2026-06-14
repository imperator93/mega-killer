import type { Upgrade } from "../../Models/Upgrade";
import { useSelector } from "react-redux";
import type { StoreState } from "../../Redux/Store";

export const Popup = ({ item }: { item: Upgrade }) => {
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
      <h5>{item?.name}</h5>
      <div>{item?.description}</div>
      <div>
        <strong>Level </strong>
        {item?.level}
      </div>
      <div>{item?.cost}</div>
    </div>
  );
};
