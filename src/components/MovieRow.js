import React, { useState } from "react";
import "../css/MovieRow.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function MovieRow ({title, items}){

    const [scrollX, setScrollX] = useState(-350);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x>0){
            x=0
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 213;

        if((window.innerWidth - listWidth) > x){
            x = (window.innerWidth - listWidth);
        }
        
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2> {title} </h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <ArrowBackIosIcon style={{fontSize: 40}} />
            </div>


            <div className="movieRow--right" onClick={handleRightArrow}>
                <ArrowForwardIosIcon style={{fontSize: 40}} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                        marginLeft: scrollX,
                        width: items.results.length * 250,
                        transition: 'all ease 0.6s',
                }}>
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
