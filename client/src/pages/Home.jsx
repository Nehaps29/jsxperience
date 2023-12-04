import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);
  const [randomItem, setRandomItem] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://perenual.com/api/species-list?key=sk-Sl3I656922f82a1e13232');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.data);

        const randomIndex = Math.floor(Math.random() * result.data.length);
        setRandomItem(result.data[randomIndex]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageError = (event) => {
    console.error('Error loading image:', event);
    setImageError(true);
  };

  return (
    <section className="px-6 py-12 text-center md:px-12 lg:text-left ">
    <div>
      {randomItem && (
        <div key={randomItem.id}>
          <h3>{randomItem.common_name}</h3>
          
          
          <div>
          <p>Other name: {randomItem.other_name}</p>
          <p>Cycle: {randomItem.cycle}</p>
          <p>Watering: {randomItem.watering}</p>
          <p>Sunlight: {randomItem.sunlight}</p>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default YourComponent;
