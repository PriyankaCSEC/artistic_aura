import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Savedarts = () => {
  const [savedArts, setSavedArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedArts = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return;
        }
        const response = await axios.get('http://localhost:4000/api/saved_arts', {
          headers: {
            Authorization: token,
          },
        });
        setSavedArts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching saved arts", error);
        setLoading(false);
      }
    };

    fetchSavedArts();
  }, []);

  return (
    <div className='h-full w-full'>
      <h1>Saved Arts</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {savedArts.map((art) => (
            <div key={art._id}>
              <img src={art.art_image} alt={art.art_desc} />
              <p>{art.art_desc}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Savedarts;
