import '../../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import Map from '../../components/map'
import { Context as LocationContext } from '../../context/locationContext'
import useLocation from '../../hooks/useLocation'
import TrackForm from '../../components/trackForm'
import { FontAwesome } from '@expo/vector-icons'


export const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext)
  const callBack = useCallback(
    (location) => {
      addLocation(location, recording)
    },
    [recording]
  )
  const [err] = useLocation(isFocused || recording, callBack)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>TrackCreate Screen</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}

      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />,
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
