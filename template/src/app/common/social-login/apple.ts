// import {Platform} from 'react-native';
// import {
//   appleAuth,
//   appleAuthAndroid,
// } from '@invertase/react-native-apple-authentication';
// import jwt_decode from 'jwt-decode';
// import {loadString, saveString} from '@utils';
export {};
// import {randomUniqueId} from '../string/index';

// async function pickInfoAppleResponse(info: any = {}, appleId: string) {
//   try {
//     const infoCache = await loadString(appleId);

//     const infoName = infoCache ? infoCache : info;
//     let userFullName = `${infoName?.familyName?.trim?.() || ''}${
//       infoName?.namePrefix || ''
//     } ${infoName?.middleName || ''} ${infoName?.givenName || ''}`?.trim();

//     if (!userFullName) {
//       userFullName = `${infoName?.firstName || ''} ${
//         infoName?.lastName || ''
//       }`.trim();
//     }

//     if (!Object.keys(infoCache || {})?.length) {
//       saveString(appleId, JSON.stringify(info));
//     }

//     return userFullName;
//   } catch {
//     return undefined;
//   }
// }

// export const AppleService = {
//   appleSignin: async () => {
//     if (Platform.OS === 'ios') {
//       try {
//         const appleAuthRequestResponse = await appleAuth.performRequest({
//           requestedOperation: appleAuth.Operation.LOGIN,
//           requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//         });

//         const userFullName = await pickInfoAppleResponse(
//           appleAuthRequestResponse.fullName,
//           appleAuthRequestResponse.user,
//         );

//         return {...appleAuthRequestResponse, userFullName};
//       } catch (err) {
//         console.log('IOS-APPPLE-LOGIN-ERROR', err);
//       }
//     } else {
//       try {
//         // Generate secure, random values for state and nonce
//         const rawNonce = randomUniqueId();
//         const state = randomUniqueId();

//         // Configure the request
//         appleAuthAndroid.configure({
//           // The Service ID you registered with Apple
//           clientId: 'CLIENT_ID_APPLE_SERVICE',

//           // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
//           // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
//           redirectUri: 'APPLE_REDIRECT_URI',

//           // The type of response requested - code, id_token, or both.
//           responseType: appleAuthAndroid.ResponseType.ALL,

//           // The amount of user information requested from Apple.
//           scope: appleAuthAndroid.Scope.ALL,

//           // Random nonce value that will be SHA256 hashed before sending to Apple.
//           nonce: rawNonce,

//           // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
//           state,
//         });

//         // Open the browser window for user sign in
//         const response = await appleAuthAndroid.signIn();
//         const infoLogin = {
//           ...response,
//           ...(jwt_decode(response.id_token || '') as any),
//         };

//         const appleId = infoLogin.sub;
//         const {nonce} = infoLogin;
//         const identityToken = response.id_token || '';
//         // apple return full name one times. so save full name util push to BE successfully
//         const userFullName = await pickInfoAppleResponse(
//           response.user?.name,
//           appleId,
//         );

//         return {user: appleId, nonce, identityToken, userFullName};
//         // Send the authorization code to your backend for verification
//       } catch (err) {
//         console.log('ANDROID-APPPLE-LOGIN-ERROR', err);
//       }
//     }
//   },
// };
