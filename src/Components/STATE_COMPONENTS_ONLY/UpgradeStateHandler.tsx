import { useEffect, type SetStateAction } from "react";
import type { Upgrade } from "../../Models/Upgrade";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementTimer,
  startResearching,
  upgradeFinished,
} from "../../Redux/Slices/UpgradeSlice";
import type { StoreState } from "../../Redux/Store";

export const UpgradeStateHandler = ({
  ids,
  setIds,
}: {
  ids: Upgrade["id"][];
  setIds: React.Dispatch<SetStateAction<Upgrade["id"][]>>;
}) => {
  const upgradeState = useSelector((state: StoreState) => state.upgrade);
  const dispatch = useDispatch();
  //bug with level increment when fast clicking between the upgrades
  useEffect(() => {
    ids.map((id) => {
      if (!upgradeState[id].isResearching) {
        dispatch(startResearching(id));
        return;
      }
      if (upgradeState[id].timeToComplete > 0) {
        const i = setTimeout(() => {
          dispatch(decrementTimer(id));
        }, 1000);
        return () => clearTimeout(i);
      }

      dispatch(upgradeFinished(id));
      setIds((prev) => prev.filter((item) => item != id));
    });
  }, [ids, dispatch, upgradeState, setIds]);
  return null;
};
