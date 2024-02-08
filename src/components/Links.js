import React from "react";

const Link = (props) =>{
    const {link}= props ;
    return(
        <ul>
            <li>
                {link.description} ({link.url})
            </li>
        </ul>
    );
};
export default Link;