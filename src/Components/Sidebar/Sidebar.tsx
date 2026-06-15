import { useDispatch, useSelector, useStore } from "react-redux";
import style from "./sidebar.module.css";
import type { StoreDispatch, StoreState } from "../../Redux/Store";
import type { Upgrade } from "../../Models/Upgrade";
import { useEffect, useState, type BaseSyntheticEvent } from "react";
import { setActiveHover } from "../../Redux/Slices/UpgradeSliceUIExtensions";
import {
  decrementTimer,
  startResearching,
  upgradeFinished,
} from "../../Redux/Slices/UpgradeSlice";

export const Sidebar = () => {
  const [upId, setUpId] = useState<Upgrade["id"]>();
  const upgradeState = useSelector((state: StoreState) => state.upgrade);
  const dispatch = useDispatch<StoreDispatch>();

  //upgrades handler NEED FIX HERE!!!
  console.log(upgradeState[upId]);
  useEffect(() => {
    if (!upId) return;
    if (!upgradeState[upId].isResearching) dispatch(startResearching(upId));
    if (upgradeState[upId].timeToComplete == 0) {
      dispatch(upgradeFinished(upId));
      return;
    }
    const i = setInterval(() => {
      dispatch(decrementTimer(upId));
    }, 1000);

    return () => clearInterval(i);
  }, [dispatch, upId, upgradeState]);

  return (
    <div className={style["sidebar-main"]}>
      <h1>Upgrade</h1>
      <div className={style["upgrade-wrapper"]}>
        {(Object.entries(upgradeState) as [Upgrade["id"], Upgrade][]).map(
          (i) => (
            <button
              disabled={upgradeState[i[0]].isResearching}
              id={i[1].id}
              onClick={(e: BaseSyntheticEvent) => setUpId(e.target.id)}
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
                style={{ opacity: upgradeState[i[0]].isResearching ? 10 : "" }}
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
