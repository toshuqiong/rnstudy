/**
 * Created by shuqiong on 2018/2/28.
 */
import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class FlatListDemo extends Component {
    render () {
        return (
            //<View style={styles.container}>
                <FlatList horizontal={true} style={styles.container} data={[
                    {key: 'A'},
                    {key: 'B'},
                    {key: 'C'},
                    {key: 'D'},
                    {key: 'E'},
                    {key: 'F'},
                    {key: 'G'},
                    {key: 'H'},
                    {key: 'I'},
                    {key: 'J'},
                    {key: 'K'},
                    {key: 'L'},
                    {key: 'M'},
                    {key: 'N'},
                    {key: 'O'},
                    {key: 'P'},
                    {key: 'Q'},
                    {key: 'R'},
                    {key: 'S'},
                    {key: 'T'},
                    ]} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}>
                </FlatList>
            //</View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        flexDirection: 'row',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        // backgroundColor: 'red'
    }
})