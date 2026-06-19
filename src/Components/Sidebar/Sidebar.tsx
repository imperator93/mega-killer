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
import { MinionShopComponent } from "../MinionShopComponent/MinionShopComponent";

export const Sidebar = () => {
  const [ids, setIds] = useState<Upgrade["id"][]>([]);
  const upgradeState = useSelector((state: StoreState) => state.upgrade);
  const minionState = useSelector((state: StoreState) => state.minion);
  const dispatch = useDispatch<StoreDispatch>();

  const onUpgradeClickedHandler = (e: BaseSyntheticEvent) => {
    const id = ids.find((id) => id == e.target.id);
    if (id) return;
    setIds((prev) => [...prev, e.target.id]);
  };

  return (
    <div className={style["sidebar-main"]}>
      <h1>Upgrade</h1>
      <div className={style["upgrade-main"]}>
        {(Object.entries(upgradeState) as [Upgrade["id"], Upgrade][]).map(
          (i) => (
            <button
              className={style["upgrade-button"]}
              id={i[1].id}
              key={i[0]}
              disabled={upgradeState[i[0]].isResearching}
              onClick={(e: BaseSyntheticEvent) => onUpgradeClickedHandler(e)}
            >
              {/* need fix here for counter UI */}
              <div className={style["upgrade-wrapper"]}>
                <div className={style["counter-wrapper"]}>
                  {i[1].isResearching ? i[1].timeToComplete / 1000 : null}
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
              </div>
            </button>
          ),
        )}
      </div>
      <h1>Send minions</h1>
      <div className={style["minion-shop-main"]}>
        {Object.entries(minionState).map(([k, v]) => {
          return <MinionShopComponent key={k} minion={v} />;
        })}
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
