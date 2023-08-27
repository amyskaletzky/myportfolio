import { useEffect, useContext } from "react";
import { Context } from "./Context";

const Experience = (props) => {

    // useEffect(() => {
    //     const carousel = () => {

    //     }
    //     carousel()
    // }, [])
    const { active, setActive } = useContext(Context);

    return (
        <div className="flex-1 p-4 flex items-center">
            {/* <div className="container"> */}
            <p>experience:</p>

            <p>Data from context: {active}</p>
            <button onClick={() => setActive('contact')}>Change Data</button>
            {/* </div> */}
        </div>
    )
}

export default Experience;

