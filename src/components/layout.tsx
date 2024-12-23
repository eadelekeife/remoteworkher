import React from "react";
import Navigation from "./nav";
import Footer from "./footer";

interface DisplayProps {
    children: React.ReactElement
}

const DisplayLayout = (props: DisplayProps) => {
    return (
        <div>
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}
export default DisplayLayout;