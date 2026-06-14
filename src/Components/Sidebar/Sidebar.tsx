import { useDispatch, useSelector } from "react-redux";
import style from "./sidebar.module.css";
import type { StoreDispatch, StoreState } from "../../Redux/Store";
import type { Upgrade } from "../../Models/Upgrade";
import { useState } from "react";
import { Popup } from "../Small-Components/Popup";

export const Sidebar = () => {
  const upgradeState = useSelector((state: StoreState) => state.upgrade);
  const dispatch = useDispatch<StoreDispatch>();
  const [hover, setHover] = useState(false);

  return (
    <div className={style["sidebar-main"]}>
      <h1>Upgrade</h1>
      <div className={style["upgrade-wrapper"]}>
        {(Object.entries(upgradeState) as [Upgrade["id"], Upgrade][]).map(
          (i) => (
            <button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={style["upgrade-button"]}
              key={i[0]}
            >
              {hover ? <Popup item={i[1]} /> : ""}
              <img
                className={style["upgrade-picture"]}
                src={i[1].backgroundPic}
              />
            </button>
          ),
        )}
      </div>
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
