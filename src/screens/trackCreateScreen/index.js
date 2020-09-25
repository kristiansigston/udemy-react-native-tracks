import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync } from 'expo-location'

import Map from '../../components/map'

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null)
  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
    } catch (err) {
      setErr(err)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>TrackCreate Screen</Text>
      <Map />
      {err ? <Text>Please enable loction services</Text> : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen
