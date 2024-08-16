export default function BotaoMenos(props) {
  return (
    <div>
      <button onClick={props.funcao}
        style={{
          backgroundColor: "#ff5050",
          fontSize: "30px",
          height: "100px",
          width: "100px",
          border: "none",
          borderRadius: "10px"
        }}
      >
        -
      </button>
    </div>
  );
}
