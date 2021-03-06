/**
 * Created by shuqiong on 2018/2/28.
 */
import React, {Component} from 'react';
import {
    SectionList,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class SectionListDemo extends Component {
    render () {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {name: 'D', data: ['Devin']},
                        {name: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.name}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 44
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

































