'use client'

import { useState } from 'react'
import { prefectures } from '../data/prefectures'
import Link from 'next/link'

export default function Home() {
  const [selectedPrefecture, setSelectedPrefecture] = useState('')

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">観光地スワイプアプリ</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>行きたい県を選択してください：</p>
                <select
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  value={selectedPrefecture}
                  onChange={(e) => setSelectedPrefecture(e.target.value)}
                >
                  <option value="">県を選択</option>
                  {prefectures.map((pref) => (
                    <option key={pref} value={pref}>
                      {pref}
                    </option>
                  ))}
                </select>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <Link href={selectedPrefecture ? `/swipe/${encodeURIComponent(selectedPrefecture)}` : '#'} 
                      className={`px-4 py-2 rounded-md ${selectedPrefecture ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                  観光地を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

