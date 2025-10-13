import { Redirect, Stack } from 'expo-router';
import React from 'react';

export default function _layout() {
  const isAuthantication =false
  if(!isAuthantication) return <Redirect href='/signin'/>
  return <Stack screenOptions={{headerShown:false}} />;
}
