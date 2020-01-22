import React from 'react';
import {View, Button} from "react-native";
import Swiper from "react-native-deck-swiper";
import IconButton from "../IconButton";
import odds from "../../constants/odds";
import Odds from "../Odds";
import styles from './Home.styles'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            odds: odds,
        };

    }

    componentDidMount() {
        // fetch('http://localhost:5002/v1/odds', {
        //         method: 'GET',
        //         qs: {'page': 1, 'per_page': 10},
        //     })
        //     .then((response) => console.log(response))
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }


    updateOdds() {
        console.log('All swiped');
        this.forceUpdate();
    }

    handleOnSwipedLeft() {

    }

    handleOnSwipedRight() {

    }

    handleOnSwipedTop() {

    }

    render() {
        const cards = this.state.odds;
        return (
            <View style={styles.container}>
                <View style={styles.navigationButtonContainer}>
                    <IconButton
                        name="leftcircle"
                        onPress={() => this.props.navigation.navigate('Navigation')}
                        color="white"
                        backgroundColor="grey"
                    />
                    <IconButton
                        name="filter"
                        onPress={this.handleOnSwipedLeft}
                        color="white"
                        backgroundColor="grey"
                    />
                </View>
                <View style={styles.cardContainer}>
                    <Swiper
                        cards={cards}
                        renderCard={(card) => <Odds odds={card}/>}
                        onSwiped={(cardIndex) => {console.log(cardIndex)}}
                        onSwipedAll={() => this.updateOdds()}
                        cardIndex={0}
                        disableBottomSwipe={true}
                        stackSize={3}
                        onSwipedRight={(cardIndex) => {console.log('liked', cardIndex)}}
                        onSwipedLeft={(cardIndex) => {console.log('disliked', cardIndex)}}
                        onSwipedTop={(cardIndex) => {console.log('passed', cardIndex)}}
                        backgroundColor='white'>
                    </Swiper>
                </View>
                <View style={styles.cardButtonContainer}>
                    <IconButton
                        name="close"
                        onPress={this.handleOnSwipedLeft}
                        color="white"
                        backgroundColor="#E5566D"
                        margin='20'
                    />
                    <IconButton
                        name="star"
                        onPress={this.handleOnSwipedTop}
                        color="white"
                        backgroundColor="#3CA3FF"
                        margin='20'
                    />
                    <IconButton
                        name="heart"
                        onPress={this.handleOnSwipedRight}
                        color="white"
                        backgroundColor="#4CCC93"
                        margin='20'
                    />
                </View>
            </View>
        )
    }
}

export default Home;
