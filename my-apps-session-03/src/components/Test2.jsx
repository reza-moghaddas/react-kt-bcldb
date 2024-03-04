import React from "react";

export default function Test2(props) {

    // function handleClick() {
    //     const propText = props.text;
    //     console.log(propText);
    // }
    const { handleClickOnInput } = props;
    
    return (
        <div>
            <input onClick={handleClickOnInput} />
            <h1>test2</h1>
        </div>
    );
}