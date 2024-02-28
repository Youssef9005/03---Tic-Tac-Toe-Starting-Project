export default function Log({ log }) {
  let gameInfo = log;
  
  return (
    <ol id="log">
      {gameInfo.map((info) => <li key={`${info.Square.row}${info.Square.col}`}>{info.player} Selected {info.Square.row + 1},{info.Square.col + 1}</li>)}
    </ol>
  );
}