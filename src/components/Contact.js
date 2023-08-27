import { useEffect, useContext } from "react";
import { Context } from "./Context";
import proj1 from '../imgs/bunny-hop.png';

const Contact = (props) => {

    // useEffect(() => {
    //     const carousel = () => {

    //     }
    //     carousel()
    // }, [])
    const { active, setActive } = useContext(Context);

    return (
        <div>
            <p>contact me</p>
        </div>
    )
}

export default Contact;

