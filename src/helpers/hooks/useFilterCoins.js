import { useEffect, useState } from "react";

export const useFilterCoins = (setCoins, coins) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value)
    );
    setCoins(filteredCoins);
  }, [value]);
  console.log("render filter");

  return { setValue, value };
};
