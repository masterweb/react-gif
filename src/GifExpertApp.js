import React, {useState} from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { AddcCategory } from './components/AddcCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () =>{
    //     setCategories( [...categories, 'HunterX'] );
    //     setCategories( cats => [ ...cats, 'HunterX' ] )
    // }

    return(
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddcCategory setCategories = { setCategories }/>
            <hr/>
        
            <div className="container">
                {
                    categories.map(category => 
                        <GifGrid  key =  { category } category = { category } />
                    )
                }
            </div>
        </Fragment>
    )

}

export default GifExpertApp;