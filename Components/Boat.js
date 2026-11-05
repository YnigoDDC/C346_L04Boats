import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const Boat=({boat_name, boat_desc, boat_pic})=>{
    return (
        <View>
            <Text style={{fontSize:20}}>
                <FontAwesome6
                    name={'sailboat'}
                    size={20}
                    color={'grey'}
                />
                {' '}
                {boat_name}
            </Text>
            <Text>
                {boat_desc}
            </Text>
            <Image
                source={boat_pic}
                style={{width:400,height:300}}
            />
        </View>
    );
};

export default Boat;