import type { BaseSyntheticEvent } from "react";
import type { Upgrade } from "./../../Models/Upgrade.ts";
import type { StoreDispatch } from "../../Redux/Store.ts";
import { useDispatch } from "react-redux";
import { setActiveHover } from "../../Redux/Slices/UpgradeSliceUIExtensions.ts";

export const UpgradeComponent = ({
  upgrade,
  onUpgradeClickedHandler,
}: {
  upgrade: [Upgrade["id"], Upgrade];
  onUpgradeClickedHandler: (event: BaseSyntheticEvent) => void;
}) => {
  const dispatch = useDispatch<StoreDispatch>();

  return (
    <button
      style={{ backgroundImage: `URL(${upgrade[1].backgroundPic})` }}
      id={upgrade[1].id}
      key={upgrade[0]}
      disabled={upgrade[1].isResearching}
      onClick={(e: BaseSyntheticEvent) => onUpgradeClickedHandler(e)}
    >
      <div>
        <div
          id={upgrade[1].id}
          style={{
            position: "absolute",
            width: `${((upgrade[1].researchLength - upgrade[1].timeToComplete) / upgrade[1].timeToComplete) * 100}%`,
            height: "100%",
            backgroundImage: `URL("${upgrade[1].backgroundPic}")`,
          }}
        />
        <div>
          {upgrade[1].isResearching ? upgrade[1].timeToComplete / 1000 : null}
        </div>

        <img
          onMouseEnter={(e: BaseSyntheticEvent) =>
            dispatch(setActiveHover({ id: e.target.id, isHoveredOver: true }))
          }
          onMouseLeave={(e: BaseSyntheticEvent) =>
            dispatch(setActiveHover({ id: e.target.id, isHoveredOver: false }))
          }
          id={upgrade[1].id}
          src={upgrade[1].backgroundPic}
          style={{ opacity: upgrade[1].isResearching ? 0.5 : 1 }}
        />
      </div>
    </button>
  );
};
