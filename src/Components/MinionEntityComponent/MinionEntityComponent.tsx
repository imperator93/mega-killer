import type { Minion } from "../../Models/Minion";

export const MinionEntityComponent = ({ minion }: { minion: Minion }) => {
  <div>
    <div
      style={{
        position: "absolute",
        border: "2px solid black",
        borderRadius: "rounded",
        width: `${minion.size}px`,
        height: `${minion.size}px`,
        backgroundImage: `URL(${minion.background_active_pic})`,
      }}
    ></div>
  </div>;
};
