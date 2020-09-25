import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AuthForm from '../../components/authForm'
import NavLink from '../../components/navLink'
import { Context } from '../../context/authContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign into your account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign in"
      />
      <NavLink
        text="Don't have an account. Sign up instead"
        routeName="Signup"
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
})

export default SigninScreen
