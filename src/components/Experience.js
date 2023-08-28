import { useEffect, useContext } from "react";
import { Context } from "./Context";
import '../styles.css'
import { useDarkMode } from "./DarkModeContext";


const Experience = (props) => {
    const { active, setActive } = useContext(Context);
    const { isDarkMode } = useDarkMode();

    return (

        <div className="flex-1 flex flex-col">
            <div className="w-full pl-24  pt-10">
                <p className="text-base md:text-lg lg:text-xl  ">experience</p>

                <div className="pt-8 w-full flex flex-col">
                    <p className=" text-lg">TLVTech</p>
                    <p>Full Stack Engineer</p>
                    <div className="flex w-full ">
                        <div className=" w-3/4 ">
                            <p className="pr-1 text-sm pt-2">Developed a chrome extension - <a className="underline" rel="noreferrer" target="_blank" href="https://www.jobmint.io/">Jobmint</a> - Incorporating AI to enable users to generate tailored CVs and cover letters based on selected job descriptions. Utilised Google NLP to enhance various projects using entity sentiment analysis</p>
                        </div>
                        <div className="mt-2 border-r border-r-gray-500 h-[5rem]"></div>
                        <div className="ml-10 flex text-xs flex-wrap w-1/2 pb-4">
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>React.js</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>Node.js</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>AWS</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>Docker</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>Express.js</p>
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
                    <div className="mt-1 border-b border-gray-600 mb-1 w-full self-center"></div>
                    <p className="pt-5 text-lg">I-check-in & Say hi</p>
                    <p>Full Stack Developer</p>
                    <div className="flex w-full ">
                        <p className="pr-1  text-sm pt-2 w-3/4">Developed web and mobile applications, one of which has been implemented in Developer's Institute, as an efficient attendance tracking method. The second application being a form of social media app that helps users to connect to each other through various activites based on the same interests. </p>
                        <div className="mt-2 border-r border-r-gray-500 h-[5rem]"></div>
                        <div className="ml-10 flex text-xs flex-wrap w-1/2">
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>React Native</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>React.js</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>Node.js</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>Google Cloud Functions</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>git</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>Google Firebase</p>
                            </div>
                            <div className={`flex px-3 py-1 ${isDarkMode ? 'about-border-dark' : 'about-border'} items-center mr-1 mb-1`}>
                                <p>Restful API</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            {/* </div> */}
        </div>

    )
}

export default Experience;

