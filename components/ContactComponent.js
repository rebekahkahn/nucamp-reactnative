import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
//data gets imported here later biatch

class Contact extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data: null
        // };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }
    
    render () {
        return (
            <ScrollView>
                <Card title="Contact Information" wrapperStyle={{margin: 10}}>
                    <Text>1 Nucamp Way</Text>
                    <Text>Seattle, WA 98001</Text>
                    <Text>U.S.A.</Text>
                    <Text />
                    <Text>Phone: 1-206-555-1234</Text>
                    <Text>Email: campsites@nucamp.co</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;