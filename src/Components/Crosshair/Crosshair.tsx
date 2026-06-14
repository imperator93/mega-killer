import { useEffect } from "react";
import style from "./crosshair.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "../../Redux/Slices/CrosshairSlice";
import type { StoreState, StoreDispatch } from "../../Redux/Store";

export const Crosshair = () => {
  const crosshairState = useSelector((state: StoreState) => state.crosshair);
  const dispatch = useDispatch<StoreDispatch>();
  useEffect(() => {
    const mouseListener = (e: MouseEvent) => {
      dispatch(setPosition({ x: e.x, y: e.y }));
    };
    document.addEventListener("mousemove", mouseListener);
    return () => removeEventListener("mousemove", mouseListener);
  }, [dispatch]);
  return (
    <div
      style={{
        left: crosshairState.x - 50,
        top: crosshairState.y - 50,
      }}
      className={style["crosshair"]}
    ></div>
  );
};
