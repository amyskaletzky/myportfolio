import { useEffect, useContext } from "react";
import { Context } from "./Context";
import '../styles.css'



const AboutMe = (props) => {
    const { active, setActive } = useContext(Context);


    return (

        <div className="flex-1 flex flex-col">
            {/* <div className="container"> */}
            {/* <div className="flex flex-col"> */}
            <div className="w-8/12 px-24  pt-20">
                <p className="text-lg md:text-xl lg:text-2xl  ">about me</p>

                <p className="pt-6">I’m a full stack developer working mainly with JavaScript, React, React-Native and Node.js</p>

                <p className="pt-4"> Passionate about blending artistry with my technical skills, and using new technologies to craft captivating web and mobile applications.</p>

                <p className="pt-4">  When I’m not coding, I’m out hiking in nature, or painting with a nice cup of tea.</p>

                <p className="pt-4">technical skills</p>
                <div className="flex">
                    <div className="flex px-3 py-1 about-border items-center mr-1.5">
                        <p>React.js</p>
                    </div>
                    <div className="flex px-3 py-1 about-border items-center mr-1.5">
                        <p>Node.js</p>
                    </div>
                    <div className="flex px-3 py-1 about-border items-center mr-1.5">
                        <p>Bootstrap</p>
                    </div>
                    <div className="flex px-3 py-1 about-border items-center mr-1.5">
                        <p>AWS</p>
                    </div>


                </div>
            </div>
            {/* </div> */}
        </div>

    )
}

export default AboutMe;

