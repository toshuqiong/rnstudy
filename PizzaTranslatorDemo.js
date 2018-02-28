/**
 * Created by shuqiong on 2018/2/28.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';

export default class PizzaTranslator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render () {
        return (
            <View style={{padding: 10}}>
                <TextInput style={{height: 40}} placeholder="input text here!"
                           onChangeText={(text) => this.setState({text})}/>
                <Text style={{padding: 10, fontSize: 30}}>
                    {this.state.text.split(' ').map((word) => word && '🍕 ').join(' ')}
                </Text>
            </View>
        );
    }
}

