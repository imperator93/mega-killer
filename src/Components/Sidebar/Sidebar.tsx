import { useDispatch, useSelector } from "react-redux";
import style from "./sidebar.module.css";
import type { StoreDispatch, StoreState } from "../../Redux/Store";
import type { Upgrade } from "../../Models/Upgrade";
import { useState, type BaseSyntheticEvent } from "react";
import { setActiveHover } from "../../Redux/Slices/UpgradeSliceUIExtensions";

export const Sidebar = () => {
  const upgradeState = useSelector((state: StoreState) => state.upgrade);
  const upgradeUIExtensionsState = useSelector(
    (state: StoreState) => state.upgradeUIExtenstions,
  );
  const dispatch = useDispatch<StoreDispatch>();

  return (
    <div className={style["sidebar-main"]}>
      <h1>Upgrade</h1>
      <div className={style["upgrade-wrapper"]}>
        {(Object.entries(upgradeState) as [Upgrade["id"], Upgrade][]).map(
          (i) => (
            <button
              onMouseEnter={(e: BaseSyntheticEvent) =>
                dispatch(
                  setActiveHover({ id: e.target.id, isHoveredOver: true }),
                )
              }
              onMouseLeave={(e: BaseSyntheticEvent) =>
                dispatch(
                  setActiveHover({ id: e.target.id, isHoveredOver: false }),
                )
              }
              className={style["upgrade-button"]}
              key={i[0]}
            >
              <img
                id={i[1].id}
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
