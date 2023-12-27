'use client'

import React, {useEffect, useState, useRef} from "react";
import OpenSeadragon from "openseadragon";


const OpenSeadragonViewer = () => {
    const viewerRef = useRef(null);
    useEffect(() => {
        const viewer = OpenSeadragon({
            id: 'viewer',
            prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/',
            tileSources: 'http://127.0.0.1:5000/static/1.dzi',
        });
        viewerRef.current = viewer;
        return () => {
            viewerRef.current.destroy();
        };
    }, []);
    return <div id="viewer" style={{ width: '100%', height: '500px' }} />; 
};
export default OpenSeadragonViewer;