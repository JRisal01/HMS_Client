
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Gallery = () => {

    const [imamge, setImage] = useState(null);

    const url = 'http://localhost:5000/gallery'

    useEffect( () => {
        axios.get(url)
            .then ( response => {
                setImage(response.data);
            })  
    }, [url])

    console.log(imamge)
    
    return(
            <>

              <div className=" l-container  mt-5">
                <h2 className='roomTitle'>Gallery & Photos</h2>

              </div>
              <div className="l-container lightbox-gallery">
                <div className="intro">

                </div>
                <div className="row photos">
                    {imamge?.map((items,i)=>(
                  <div className="col-sm-6 col-md-4 col-lg-3 item"><img className="img-fluid"
                      src= {`http://localhost:5000/${items.galleryImage}`} />
                  </div>
                    ))};
                </div>
              </div>
            </>
            )
};

export default Gallery;