import { Alert } from 'react-native';
import Permissions from 'react-native-permissions';

export const requestLocationPermission = async () => {
  try {
    const checkPermission = await Permissions.check('location').then(
      response => {
        return response;
      }
    );
    console.log('%%%', checkPermission, '$$$$', '$$$$');
    if (checkPermission === 'undetermined' || checkPermission === 'denied') {
      return Permissions.request('location').then(response => {
        // Returns once the user has chosen to 'allow' or to 'not allow' access
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        return response;
      });
    }
    if (checkPermission === 'authorized') {
      return checkPermission;
    }
  } catch (err) {
    console.warn(err);
  }

  //   if (response === 'restricted') {
  //     console.log('in if.....');
  //     Alert.alert(
  //       'Can we access your location?',
  //       'We need access so you can track your bus',
  //       [
  //         {
  //           text: 'No way',
  //           onPress: () => console.log('Permission denied'),
  //           style: 'cancel'
  //         },
  //         { text: 'Open Settings', onPress: Permissions.canOpenSettings }
  //       ]
  //     );
  //   }
  //   if (response === 'undetermined') {
  // return Permissions.request('location').then(response => {
  //   // Returns once the user has chosen to 'allow' or to 'not allow' access
  //   // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
  //   console.log('requested....', response);
  //   return response;
  // });
  //   }
  // });
  // try {
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     {
  //       title: 'Example App',
  //       message: 'Example App access to your location ',
  //       buttonPositive: 'Positive Button'
  //     }
  //   );
  //   console.log('%%%', granted, '$$$$', PermissionsAndroid, '$$$$');
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     console.log('You can use the location');
  //     alert('You can use the location');
  //   } else {
  //     console.log('location permission denied');
  //     alert('Location permission denied');
  //   }
  // } catch (err) {
  //   console.warn(err);
  // }
};
