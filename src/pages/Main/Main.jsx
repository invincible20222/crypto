import React from "react";
import Card from "../../components/Card/Card";
import styles from "./styles.module.css";
import CoinsList from "../../components/CoinsList/CoinsList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";

const Main = ({ balance, setBalance, coins, setCoins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  );
};

export default Main;
