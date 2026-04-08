//import React from 'react';

interface DownloadButtonProps 
{
    file: any;
    buttonText: string;
    downloadedFileName: string;
}

export function DownloadButton({file, buttonText, downloadedFileName}: DownloadButtonProps)
{
    return (
        <button className={"leftPad roundedCorners"}><a href={file} download={downloadedFileName}>{buttonText}</a></button>
    );
}