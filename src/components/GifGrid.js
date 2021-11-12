// import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';
import { GifgridItem } from './GifgridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {

    // const [image, setImages] = useState([])
    // CUSTOM HOOK
    const {data:image, loading} = useFetchGifs(category);
    
    // useEffect( () => {
    //     getGifs( category )
    //     .then( imgs => setImages( imgs ) )
    // },[ category ] )

    
    return (
        <Fragment>        
            <h3>{ category }</h3>
            {loading && <p>Loading</p>}
            <div className="row">
                
                    {
                        image.map(img => 
                            <GifgridItem 
                                key = { img.id }
                                { ...img }
                            />
                        )
                    }
                
            </div>
        </Fragment>
    )
}
