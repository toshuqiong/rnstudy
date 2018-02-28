/**
 * Created by shuqiong on 2018/2/28.
 */
import React, {Component} from 'react';
import {
    FlatList,
    Text,
    StyleSheet
} from 'react-native';

export default class FlatListDemo extends Component {
    render () {
        return (
          <FlatList style={styles.container} data={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
              'O', 'P', 'Q']} renderItem={({item}) => {<Text style={styles.item}>{item}</Text>}}>
          </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})