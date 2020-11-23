import { firestore } from '../partials';


const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: 'google',
 
  // Optional depending on the providers
  // fetch: customFetchImplementation,
  apiKey: process.env.REACT_APP_MAPKEY, // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
 
export const geocoder = NodeGeocoder(options);

export const subscribeCollectionById = (params, Callback) => {
  const { docId, collectionName } = params;
  if (!docId) {
    return null;
  }
  try {
    return firestore
      .collection(collectionName)
      .doc(docId)
      .onSnapshot(
        (doc) => {
          if (!doc.exists) {
            if (Callback) {
              Callback(null);
            }
            return;
          }
          const data = {
            id: doc.id,
            ...doc.data(),
          };
          if (Callback) {
            Callback(data);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  } catch (error) {
    console.log('error', error);
  
  }
  return null;
};

export const subscribeCollection =async (collectionName, Callback) => {

  try {
    return firestore
      .collection(collectionName)
      .onSnapshot(
        (docs) => {
          if (Callback) {
            Callback(docs);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  } catch (error) {
    console.log('error', error);
  
  }
  return null;
};

export const handleError = (error) => {
  console.log('Error Subscribing: ', error);
};
 
// Using callback

 
// output :
// [
//   {
//     latitude: 48.8698679,
//     longitude: 2.3072976,
//     country: 'France',
//     countryCode: 'FR',
//     city: 'Paris',
//     zipcode: '75008',
//     streetName: 'Champs-Élysées',
//     streetNumber: '29',
//     administrativeLevels: {
//       level1long: 'Île-de-France',
//       level1short: 'IDF',
//       level2long: 'Paris',
//       level2short: '75'
//     },
//     provider: 'google'
//   }
// ];