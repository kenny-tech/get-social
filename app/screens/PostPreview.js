import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { post_photo } from '../actions/photo'
import styles from '../styles/style';

const PostPreview = ({ route, navigation }) => {

    const { base64Image } = route.params;

    const user = useSelector(state => state.auth.user);
    const photo_error = useSelector(state => state.photo.photo_error);

    const dispatch = useDispatch();

    const postPhoto = () => {
        const user_id = user.id;
        const user_name = user.name;
        const base64_image = base64Image;

        dispatch(post_photo(user_id,user_name,base64_image));

        if(photo_error === '') {
            navigation.navigate('Post');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={{marginRight: 50}}>
                    <Text style={styles.headerText}>Preview Post</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'flex-start'}}>
                <Image source={{uri: `data:image/gif;base64,${base64Image}`}} style={{marginVertical: 10, resizeMode:'cover', width: 300, height: 300}}/>
                <TouchableOpacity onPress={() => postPhoto()}
                style={{width: 250, backgroundColor: '#808080', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5}}
                >
                    <Text style={{color: 'white', textAlign: 'center'}}>Post</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingVertical: 10}}>
                    <Text style={{textAlign: 'center'}}>Cancel</Text>
                </TouchableOpacity>

            </View>

            
        </View>
    )
}

export default PostPreview;