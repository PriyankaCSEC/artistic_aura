import React, { useState } from 'react';

const Postart = () => {
  const [artCategory, setArtCategory] = useState('');
  const [artImage, setArtImage] = useState(null);
  const [artImagePreview, setArtImagePreview] = useState('');
  const [artDesc, setArtDesc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postArtDetails(artImage, artDesc, artCategory);
      
      // Clear input fields after successful submission
      setArtImage(null);
      setArtImagePreview('');
      setArtDesc('');
      setArtCategory('');

      alert(response.message); 
    } catch (error) {
      console.error('Error posting art:', error);
      alert('Failed to post art. Please try again later.');
    }
  };

  const postArtDetails = async (artImage, artDesc, artCategory) => {
    const formData = new FormData();
    formData.append('art_image', artImage);
    formData.append('art_desc', artDesc);
    formData.append('art_category', artCategory);

    try {
      const response = await fetch('http://localhost:4000/api/art_details', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to post art');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setArtImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setArtImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-footer-texture bg-cover bg-fit min-h-screen flex items-center justify-center text-black">
      <div className="backdrop-blur-xl p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 lg:text-white">Post Your Art</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="artImage" className="block text-sm font-medium lg:text-white">Art Image:</label>
            <input
              type="file"
              id="artImage"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
              onChange={handleFileChange}
              required
            />
          </div>
          {artImagePreview && (
            <div className="mb-4">
              <img src={artImagePreview} alt="Art Preview" className="rounded-lg max-h-80" />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="artCategory" className="block text-sm font-medium lg:text-white">Category:</label>
            <select
              id="artCategory"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
              value={artCategory}
              onChange={(e) => setArtCategory(e.target.value)}
              required
            >
              <option value="" disabled>Select Category</option>
              <option value="AI Art">AI Art</option>
              <option value="Photography">Photography</option>
              <option value="Sketches">Sketches</option>
              <option value="Traditional Art">Traditional Art</option>
              <option value="Paintings and Drawing">Paintings and Drawing</option>
              <option value="Wallpaper">Wallpaper</option>
            
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="artDesc" className="block text-sm font-medium lg:text-white">Art Description:</label>
            <textarea
              id="artDesc"
              rows="4"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
              value={artDesc}
              onChange={(e) => setArtDesc(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition-colors duration-300"
          >
            Post Art
          </button>
        </form>
      </div>
    </div>
  );
};

export default Postart;
