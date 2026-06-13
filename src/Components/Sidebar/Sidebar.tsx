import { useSelector } from "react-redux";
import style from "./sidebar.module.css";
import type { StoreState } from "../../Redux/Store";
import type { Upgrade } from "../../Models/Upgrade";

export const Sidebar = () => {
  const upgradeState = useSelector((state: StoreState) => state.upgrade);

  return (
    <div className={style["sidebar-main"]}>
      <h1>Upgrade</h1>
      {/* WTF!? */}
      {(Object.entries(upgradeState) as unknown as Upgrade["id"][]).map()}
      <h1>Send minions</h1>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, autem non
        quae ab magnam vel dignissimos sapiente atque perferendis fugiat cumque
        inventore excepturi cum, assumenda dolores, necessitatibus accusantium
        consequuntur at?
      </div>
    </div>
  );
};
