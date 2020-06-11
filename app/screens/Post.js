import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import styles from '../styles/style';
import image1 from '../images/phone.jpg';
import image2 from '../images/macbookpro.jpg';
import image3 from '../images/ecommerce.jpg';

const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const Post = ({ navigation }) => {

    const [imageSelected, setImageSelected] = useState(false);
    const [imageSource, setImageSource] = useState('');
    const [imageUri, setImageUri] = useState('');
    const [base64Value, setBase64Value] = useState('');

    const postPhoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
          
            if (response.didCancel) {
                // console.log('User cancelled image picker');
                setImageSelected(false);
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
                setImageSelected(false);
            } else if (response.customButton) {
                // console.log('User tapped custom button: ', response.customButton);
                setImageSelected(false);
            } else {
                const source = { uri: response.uri };
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                const base64Value = response.data;
                
                setImageSource(source);
                setImageSelected(true);
                setImageUri(response.uri);
                setBase64Value(base64Value);

            }
          });
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => postPhoto()}>
                    <Text style={{color: '#00f', marginRight: 10, fontSize: 16}}>Add Post</Text>
                </TouchableOpacity>
            ),
            title: 'Recent Posts'
        });
    }, [navigation]);

    const [feed, setFeed] = useState([
        {
            name: 'Kenny',
            location: 'Lekki Phase 1, Lagos',
            url: image1,
        },
        {
            name: 'John',
            location: 'Yaba, Lagos',
            url: image2,
        },
        {
            name: 'Peter',
            location: 'Ikeja, Lagos',
            url: image3
        }
    ])

    return (
        <View style={styles.container}>
            <FlatList
                data={feed}
                renderItem={({ item }) => (
                    <View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
                            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                        </View>
                        <Image source={item.url} style={{width: 370, height: 200, marginVertical: 10, marginHorizontal: 20}}/>
                        <Text style={{marginHorizontal: 20, textAlign: 'center', fontStyle: 'italic'}}>{item.location}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Post;

