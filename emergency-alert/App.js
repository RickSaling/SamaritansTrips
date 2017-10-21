import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Call ICE Raid Hotline"
                    color="#841584"
		/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
