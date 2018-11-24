import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Modal, TouchableHighlight, Linking } from 'react-native';

export class Home extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    mailto() {
        Linking.openURL("mailto: chaoui.mar2@gmail.com?subject=abcdefg&body=body")
    }

    openmeruc() {
        Linking.openURL("http://www.meruc.com")
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View>
                        <Text>Hello World!</Text>
                    </View>
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        this.mailto();
                    }}>
                    <Text>send mail</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        this.openmeruc();
                    }}>
                    <Text>openmeruc</Text>
                </TouchableHighlight>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>let's create a navigation bar</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});