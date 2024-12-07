'use client'

import { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import { touristSpots, TouristSpot } from '../../../data/prefectures'
import Link from 'next/link'

export default function Swipe({ params }: { params: { prefecture: string } }) {
  const prefecture = decodeURIComponent(params.prefecture)
  const spots = touristSpots[prefecture] || []
  const [currentIndex, setCurrentIndex] = useState(spots.length - 1)
  const [lastDirection, setLastDirection] = useState<string>()
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(spots.length)
        .fill(0)
        .map(() => React.createRef<any>()),
    [spots]
  )

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canSwipe = currentIndex >= 0

  const swiped = (direction: string, nameToDelete: string, index: number) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name: string, idx: number) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < spots.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  if (spots.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">申し訳ありません</h1>
        <p className="text-lg mb-4">{prefecture}の観光地データが見つかりませんでした。</p>
        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          ホームに戻る
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Link href="/" className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        戻る
      </Link>
      <h1 className="text-2xl font-bold mb-4">{prefecture}の観光地</h1>
      <div className="cardContainer relative w-80 h-[400px]">
        {spots.map((spot: TouristSpot, index: number) => (
          <TinderCard
            ref={childRefs[index]}
            className="absolute swipe"
            key={spot.id}
            onSwipe={(dir) => swiped(dir, spot.name, index)}
            onCardLeftScreen={() => outOfFrame(spot.name, index)}
          >
            <div className="card bg-white shadow-xl rounded-2xl overflow-hidden w-80 h-[400px]">
              <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{spot.name}</h2>
                <p className="text-gray-600">{spot.description}</p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => swipe('left')}>
          スキップ
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => swipe('right')}>
          行きたい！
        </button>
      </div>
      {lastDirection && (
        <p className="mt-4">
          最後の選択: {lastDirection === 'right' ? '行きたい！' : 'スキップ'}
        </p>
      )}
    </div>
  )
}

