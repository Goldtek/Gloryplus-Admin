import { useState, useEffect } from "react";
import { storage } from '../../partials';

const useStorage = ({file, path}) => {
    const [url, setUrl] = useState(null);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const storageRef = storage.ref(path);
        // firebase.storage().ref(`images/${newDirectory}/${fileName}`)
        storageRef.put(file).on('state_changed', (snap)=> { 
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        }, (err) =>{
          setError(err);
        }, async () => {
            const filePath = await storageRef.getDownloadURL();
            setUrl(filePath);
        })
    },[file]);
   return { progress, url, error}

}


export default useStorage;