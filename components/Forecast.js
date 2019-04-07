import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Forecast extends Component {
    render() {
        return (
            <View>
                <Text style = {styles.container}>
                    {this.props.main}
                </Text>
                <Text style = {styles.mainText}>
                    Current conditions: {this.props.description}
                </Text>
                <Text styles = {styles.bigText}>
                    {this.props.temp} degrees farenheight.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { height: 130 },
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    },
    mainText: {
        flex: 1,
        fontSize: 16,
        textAlign: "center",
        color: "#FFFFFF"
    }
});

export default Forecast;