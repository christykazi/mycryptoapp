import React from "react";
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { View, Text, Image } from "react-native";
import styles from "./styles";

const coinDetailedHeader = (props) => {
    const {Image, symbol, marketCapRank} = props;
return(
<View style={styles.headerContainer}>
    <Ionicons name="chevron-back-sharp" size={30} color="white" />
    <View style={styles.ticketCointainer}> 
    <Image source={{uri: small}} style={{height: 25, width: 25, marginLeft: 12}}/>
    <Text style={styles.ticketTitle}>{symbol.toUpperCase()}</Text>
    <View style={styles.rankContainer}> 
    <Text style={{color: "white", fontWeight: "bold", fontSize: "15"}}>#{marketCapRank}</Text>
    </View>
   </View>
    <EvilIcons name="user" size={30} color="white" />
</View>
);
};
export default coinDetailedHeader;