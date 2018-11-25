import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({ name: 'app.db', createFromLocation: '~tabsapp.db' })
export class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'nope',
        };
    
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM `agenda` where `id`=?', ['4'], (tx, results) => {
                console.log("Query completed");
                var l = results.rows.length;
                if(l>0) {
                    var row = results.rows.item(0);
                    this.setState({name:row.name});
                }

            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Settings page!</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Text>---- {this.state.name} ----</Text>
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