import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from '../firebaseConfig';

const Article = () => {
    const {id} = useParams();
    const [article, setArticle] = useState(null)


    useEffect(() => {
      const docRef = doc(db, 'Articles', id);
      onSnapshot(docRef, (snapshot) =>{
        setArticle({...snapshot.data(), id:snapshot.id})
      })
    
     
    }, [])
    
  return (
    <div className='container border bg-light' style={{marginTop: 70}}>
        {
            article &&
            <div className="row">
                <div className="col-3">
                    <img src={article.imageUrl} alt={article.title} style={{width:'100%', padding: 15}} />
                </div>
                <div className="col-9 mt-3">
                    <h2>{article.title}</h2>
                    <h5>Author:{article.createdBy}</h5>
                    <div>Posted On: {article.createdAt.toDate().toDateString()}</div>
                    <hr />
                    
                </div>
            </div>
        }
    </div>
  )
}

export default Article