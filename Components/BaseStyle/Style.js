import { StyleSheet } from "react-native";

const look = StyleSheet.create({
    baseText:{
        color: 'red',
        fontSize: 19,
        marginHorizontal: 15,
        paddingTop: 20
    },
    baseContainer: {
        backgroundColor: '#0F0000',
        flex: 1,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    background: {
        flex: 1,
        backgroundColor: '#0F0000'
    },
    linkTextBlue: {
        textAlign: "center",
        color: "#4B6FFF",
        textDecorationLine: "underline",
        paddingTop: 10,
    },
    linkTextRed: {
        textAlign: "center",
        color: "#D6002C",
        textDecorationLine: "underline",
        paddingTop: 10,
    },
    linkTextLightBlue: {
        textAlign: "center",
        color: "#4BB4FF",
        textDecorationLine: 'underline',
        paddingTop: 10,
        letterSpacing: 1,
        fontStyle: 'italic'
    },
})

export default look