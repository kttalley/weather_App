import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Forecast from "./Forecast.js";
import OpenWeatherMap from "./open_weather_map.js";





// class Canvas extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return (
//           <WebView
//             source={{uri: 'https://facebook.github.io/react-native/'}}
//           />
//         );
//     }

// }

// export default Canvas;





class WeatherProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = { zip: "", forecast: null };
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            this.setState({forecast: forecast});
        });
    };

    render() {
        let content = null;
        if (this.state.forecast !== null) {
            content = (
                <Forecast
                    main = {this.state.forecast.main}
                    description = {this.state.forecast.description}
                    temp = {this.state.forecast.temp}
                />
            );
        }
        return (
        <View style = {styles.container}>
            <Text style = {styles.welcome}>
                You input {this.state.zip}.
            </Text>
            {content}
            <TextInput
                style = {styles.input}
                onSubmitEditing = {this._handleTextChange}
            >

            </TextInput>
                 
        </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    welcome: { fontSize: 20, textAlign: "center", margin: 10},
    input: {
        fontSize: 20,
        borderWidth: 2,
        padding: 2,
        height: 40,
        width: 100,
        textAlign: "center"
    }
});

export default WeatherProject;