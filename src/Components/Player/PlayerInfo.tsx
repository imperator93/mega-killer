import style from "./playerInfo.module.css";

export const PlayerInfo = () => {
  const player = {
    name: "leo",
    currentHealth: 500,
    maxHealth: 1000,
    gold: 1000,
  };
  return (
    <div className={style["player-info-main"]}>
      <div className={style["flex-wrapper"]}>
        <div className={style["health-bar-main"]}>
          <div
            className={style["health"]}
            style={{
              width: `${(player.currentHealth / player.maxHealth) * 100}%`,
            }}
          ></div>
          {player.currentHealth}/{player.maxHealth}
        </div>
        <h2 className={style["name"]}>{player.name}</h2>
      </div>
      <div>test</div>
    </div>
  );
};
