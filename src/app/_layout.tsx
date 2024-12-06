import {Redirect, Slot } from 'expo-router';
import React from 'react'
import AuthProvider, {useAuth} from '../providers/AuthProvider';

const RootLayout = () => {
  
   return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  )
};




export default RootLayout;