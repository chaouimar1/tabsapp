import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({ name: 'bouayadapp.db', createFromLocation: '~com.meruc.bouayadapp.db' })
export class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kolchi:[],
        };
    
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM `agenda` ORDER BY dayofyear ASC', [], (tx, res) => {
                console.log("Query completed");
                var l = res.rows.length;
                let items = [];
                if(l>0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        items.push({
                            today: false,
                            id: res.rows.item(i).id,
                            dayofyear: res.rows.item(i).dayofyear,
                            day_name_ar: res.rows.item(i).day_name_ar,
                            day_name_fr: res.rows.item(i).day_name_fr,
                            hij_day_number: res.rows.item(i).hij_day_number,
                            hij_month_name_ar: res.rows.item(i).hij_month_name_ar,
                            hij_month_name_fr: res.rows.item(i).hij_month_name_fr,
                            hij_month_number: res.rows.item(i).hij_month_number,
                            hij_year: res.rows.item(i).hij_year,
                            cr_day_number: res.rows.item(i).cr_day_number,
                            cr_month_name_ar: res.rows.item(i).cr_month_name_ar,
                            cr_month_name_fr: res.rows.item(i).cr_month_name_fr,
                            cr_month_number: res.rows.item(i).cr_month_number,
                            cr_year: res.rows.item(i).cr_year,
                            fil_day_number: res.rows.item(i).fil_day_number,
                            fil_month_name_ar: res.rows.item(i).fil_month_name_ar,
                            fil_month_number: res.rows.item(i).fil_month_number,
                            fil_year: res.rows.item(i).fil_year,
                            town_oujda: res.rows.item(i).town_oujda,
                            town_fes: res.rows.item(i).town_fes,
                            town_meknes: res.rows.item(i).town_meknes,
                            town_rabat: res.rows.item(i).town_rabat,
                            town_casa: res.rows.item(i).town_casa,
                            town_marrakech: res.rows.item(i).town_marrakech,
                            town_agadir: res.rows.item(i).town_agadir,
                            town_laayoune: res.rows.item(i).town_laayoune,
                            time_fajr: res.rows.item(i).time_fajr,
                            time_chourouk: res.rows.item(i).time_chourouk,
                            time_dohr: res.rows.item(i).time_dohr,
                            time_asr: res.rows.item(i).time_asr,
                            time_maghreb: res.rows.item(i).time_maghreb,
                            time_isha: res.rows.item(i).time_isha,
                            hikma_front: res.rows.item(i).hikma_front,
                            hikma_back: res.rows.item(i).hikma_back,
                            is_fav: res.rows.item(i).is_fav,
                        });
                    }
                    this.setState({kolchi:items});
                }

            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.welcome}>Settings page!</Text>
                    <Button
                        title="Go to Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                    {this.state.kolchi.map(item => 
                        <Text>{item.day_name_fr} - {item.cr_day_number} - {item.hij_day_number} - {item.day_name_ar}</Text>
                    )}  
                </ScrollView>
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