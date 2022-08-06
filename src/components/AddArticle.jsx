import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../firebaseConfig";


const AddArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  };

  const handleImageChange = (e) => {
    setFormData({...formData, image: e.target.files[0]});
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
        alert('Please fill all the fields.');
        return;
    }
     const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);
     const uploadImage = uploadBytesResumable(storageRef, formData.image);

     uploadImage.on('state_changed', (snapshot) => {
        const progressPercent = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        setProgress(progressPercent);
     },
     (err) => {
        console.log(err);
     },
     () => {
        setFormData({
            title:'',
            description: '',
            image: ''
        });
        getDownloadURL(uploadImage.snapshot.ref).th
        en((url)=>{})
     }
     );


  }

  return (
    <div className="border p-3 mt-3 bg-light" style={{ position: "fixed" }}>
      <h2>Add Article</h2>
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        className="form-control"
        value={formData.title}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="">Description</label>
      <textarea
        name="description"
        className="form-control"
        value={formData.description}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="">Image</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        className="form-conrol"
        onChange={(e) => handleImageChange(e)}
      />
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped mt-2"
          style={{ width: "50%" }}
        >
          50%
        </div>
      </div>
      <button className="form-control bg-primary text-light mt-2" onClick={handlePublish}>
        Publish
      </button>
    </div>
  );
};

export default AddArticle;
