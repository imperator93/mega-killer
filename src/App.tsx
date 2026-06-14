import { useSelector } from "react-redux";
import style from "./app.module.css";
import { Crosshair } from "./Components/Crosshair/Crosshair";
import { PlayerInfo } from "./Components/Player/PlayerInfo";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Popup } from "./Components/Small-Components/Popup";
import type { StoreState } from "./Redux/Store";

export const App = () => {
  const upgradeState = useSelector((state: StoreState) => state.upgrade);
  const upgradeUIExtensionsState = useSelector(
    (state: StoreState) => state.upgradeUIExtenstions,
  );
  return (
    <div style={{ userSelect: "none" }} className={style["main"]}>
      {upgradeUIExtensionsState.isHoveredOver ? (
        <Popup item={upgradeState[upgradeUIExtensionsState.id]} />
      ) : null}
      <Crosshair />
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PlayerInfo />
        <Sidebar />
      </div>
    </div>
  );
};
