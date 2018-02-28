/**
 * Created by shuqiong on 2018/2/28.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

export default class FlexDemo extends Component {
    render () {
        return (
          <View style={{height: 300, width: 200}}>
              <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
              <View style={{flex: 2, backgroundColor: 'steelblue'}} />
              <View style={{flex: 3, backgroundColor: 'skyblue'}}/>
          </View>
        );
    }
}
