/**
 * Created by shuqiong on 2018/2/28.
 */
import React , {Component} from 'react';
import {
    View
} from 'react-native';

export default class LayoutDemo extends Component {
    render () {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between',
            alignItems: 'flex-start'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}