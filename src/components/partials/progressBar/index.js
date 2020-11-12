import React, { useState, useEffect } from 'react';
import { useStorage } from '../../hooks';
import './style.css';

const ProgressBar = ({setFile, file, directory, setUrl}) => {
    const path = `images/${directory}/${file.name}`;
    const { error, url, progress } = useStorage({file, path});
    console.log('error--->', error);
    useEffect(()=>{
        setFile(null);
        setUrl(url);
    },[url,setFile]);

    return (
        <div className="col-md-2">
            <div className="meter animate">
                <span style={{width: `${progress}%`}}> {Math.ceil(progress)}% </span>
            </div>
        </div>
            
    )
}

export default ProgressBar;