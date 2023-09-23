import React from "react";
import {FlatList} from 'react-native';
import CoinItem from '../../../components/CoinItem';
import crytpocurrency from '../../../../assets/data/crytpocurrency.json'



const HomeScreen = () => {
return(
    <FlatList
    data={crytpocurrency}
    renderItem={({item}) => <CoinItem marketCoin={item}/>}
     />  
)
}

export default HomeScreen;