import React from "react";
import Navigation from "./nav";
import Footer from "./footer";

interface DisplayProps {
    textColor?: string
    logoColor?: string
    footerMargin?: string
    children: React.ReactElement
}

const DisplayLayout = (props: DisplayProps) => {
    return (
        <div>
            <Navigation textColor={props.textColor} logoColor={props.logoColor} />
            {props.children}
            <Footer footerMargin={props.footerMargin} />
        </div>
    )
}
export default DisplayLayout;