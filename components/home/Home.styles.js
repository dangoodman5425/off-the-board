import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#F5FCFF",
        justifyContent: 'space-between',
    },
    navigationButtonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    cardButtonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 20,
    },
    cardContainer: {
        flex: 1,
        paddingTop: 0,
    }
});
