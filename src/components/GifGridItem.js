
import React from 'react'


export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div className="card  animate__animated animate__fadeIn" alt="">
            <img src={ url }></img>
        </div>
    )
}
