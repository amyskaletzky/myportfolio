import { useState, useRef, useEffect, useContext } from "react";
import { Context } from "./Context";
import { Homescreen } from './Homescreen';

import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Contact from "./Contact";
import { HeartSwitch } from '@anatoliygatt/heart-switch';

const Main = (props) => {
    const downloadCvRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [checked, setChecked] = useState(false);
    const { active, setActive } = useContext(Context);

    useEffect(() => {
        const body = document.querySelector('body');
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const updateMiddlePosition = () => {
            const downloadCvDiv = downloadCvRef.current;
            if (downloadCvDiv) {
                const rect = downloadCvDiv.getBoundingClientRect();
                const middlePosition = rect.left + rect.width / 2;
                document.documentElement.style.setProperty('--middle-position', `${middlePosition}px`);
            }
        };

        updateMiddlePosition(); // Initial calculation
        window.addEventListener('resize', updateMiddlePosition);

        return () => {
            window.removeEventListener('resize', updateMiddlePosition);
        };
    }, []);


    return (
        <div className="flex h-screen">
            <div className="mx-16 vertical-line"></div>
            {/* issue with second- not responsive */}
            <div className="vertical-line-second"></div>

            <div className="vertical-navbar">

                {/* might be an issue with the toggle */}
                <HeartSwitch
                    size="sm"
                    inactiveTrackFillColor="#3e3e3e"
                    inactiveTrackStrokeColor="white"
                    activeTrackFillColor="#fe6f8e"
                    activeTrackStrokeColor="#ff4e74"
                    inactiveThumbColor="#ecfeff"
                    activeThumbColor="#ecfeff"
                    checked={checked}
                    onChange={(event) => {
                        setChecked(event.target.checked);
                    }}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                />
                <button className={active === 'homepage' ? 'strikethrough' : ''} onClick={() => setActive('homepage')}>Home</button>
                <button className={active === 'about' ? 'strikethrough' : ''} onClick={() => setActive('about')}>About</button>
                <button className={active === 'experience' ? 'strikethrough' : ''} onClick={() => setActive('experience')}>Experience</button>
                <button className={active === 'contact' ? 'strikethrough' : ''} onClick={() => setActive('contact')}>Contact</button>
            </div>
            <div className="flex-1 p-4 flex items-center">

                <div className={`container ${isDarkMode ? 'dark' : ''}`}>
                    <div className="gradient-container">
                        <div className="circle-gradient"></div>
                        <div className="second-gradient"></div>
                    </div>

                    {/* <p>Data from context: {active}</p>
                    <button onClick={() => setActive('about')}>Change Data</button> */}
                    {
                        active === 'homepage' ?
                            <Homescreen downloadCvRef={downloadCvRef} />
                            : active === 'about' ?
                                <AboutMe />
                                : active === 'experience' ?
                                    <Experience />
                                    :
                                    <Contact />
                    }
                </div>
            </div>
        </div>
    )
}

export default Main;