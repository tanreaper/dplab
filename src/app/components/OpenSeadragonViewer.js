'use client'

import React, {useEffect, useState, useRef} from "react";
import OpenSeadragon from "openseadragon";


const OpenSeadragonViewer = () => {
    const viewerRef = useRef(null);
    useEffect(() => {
        const viewer = OpenSeadragon({
            id: 'viewer',
            prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/',
            tileSources: [{
                Image: {
                    xmlns:    "http://schemas.microsoft.com/deepzoom/2008",
                    Url:      "https://s3.amazonaws.com/pathology-imageviewer/sample/TCGA-EJ-5494-01A-01-BS1.4617dbb2-0f18-4142-b2c8-cee5160f7da7_files/",
                    Format:   "jpeg", 
                    Overlap:  "1", 
                    TileSize: "254",
                    Size: {
                        Height: "20747",
                        Width: "24001"
                    }
                }
            }]
        });
        viewerRef.current = viewer;
        return () => {
            viewerRef.current.destroy();
        };
    }, []);
    return <div id="viewer" style={{ width: '100%', height: '500px' }} />; 
};
export default OpenSeadragonViewer;
