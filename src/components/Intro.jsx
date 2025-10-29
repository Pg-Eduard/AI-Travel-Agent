import { Link } from "react-router-dom"
import { FaMapLocationDot } from "react-icons/fa6";

import "../style/intro.css"

export default function Intro() {
    const body = (
        <div>
            <FaMapLocationDot />
            <Link to="/information">Let's Begin!</Link>
        </div>
    )

    return body
}