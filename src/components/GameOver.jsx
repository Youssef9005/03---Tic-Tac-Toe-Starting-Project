export default function GameOver({name , onSelect}) {
  return (  
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{name ? `${name} Won` : "it's draw"}</p>
      <button onClick={onSelect}>Rematch</button>
    </div>
  );
}