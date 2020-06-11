import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from '../styles/style';
import image1 from '../images/phone.jpg';
import image2 from '../images/macbookpro.jpg';
import image3 from '../images/ecommerce.jpg';

const Post = () => {

    const [feed, setFeed] = useState([
        {
            user: 'Kenny',
            caption: 'My first photo',
            url: image1,
        },
        {
            user: 'John',
            caption: 'My second photo',
            url: image2,
        },
        {
            user: 'Peter',
            caption: 'My third photo',
            url: image3
        }
    ])

    return (
        <View style={styles.container}>
            <FlatList
                data={feed}
                renderItem={({ item }) => (
                    <View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5}}>
                            <Text>@{item.user}</Text>
                        </View>
                        <Image source={item.url} style={{width: 370, height: 200, marginVertical: 10, marginHorizontal: 20}}/>
                        <Text style={{marginHorizontal: 20}}>{item.caption}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Post;

