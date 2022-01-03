import React, {Component} from 'react'
import {Image} from 'react-native'

// UI component used in login screen
const InformationIcon = () => (<Image
    style={{
    width: 20,
    height: 20,
    marginLeft: -50,
    marginTop: 9
}}
    source={require('./../assets/infoicon.png')}/>)

export default InformationIcon;