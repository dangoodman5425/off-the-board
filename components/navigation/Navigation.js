import React from "react";
import {View, Text, Button} from 'react-native';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Button title='Bet History' onPress={() => this.props.navigation.navigate('BetHistory')}/>
                <Button title='Leagues' onPress={() => this.props.navigation.navigate('Leagues')}/>
                <Button title='Games' onPress={() => this.props.navigation.navigate('Games')}/>
                <Button title='Active Bets' onPress={() => this.props.navigation.navigate('ActiveBets')}/>
                <Button title='Settings' onPress={() => this.props.navigation.navigate('Settings')}/>
            </View>
        )
    }
}

export default Navigation;
