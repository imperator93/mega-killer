import style from "./app.module.css";
import { Crosshair } from "./Components/Crosshair/Crosshair";
import { Sidebar } from "./Components/Sidebar/Sidebar";

export const App = () => {
  return (
    <div className={style["main"]}>
      <Crosshair />
      <Sidebar />
    </div>
  );
};
