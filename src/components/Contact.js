import { useEffect, useContext } from "react";
import { Context } from "./Context";

const Contact = (props) => {

    const { active, setActive } = useContext(Context);

    return (
        <div className="flex-1 flex flex-col">
            <div className="w-full pl-24  pt-10">
                <p className="text-base md:text-lg lg:text-xl  ">contact</p>

                <div className="pt-8 w-full flex flex-col">
                    <div>
                        <p>phone number</p>
                        <p>+972 051-272-9883</p>
                    </div>
                    <div>
                        <p>email</p>
                        <p>amy.skaletzky@gmail.com</p>
                    </div>
                    <div>
                        <p>location</p>
                        <p>Netanya, Israel</p>
                    </div>

                </div>



            </div>
        </div>

    )
}

export default Contact;



