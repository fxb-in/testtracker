/*import { View, Text } from 'react-native'
import React from 'react'
import MapView , {Marker} from 'react-native-maps';
export default function MapScreen() {
  return (
    <View className="flex-1">
    <MapView initialRegion={{
        latitude: 37.7825,
        longitude: -122.4194,
        latitudeDelta: 0.01,
        longitudeDelta:0.01
    }}
    className="flex-1"
    mapType='standard'
    >
        <Marker 
          coordinate={{
            latitude: 37.7825,
            longitude: -122.4194,
          }}
         />
         </MapView>

    </View>
  )
}*/
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions , Button,Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions';

export default function Map(){
   
    const initialLocation={
        latitude: 37.78825,
        longitude: -122.4324,
    }
    const [myLocation,setMyLocation]= useState(initialLocation)
    const [pin, setPin]= useState({})
    const [region, setRegion] = useState({
        latitude: initialLocation.latitude,
        longitude: initialLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const mapRef =React.useRef(null)
    const local ={ 
        latitude: "37.78825",
        longitude: "-122.4324",
    }
    useEffect(()=>{
        setPin(local)
        _getLocation()
    },[])

    const _getLocation= async() =>
    {
        try{
             let {status }= await Location.requestForegroundPermissionsAsync()
             if (status !=='granted'){
                console.warn('Permission to access location was denied')
                return 
             }
             console.log("Location permission status:", status);

             let location =await Location.getCurrentPositionAsync({})
             setMyLocation(location.coords)
             console.log(location);
        }
        catch(err){
            console.warn(err);
            console.error("Error fetching location:", err);
        }
    }
    const focusOnLocation=() =>{
          if(myLocation.latitude && myLocation.longitude){
            const newRegion={
                latitude: parseFloat(myLocation.latitude),
                longitude: parseFloat(myLocation.longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              
            }
            console.log("Button pressed");
            if(mapRef.current){
                mapRef.current.animateToRegion(newRegion, 1000)
            }
          }
    }
    return(
        <View style={styles.container}>
            <MapView 
            style={styles.map}
              region={region}
              onRegionChangeComplete={setRegion}
              ref={mapRef}
              provider='google'
              
              >
                {myLocation.latitude && myLocation.longitude &&
                 <Marker 
                 coordinate={{
                    latitude: myLocation.latitude,
                    longitude: myLocation.longitude
                 }}
                 title='My Current location'
                 description='I am here'
                 />
                }
                 {pin.latitude && pin.longitude &&
                 <Marker 
                 coordinate={{
                    latitude: parseFloat(pin.latitude),
                    longitude: parseFloat(pin.longitude)
                 }}
                 title='Default location'
                 description='I am here'
                 />
                }
            </MapView>
            <View style={styles.background}>
            <View style={styles.innerContainer}>
        <Text style={styles.title}>Estimated Arrival</Text>
        <Text style={styles.time}>20-30 minutes</Text>
        <Text style={styles.info}>Your bus is on its way!!</Text>
      </View>
            </View>
            <View style={styles.buttonContainer}>
            <Button title='Get Location' onPress={focusOnLocation} />
       
            </View>
        </View>
    )   
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 20,
        zIndex: 1,
    },
    innerContainer: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    time: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
    },
    info: {
        fontSize: 16,
        color: '#666666',
    },
});
