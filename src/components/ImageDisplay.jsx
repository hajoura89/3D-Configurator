import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImageDisplay = () => {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    // Fetch images from backend when component mounts
    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = () => {
        axios.get('http://localhost:3000/images')
        .then(response => {
            setImages(response.data.imageData);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
    };

    const getImageData = (data) => {
        try {
          if (typeof data === 'object' && data.type === 'Buffer' && Array.isArray(data.data)) {
            // If data is an object with type 'Buffer' and 'data' property is an array
            const blob = new Blob([new Uint8Array(data.data)], { type: 'image/png' });
            const reader = new FileReader();
    
            return new Promise((resolve, reject) => {
              reader.onload = () => {
                resolve(reader.result.split(',')[1]);
              };
              reader.onerror = reject;
    
              reader.readAsDataURL(blob);
            });
          } else if (typeof data === 'string') {
            // If data is already a string (expected Base64)
            return data;
          } else {
            // Handle other scenarios or throw an error
            throw new Error('Invalid image data format');
          }
        } catch (error) {
          console.error('Error converting image data to Base64:', error);
          return ''; // Return an empty string as default
        }
      };
      
  return (
    <div className="w-full mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <button
          className="absolute top-0 left-0 m-4 font-rubix p-2 bg-pink-800 text-white font-medium rounded-lg z-10"
          onClick={() => navigate(-1)}>
          Go Back
        </button>
        <h2 className="text-2xl font-bold mb-4">Uploaded Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* {images.map(image => (
                <img key={image.id} src={`data:image/png;base64,${image.data}`} alt="Uploaded" />
            ))} */}

            {/* {images.map(image => (
                <img key={image.id} src={`data:image/png;base64,${image.data.base64}`} alt="Uploaded" />
            ))} */}

            {/* {images.map(image => (
                <img key={image.id} src={`data:image/png;base64,${image.data.imageData}`} alt="Uploaded" />
            ))} */}


            {images.map(image => (
                <img key={image.id} src={`data:image/png;base64,${getImageData(image.data)}`} alt="Uploaded" />
            ))}

        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;