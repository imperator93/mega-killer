import type { BaseSyntheticEvent } from "react";
import type { Upgrade } from "./../../Models/Upgrade.ts";
import type { StoreDispatch } from "../../Redux/Store.ts";
import { useDispatch } from "react-redux";
import { setActiveHover } from "../../Redux/Slices/UpgradeSliceUIExtensions.ts";
import style from "./upgradeComponent.module.css";
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
      className={style["button"]}
      id={upgrade[0]}
      onMouseEnter={(e: BaseSyntheticEvent) =>
        dispatch(setActiveHover({ id: e.target.id, isHoveredOver: true }))
      }
      onMouseLeave={(e: BaseSyntheticEvent) =>
        dispatch(setActiveHover({ id: e.target.id, isHoveredOver: false }))
      }
      style={{ backgroundImage: `URL(${upgrade[1].backgroundPic})` }}
    ></button>
  );
};

// onMouseEnter={(e: BaseSyntheticEvent) =>
//         dispatch(setActiveHover({ id: e.target.id, isHoveredOver: true }))
//       }
//       onMouseLeave={(e: BaseSyntheticEvent) =>
//         dispatch(setActiveHover({ id: e.target.id, isHoveredOver: false }))
//       }
