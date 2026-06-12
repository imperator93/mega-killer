import style from "./app.module.css";
import { Crosshair } from "./Components/Crosshair/Crosshair";
import { PlayerInfo } from "./Components/Player/PlayerInfo";
import { Sidebar } from "./Components/Sidebar/Sidebar";

export const App = () => {
  return (
    <div className={style["main"]}>
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
