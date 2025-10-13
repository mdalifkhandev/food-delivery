import { Stack } from 'expo-router';
import React from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import image from '@/assets/images/react-logo.png';

const _layout = () => {
  const screenHeight = Dimensions.get('screen').height;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        className="w-full"
      >
        <View style={{ height: screenHeight }} className="w-full">
          <View style={{ height: screenHeight * 0.5 }} className="w-full rounded-b-3xl overflow-hidden shadow-md">
            <ImageBackground
              source={image}
              resizeMode="cover"
              className="w-full h-full justify-center items-center"
            >
              <View className="w-full h-full justify-center items-center">
              </View>
            </ImageBackground>
          </View>

          <View style={{ height: screenHeight * 0.5 }} className="px-6 py-8">
          </View>
        </View>
      </ScrollView>

      <Stack />
    </KeyboardAvoidingView>
  );
};

export default _layout;
