/**
 * Created by shuqiong on 2018/2/28.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

export default class FetchDataDemo extends Component {
    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('hello')
                console.log(responseJson)
                return responseJson.movies
            })
            .catch((error) => {
                console.log('error')
                console.error(error);
            });
    }
    constructor(props) {
        console.info('constructoe')
        super(props)
        this.getMoviesFromApiAsync()
    }
    render () {
        return (
            // var ret = this.getMoviesFromApiAsync();
            <View>
                <Text>hello</Text>
            </View>
        );
    }
}