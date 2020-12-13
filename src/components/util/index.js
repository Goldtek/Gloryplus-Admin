import _ from 'lodash';
import { firestore } from '../partials';
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_MAPKEY);
 
Geocode.setLanguage("en");
 
export const geocode = Geocode;
export const convertAddressToLatLng = (address) => {

  Geocode.fromAddress(address).then(
    response => {
    const coordinates = response.results[0].geometry.location;
    console.log('coords', coordinates);
      // dispatch
    },
    error => {
      console.error(error);
    }
  );
};


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

export const fetchCells = async (dispatch) => {
  await firestore.collection('cells')
        .onSnapshot((querySnapshot) => {
          let cells = [];
          querySnapshot.forEach((doc) => {
            cells.push(doc.data());
          });
          console.log('cells', cells);
        //  cells = _.orderBy(cells, ['name'],['asc'])
         dispatch({ type: 'SET_CELLS', cells });
        }, handleError);
}

export const fetchCountry = async (dispatch) => {
  await firestore.collection('countries')
        .onSnapshot((querySnapshot) => {
          let countries = [];
          querySnapshot.forEach((doc) => {
            countries.push(doc.data());
          });
          countries = _.orderBy(countries, ['name'],['asc'])
         dispatch({ type: 'FETCH_COUNTRIES', countries });
        }, handleError);
}

export const fetchStates = async (dispatch,id) => {
  const query = await firestore.collection('states').where('country_id','==', id).get();
  let states = [];
  if(!query.empty){
    query.docs.map((snapshot)=> states.push(snapshot.data()));
    states = _.orderBy(states, ['name'],['asc']);
    dispatch({ type: 'FETCH_STATES', states });  
   }
}

export const fetchCities = async (dispatch, id) => {
  const query = await firestore.collection('cities').where('state_id','==', id).get();
  let cities = [];
  if(!query.empty){
    query.docs.map((snapshot)=> cities.push(snapshot.data()));
    cities = _.orderBy(cities, ['name'],['asc']);
    dispatch({ type: 'FETCH_CITIES', cities });  
   }
}
 
