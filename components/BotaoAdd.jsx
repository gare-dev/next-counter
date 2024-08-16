export default function BotaoAdd(props) {
  return (
    <div>
      <button onClick={props.funcao}
        style={{
          backgroundColor: "#2cc9ff",
          fontSize: "30px",
          height: "100px",
          width: "100px",
          border: "none",
          borderRadius: "10px",

        }}
      >
        +
      </button>
    </div>
  );
}
