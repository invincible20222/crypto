import React from "react";
import { withRuBalance } from "../../helpers/hoc/withRuBalance";

import "./styles.css";

const Card = ({ balance, setBalance, ruBalance }) => {
  console.log(ruBalance);
  return (
    <div className="card">
      <div className="card-block">
        <p>Crypto-finance</p>
        <button onClick={setBalance}>
          Add money
        </button>
      </div>

      <div className="card-block">
        <p>Sergey</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};

export default withRuBalance(Card);
