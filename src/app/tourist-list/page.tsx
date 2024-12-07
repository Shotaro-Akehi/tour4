"use client";

import React from 'react';
import { touristSpots } from '../../data/prefectures';
import { useRouter } from 'next/navigation';

const TouristListPage = () => {
  const router = useRouter();
  const ishikawaSpots = touristSpots['石川県'];
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
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push('/tourist-route')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
        >
          ルートを作成
        </button>
      </div>
    </div>
  );
};

export default TouristListPage;
