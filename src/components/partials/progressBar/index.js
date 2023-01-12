import React, { useEffect } from 'react';
import { useStorage } from '../../hooks';
import './style.css';

const ProgressBar = ({file, directory, setUrl}) => {
    const path = `${directory}/${file.name}`;
    const { error, url, progress } = useStorage({file, path});
    useEffect(()=>{
        setUrl(url);
    },[setUrl, url]);

    return (
        <div className="col-md-2">
            <div className="meter animate">
                <span style={{width: `${progress}%`}}> {Math.ceil(progress)}% </span>
            </div>
        </div>
            
    )
}

export default ProgressBar;