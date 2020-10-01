import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Button } from 'react-native-elements'
import { Context as AuthContext, Context } from '../../context/authContext'
import Spacer from '../../components/spacer'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
  const { signout } = useContext(Context)
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>Account Screen Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />,
}

const styles = StyleSheet.create({})

export default AccountScreen
