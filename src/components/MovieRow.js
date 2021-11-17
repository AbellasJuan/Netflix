import React from "react";
import "../styles/MovieRow.css"

export default function MovieRow ({props}){

    console.log(props)
    return (
        <div>
              {props.title}
            </div>
        )
};