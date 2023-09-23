import React from "react";
import { View, Text } from "react-native";
import Coin from "../../../../assets/data/crytpo.json";
import CoinDetailedHeader from "./comp/CoinDetailedHeader";

const CoinDetailedScreens = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price},
  } = Coin;

  return (
    <View style={{paddingHorizontal: 10}}>
      <CoinDetailedHeader
        image={small}
        name={name}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View> 
      <Text style={{color: "white"}}>{name}</Text>
      <Text style={{color: "white"}}>${current_price.usd}</Text>
      </View>
    </View>
  );
};
export default CoinDetailedScreens;
