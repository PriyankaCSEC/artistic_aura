// src/components/Imagedetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const Imagedetails = () => {
  const { id } = useParams();
  const [artDetails, setArtDetails] = useState(null);
  const [relatedArt, setRelatedArt] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/art_details/id/${id}`);
        setArtDetails(response.data);
        // Fetch related art pieces in the same category
        const relatedResponse = await axios.get(`http://localhost:4000/api/art_details/${response.data.art_category}`);
        setRelatedArt(relatedResponse.data.filter(art => art._id !== id));
        setLoading(false);
      } catch (error) {
        setError('Error fetching art details');
        setLoading(false);
      }
    };

    fetchArtDetails();
  }, [id]);

  if (loading) 
    return <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
      </div>;
  if (error)
     return <div>{error}</div>;

  return (
    <div className="bg-slate-800 text-white min-h-screen flex flex-col gap-1">
      <Navbar/>
      <div className="p-4 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{artDetails.art_category}</h1>
        <div className='flex flex-row gap-4 p-3 ml-52 mr-52 border rounded-xl'>
          <img src={artDetails.art_image} alt={artDetails.art_desc} className="rounded-lg h-[500px] w-[500px]" />
          <div className='flex flex-col gap-2 p-5'>
            <p className="text-lg">Description: {artDetails.art_desc}</p>
            <p className="text-sm">Created at: {new Date(artDetails.created_at).toLocaleDateString()}</p>
            <button className="text-xl mt-5 font-semibold bg-red-600 text-white py-2 rounded-2xl hover:bg-red-800">Save</button>
            <a 
              href={artDetails.art_image} 
              download 
              className="text-xl mt-5 font-semibold bg-red-600 text-white py-2 rounded-2xl hover:bg-red-800 text-center"
            >
              Download
            </a>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Other art pieces in the same category</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {relatedArt.map(art => (
              <Link key={art._id} to={`/art/${art._id}`} className="relative group shadow-md rounded-lg overflow-hidden p-1 m-1">
                <img
                  className="rounded-lg h-[300px] w-[300px] transform transition-transform duration-300 group-hover:brightness-50"
                  src={art.art_image}
                  alt={art.art_desc}
                />
                <div className="flex flex-col p-2 mt-2 text-white">
                  <p className="mt-2">{art.art_desc}</p>
                  <p className="text-sm text-slate-500">{new Date(art.created_at).toLocaleDateString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagedetails;
