import React from "react";
import "../css/MovieRow.css";

export default function MovieRow ({title, items}){
console.log(items)
    return (
        <div className="movieRow">
            <h2> {title} </h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
