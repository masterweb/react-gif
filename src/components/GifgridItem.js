import React from 'react'

export const GifgridItem = ({ id, title, url }) => {
    return (
        <>
        <div className="col-md-3">        
            <div className="card animate__animated animate__fadeIn">
                <img className="card-img-top" src={ url } alt={ title }/>
                <div className="card-body">
                    <p className="card-text">{ title }</p>
                </div>
                
            </div>
        </div>
        </>
    )
}
