import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import styles from '../styles/style';
import { baseurl } from '../../config/config'

const options = {
    title: 'Select Photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const Post = ({ navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Timeline'
        });
    }, [navigation]);

    const [imageSelected, setImageSelected] = useState(false);
    const [imageSource, setImageSource] = useState('');
    const [imageUri, setImageUri] = useState('');
    const [base64Value, setBase64Value] = useState('');
    const [photos, setPhotos] = useState([]);

    const loadPhotos = () => {
        fetch(baseurl + '/photos')
        .then(response => response.json())
        .then(response => (setPhotos(response)))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        loadPhotos()
    }, []);


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
                previewPost(base64Value)
            }
          });
    }

    const previewPost = (base64Value) => {
        navigation.navigate('PostPreview', {
            base64Image: base64Value,
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={styles.headerViewMargin}>
                    <Text style={styles.headerText}>Recent Posts</Text>
                </View>
                <View style={styles.headerViewMargin}>
                    <TouchableOpacity onPress={() => postPhoto()}>
                        <Text style={styles.headerTextRight}>Add Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={photos}
                renderItem={({ item }) => (
                    <View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
                            <Text style={{fontWeight: 'bold'}}>{item.user}</Text>
                        </View>
                        <Image source={{uri: item.picture}} style={{width: 370, height: 200, marginVertical: 10, marginHorizontal: 20}}/>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Post;

