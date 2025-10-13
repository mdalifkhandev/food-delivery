import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const CardComponent = () => {
    const totalItem = 5
    return (
        <TouchableOpacity>
            
            <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/3514/3514491.png" }}
                className="size-12 bg-gray-300 rounded-full"
            />

            {
                totalItem > 0 && (
                    <Text className='font-semibold text-black bg-yellow-400 rounded-full text-center mt-[-50px] mr-5'>{totalItem}</Text>
                )
            }
        </TouchableOpacity>
    );
};

export default CardComponent;