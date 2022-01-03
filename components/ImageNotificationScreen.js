import React, {Component} from 'react'
import {Image} from 'react-native'

// UI compoennt used in notificationscreen
const ImageNotificationScreen = () => (<Image
    style={{
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0
}}
    source={require('./../assets/notifications.png')}/>)

export default ImageNotificationScreen;