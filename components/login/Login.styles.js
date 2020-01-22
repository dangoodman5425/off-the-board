import {StyleSheet} from "react-native";

export default StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#2a4898'
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex:1
    },
    loginHeader: {
        fontSize: 28,
        color: 'white',
        fontWeight: '300',
        marginBottom: 40
    },
    buttonWrapper: {
        paddingTop: 5,
        paddingBottom: 30,
        paddingRight: 80,
        paddingLeft: 80,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: 'white',
    },
});
