export const prefectures = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県',
  '山形県', '福島県', '茨城県', '栃木県', '群馬県',
  '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県',
  '富山県', '石川県', '福井県', '山梨県', '長野県',
  '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県',
  '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
  '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県', '福岡県',
  '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県',
  '鹿児島県', '沖縄県'
];

export interface TouristSpot {
  id: string;
  name: string;
  image: string;
  description: string;
  coordinates: [number, number];
}

export const touristSpots: { [key: string]: TouristSpot[] } = {
  '石川県': [
    {
      id: 'ishikawa-1',
      name: '山代温泉 瑠璃光',
      image: '/images/tourist-places/ishikawa/1018_山代温泉 瑠璃光.jpg',
      description: '加賀温泉郷の一つで、美しい自然と癒しの温泉地。',
      coordinates: [36.304019, 136.376252],
    },
    {
      id: 'ishikawa-2',
      name: '鼠多門・鼠多門橋',
      image: '/images/tourist-places/ishikawa/1111111493_鼠多門・鼠多門橋.jpg',
      description: '歴史的な門と橋で、金沢城を訪れる際の観光名所。',
      coordinates: [36.563444, 136.662562],
    },
    {
      id: 'ishikawa-3',
      name: '太陽が丘メタセコイア並木',
      image: '/images/tourist-places/ishikawa/1111111499_太陽が丘メタセコイア並木.jpg',
      description: '四季折々の風景を楽しめる美しい並木道。',
      coordinates: [36.304897, 136.432562],
    },
    {
      id: 'ishikawa-4',
      name: 'メタセコイア並木',
      image: '/images/tourist-places/ishikawa/1111111500_メタセコイア並木.jpg',
      description: '季節ごとの風景を楽しむことができる絶景スポット。',
      coordinates: [36.302444, 136.430562],
    },
    {
      id: 'ishikawa-5',
      name: '粟津温泉',
      image: '/images/tourist-places/ishikawa/1111111526_粟津温泉.jpg',
      description: '日本最古の温泉地の一つで、豊かな自然に囲まれています。',
      coordinates: [36.328628, 136.380342],
    },
    {
      id: 'ishikawa-6',
      name: '兼六園・紅葉',
      image: '/images/tourist-places/ishikawa/1111111652_兼六園・紅葉.jpg',
      description: '日本三名園の一つで、秋には紅葉が見事です。',
      coordinates: [36.561325, 136.662494],
    },
    {
      id: 'ishikawa-7',
      name: 'ひがし茶屋街',
      image: '/images/tourist-places/ishikawa/1111111694_ひがし茶屋街.jpg',
      description: '江戸時代の雰囲気が残る伝統的な街並みです。',
      coordinates: [36.573348, 136.662738],
    },
    {
      id: 'ishikawa-8',
      name: '白山比咩神社',
      image: '/images/tourist-places/ishikawa/1111111760_白山比咩神社.jpg',
      description: '厳かな雰囲気の漂う歴史ある神社。',
      coordinates: [36.473735, 136.637357],
    },
    {
      id: 'ishikawa-9',
      name: '大本山總持寺祖院・本堂',
      image: '/images/tourist-places/ishikawa/1111112679_大本山總持寺祖院・本堂.jpg',
      description: '禅宗の大本山として歴史を感じることができる寺院。',
      coordinates: [36.771375, 136.920464],
    },
    {
      id: 'ishikawa-10',
      name: '金沢城公園・桜',
      image: '/images/tourist-places/ishikawa/1111112998_金沢城公園-桜.jpg',
      description: '春には美しい桜が咲き誇る人気スポット。',
      coordinates: [36.561431, 136.656289],
    },
    {
      id: 'ishikawa-11',
      name: '湯涌温泉街',
      image: '/images/tourist-places/ishikawa/1111114062_湯涌温泉街.jpg',
      description: '静かな温泉街で、のんびりと過ごせます。',
      coordinates: [36.523058, 136.761781],
    },
    {
      id: 'ishikawa-12',
      name: '山代温泉 古総湯',
      image: '/images/tourist-places/ishikawa/1111114096_山代温泉_古総湯.jpg',
      description: '歴史ある建物とともに温泉を楽しめます。',
      coordinates: [36.305008, 136.377598],
    },
    {
      id: 'ishikawa-13',
      name: '金沢駅もてなしドーム',
      image: '/images/tourist-places/ishikawa/1487_金沢駅もてなしドーム.jpg',
      description: '金沢駅のシンボル的な建築物で写真映えするスポット。',
      coordinates: [36.578446, 136.648028],
    },
    {
      id: 'ishikawa-14',
      name: '那谷寺',
      image: '/images/tourist-places/ishikawa/230_那谷寺.jpg',
      description: '自然と調和した美しい寺院。',
      coordinates: [36.315839, 136.383583],
    },
    {
      id: 'ishikawa-15',
      name: '石川県立美術館',
      image: '/images/tourist-places/ishikawa/878_石川県立美術館.jpg',
      description: '石川県を代表する美術館。',
      coordinates: [36.561043, 136.661821],
    }
  ]
};
