import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Imagecard = () => {
  const [artDetails, setArtDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchArtDetails = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/art_details');
        setArtDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching", error);
        setLoading(false);
      }
    };
    fetchArtDetails();
  }, []);

  const saveArt = async (artId) => {
    try {
      await axios.post('http://localhost:4000/api/save_art', { art_id: artId });
      alert('Art saved successfully');
    } catch (error) {
      console.error('Error saving art', error);
      alert('Failed to save art');
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredArtDetails = selectedCategory
    ? artDetails.filter((art) => art.art_category === selectedCategory)
    : artDetails;

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-white">Select search Category:</label>
        <select
          id="category"
          className="mt-1 p-2 block w-[300px] rounded-md border border-gray-300 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="AI Art">AI Art</option>
          <option value="Photography">Photography</option>
          <option value="Sketches">Sketches</option>
          <option value="Traditional Art">Traditional Art</option>
          <option value="Paintings and Drawing">Paintings and Drawing</option>
          <option value="Wallpaper">Wallpaper</option>
      
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 mt-9 gap-4">
          {filteredArtDetails.map((art) => (
            <div key={art._id} className="relative group shadow-md rounded-lg overflow-hidden m-1">
              <Link to={`/art/${art._id}`}>
                <img
                  className="rounded-lg h-[360px] w-[500px] transform transition-transform duration-300 group-hover:brightness-50"
                  src={art.art_image}
                  alt="Art"
                />
                <div className="flex flex-col p-2 text-white mt-2">
                  <p>User name: {art.user_name}</p>
                  <div className="mt-2 ">{art.art_desc}</div>
                  <p className='text-slate-500'>Created at:</p>
                  <div className="text-slate-500">{new Date(art.created_at).toLocaleDateString()}</div>
                </div>
              </Link>
              <button
                className="text-xl font-semibold absolute top-2 right-2 hover:bg-red-800 bg-red-600 text-white px-5 py-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => saveArt(art._id)}
              >
                Save
              </button>
            </div>
          ))}
        </div>
      )}

      <style>
        {`
          .loader {
            border: 8px solid #f3f3f3;
            border-radius: 50%;
            border-top: 8px solid #3498db;
            width: 80px;
            height: 80px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Imagecard;
