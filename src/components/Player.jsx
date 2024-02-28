import { useState } from "react";

export default function Player({name , symbol , isActive , onChangeName}) {
  const [isEditing , setEditing] = useState(false);
  const [PlayerName , setPlayerName] = useState(name);

  let btnTxt = "Edit"
  

  function toggle() {
    setEditing(editing => !isEditing);

    if(isEditing == true) {
      onChangeName(symbol , playerName);
    }
  }

  function handelChange(event) {
    setPlayerName(event.target.value);
  };

  
  let playerName = <span className="player-name">{PlayerName}</span>;


  if(isEditing) {
    playerName = <input type="text" required defaultValue={PlayerName} onChange={handelChange}/>;
  };

  

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
      {playerName}
      <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggle}>{isEditing ? btnTxt = "Save" : btnTxt = "Edit"}</button>
    </li>
  );
};