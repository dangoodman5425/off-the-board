import React from 'react';
import styles from './Odds.styles'
import {Image, Text, View} from "react-native";

const Odds = ({ odds }) => (
    <View style={styles.card}>
        <Text style={styles.oddsTitle}>{odds.odds_type}</Text>
        <Image style={styles.cardImage}
               source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
        <Text style={styles.oddsName}>{odds.odds_name}</Text>
        <Text style={styles.snippetText}>{odds.snippet}</Text>
    </View>
);

export default Odds
