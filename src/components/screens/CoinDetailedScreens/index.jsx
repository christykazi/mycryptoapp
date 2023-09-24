import React from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import Coin from "../../../../assets/data/crytpo.json";
import CoinDetailedHeader from "./comp/CoinDetailedHeader";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from "@rainbow-me/animated-charts";

const CoinDetailedScreens = () => {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ChartPathProvider
        data={{
          points: prices.map((price) => ({ x: price[0], y: price[1] })),
          smoothings: "bezier",
        }}
      >
        <CoinDetailedHeader
          image={small}
          name={name}
          symbol={symbol}
          marketCapRank={market_cap_rank}
        />
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.currentPrice}>${current_price.usd}</Text>
          </View>
          <View
            style={{
              backgroundColor: percentageColor,
              flexDirection: "row",
              paddingHorizontal: 3,
              paddingVertical: 8,
              borderRadius: 5,
            }}
          >
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={12}
              color={"white"}
              style={{ alignSelf: "center", paddingRight: 7, marginRight: 5 }}
            />
            <Text style={styles.priceChange}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>

        <ChartPath
          height={screenWidth / 2}
          stroke="yellow"
          width={screenWidth}
        />
        <ChartDot style={{ backgroundColor: "blue" }} />
      </ChartPathProvider>
    </View>
  );
};
export default CoinDetailedScreens;
