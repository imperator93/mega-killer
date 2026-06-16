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
  id,
  setIds,
}: {
  id: Upgrade["id"];
  setIds: React.Dispatch<SetStateAction<Upgrade["id"][]>>;
}) => {
  const upgradeStateSingle = useSelector(
    (state: StoreState) => state.upgrade[id],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!upgradeStateSingle.isResearching) {
      dispatch(startResearching(id));
      return;
    }
    if (upgradeStateSingle.timeToComplete > 0) {
      const i = setTimeout(() => {
        dispatch(decrementTimer(id));
      }, 1000);
      return () => clearTimeout(i);
    }

    dispatch(upgradeFinished(id));
    setIds((prev) => prev.filter((item) => item != id));
  }, [
    id,
    dispatch,
    upgradeStateSingle.isResearching,
    upgradeStateSingle.timeToComplete,
    setIds,
  ]);
  return null;
};
