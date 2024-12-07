import React from 'react';
import { touristSpots } from '../../data/prefectures';

const TouristListPage = () => {
  // 石川県の観光地データを取得
  const ishikawaSpots = touristSpots['石川県'];

  // 最後の7件のみを取得
  const limitedSpots = ishikawaSpots.slice(-7);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">選択した観光地一覧</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {limitedSpots.map((spot) => (
          <div key={spot.id} className="border rounded-md shadow-md p-2">
            <img
              src={spot.image}
              alt={spot.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h2 className="text-sm font-medium mt-2 text-center">{spot.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristListPage;
