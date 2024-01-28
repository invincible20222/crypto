import React, { useContext } from "react";
import "./styles.css";
import { CoinsContext } from "../../context/coinsContext";
import { useFilterCoins } from "../../helpers/hooks/useFilterCoins";

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext;

  const { setValue, value } = useFilterCoins(setCoins, coins);

  return (
    <div className="filter-block">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        placeholder="bitcoin"
        type="text"
      />
    </div>
  );
};

export default React.memo(FilterBlock);
