//react
import { useState, type BaseSyntheticEvent } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { setActiveHover } from "../../Redux/Slices/UpgradeSliceUIExtensions";
import type { StoreDispatch, StoreState } from "../../Redux/Store";
//models
import type { Upgrade } from "../../Models/Upgrade";
//components
import { UpgradeStateHandler } from "../STATE_COMPONENTS_ONLY/UpgradeStateHandler";

import style from "./sidebar.module.css";

export const Sidebar = () => {
  const [ids, setIds] = useState<Upgrade["id"][]>([]);
  const upgradeState = useSelector((state: StoreState) => state.upgrade);
  const dispatch = useDispatch<StoreDispatch>();

  const onUpgradeClickedHandler = (e: BaseSyntheticEvent) => {
    const id = ids.find((id) => id == e.target.id);
    if (id) return;
    setIds((prev) => [...prev, e.target.id]);
  };

  return (
    <div className={style["sidebar-main"]}>
      <h1>Upgrade</h1>
      <div className={style["upgrade-wrapper"]}>
        {(Object.entries(upgradeState) as [Upgrade["id"], Upgrade][]).map(
          (i) => (
            <button
              disabled={upgradeState[i[0]].isResearching}
              id={i[1].id}
              onClick={(e: BaseSyntheticEvent) => onUpgradeClickedHandler(e)}
              className={style["upgrade-button"]}
              key={i[0]}
            >
              {/* need fix here for counter UI */}
              <div
                style={{
                  userSelect: "none",
                  width: "100%",
                  height: "100%",
                  msUserSelect: "none",
                  position: "relative",
                }}
              >
                {i[1].timeToComplete / 1000}
              </div>
              <img
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
                id={i[1].id}
                src={i[1].backgroundPic}
                className={style["upgrade-picture"]}
                style={{ opacity: i[1].isResearching ? 0.5 : 1 }}
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

      {/* these are just for asynchronous state setting with useEffect and
      setTimeout */}
      {ids.length
        ? ids.map((id) => (
            <UpgradeStateHandler key={id} id={id} setIds={setIds} />
          ))
        : ""}
    </div>
  );
};
