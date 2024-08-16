import { useState } from "react";
import BotaoAdd from "../../components/BotaoAdd";
import BotaoMenos from "../../components/BotaoMenos";

export default function contador() {
  const estilo = {
    display: "flex",
    gap: "40px",
  };
  const bodyStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "100px",
    height: "100vh",
  };
  const textStyle = {
    fontSize: "60px",
    fontFamily: "Arial",
  };

  const [add, adicionar] = useState(0);

  function addClick() {
    console.log("Clique adicionar");
    adicionar(add + 1);
  }

  function lessClick() {
    console.log("Clique remover!");
    adicionar(add - 1);
  }

  return (
    <div style={bodyStyle}>
      <div>
        <span style={textStyle}>{add}</span>
      </div>

      <div style={estilo}>
        <div>
          <BotaoAdd funcao={addClick} />
        </div>

        <div>
          <BotaoMenos funcao={lessClick} />
        </div>
      </div>
    </div>
  );
}
