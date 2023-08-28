import { useEffect, useContext } from "react";
import { Context } from "./Context";
import '../styles.css'
import { useDarkMode } from "./DarkModeContext";


const AboutMe = (props) => {
    const { active, setActive } = useContext(Context);
    const { isDarkMode } = useDarkMode();

    return (

        <div className="flex-1 flex flex-col">
            <div className="w-10/12 px-24  pt-14">
                <p className="text-base md:text-lg lg:text-xl  ">about me</p>

                <p className="pt-4">I’m a full stack developer working mainly with JavaScript, React, React-Native and Node.js</p>

                <p className="pt-2">Passionate about blending artistry with my technical skills, and using new technologies to craft captivating web and mobile applications.</p>

                <p className="pt-2">When I’m not coding, I’m out hiking in nature, or painting with a nice cup of tea.</p>

                <p className="pt-7 text-base md:text-lg lg:text-xl">technical skills</p>
                <div className="flex text-sm flex-wrap">
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>JavaScript</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>React.js</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>React Native</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Redux</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Node.js</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Bootstrap</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>AWS</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Docker</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>PostgreSQL</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Express.js</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Google Firebase</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>SQL</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Linux</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>CI/CD</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Tailwindcss</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>git</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Restful API</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Google Cloud Functions</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>Serverless</p>
                    </div>
                    <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                        <p>MongoDB</p>
                    </div>


                </div>
            </div>
            {/* </div> */}
        </div>

    )
}

export default AboutMe;

