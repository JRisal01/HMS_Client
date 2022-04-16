import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Popup from 'reactjs-popup';
import { ToastContainer, toast } from 'react-toastify';



export default function Form() {

    const [title, setTitle] = useState("");
    const [galleryImage, setGalleryImage] = useState();
    

    let data = {title, galleryImage};
    console.log(data);
    

    const saveImage = () => {
        console.log(data);

        let formData = new FormData();


        formData.append('title', title);
        formData.append('galleryImage', galleryImage);


        // if(name === "" || rate === "" || phone === "" || discription === "" || roomtype === "" || bedtype === "" || roomImage === "" || noRoom === "" || features === ""){


        try {
          const response =  axios({
            method: 'post',
            url: 'http://localhost:5000/gallery',
            data: formData,
            body: formData,
            headers: {
              "Content-Type": "application/json",
            },
          });
        //   window.location.reload(true);
        } catch(error) {
          console.log(error)
        }
    // }
      
    }


  return (
    <div class="dashboard-gallery-form-container">

        <div class="dashboard-gallery-form">
            <div>
                <h1 class="dashboard-gallery-form-title">Add Images</h1>
            </div>

            <div class="dashboard-gallery-form-wrapper">
                <label>Title</label>
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>


            <div class="dashboard-gallery-form-image">
                <label>Image</label>
                <input type="file" class="dashboard-gallery-input-file" onChange={(e)=>{setGalleryImage(e.target.files[0])}}/>
            </div>

            <div class="dashboard-gallery-btn">
                <button onClick={saveImage}>Submit</button>
                {/* <Popup onClick={saveImage} trigger={<button> Submit</button>}>
                    <div>Popup content here !!</div>
                </Popup> */}
            </div>
        </div>

    </div>
  )
}
