import React, { useEffect, useRef } from "react";
import { useDarkMode } from "./DarkModeContext";

export const Homescreen = ({ downloadCvRef }) => {
    const { isDarkMode } = useDarkMode();
    return (
        <div className="flex flex-1 ">
            <div className="flex-1 text-lg md:text-xl lg:text-3xl ">
                <h1 className="px-16 pt-28">hi,</h1>
                <h1 className="px-16">i'm amy skaletzky</h1>
                <p className="px-16 pt-3 text-base md:text-lg lg:text-xl">full stack developer</p>
            </div>
            <div className="flex flex-1">
                <div ref={downloadCvRef} className={`px-4 py-2 ${isDarkMode ? 'download-cv-dark' : 'download-cv'}`}>
                    <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1TurA0xPrYuJ2O6h969r0BFrsmTGiTGzV/view">download my CV</a>
                </div>
            </div>
        </div>
    )
}