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
}

export const touristSpots: { [key: string]: TouristSpot[] } = {
  '東京都': [
    {
      id: 'tokyo-1',
      name: '東京スカイツリー',
      image: '/placeholder.svg?height=300&width=200',
      description: '東京の新しいランドマーク。高さ634mの電波塔で、展望台からは東京の街並みを一望できます。'
    },
    {
      id: 'tokyo-2',
      name: '浅草寺',
      image: '/placeholder.svg?height=300&width=200',
      description: '東京都内最古の寺院。雷門や仲見世通りなど、江戸の風情を感じられる観光スポットです。'
    },
    {
      id: 'tokyo-3',
      name: '渋谷スクランブル交差点',
      image: '/placeholder.svg?height=300&width=200',
      description: '世界で最も忙しい交差点の一つ。一度に3000人以上が横断することもある東京の象徴的な場所です。'
    }
  ],
  '京都府': [
    {
      id: 'kyoto-1',
      name: '金閣寺',
      image: '/placeholder.svg?height=300&width=200',
      description: '正式名称は鹿苑寺。金箔で覆われた三層の楼閣が特徴的な世界遺産です。'
    },
    {
      id: 'kyoto-2',
      name: '伏見稲荷大社',
      image: '/placeholder.svg?height=300&width=200',
      description: '千本鳥居で有名な神社。インバウンド観光客にも人気のスポットです。'
    },
    {
      id: 'kyoto-3',
      name: '清水寺',
      image: '/placeholder.svg?height=300&width=200',
      description: '京都を代表する寺院の一つ。舞台造りの本堂からの眺めは絶景です。'
    }
  ],
  '大阪府': [
    {
      id: 'osaka-1',
      name: '大阪城',
      image: '/placeholder.svg?height=300&width=200',
      description: '豊臣秀吉によって築かれた城。天守閣からの眺めは大阪市内を一望できます。'
    },
    {
      id: 'osaka-2',
      name: '道頓堀',
      image: '/placeholder.svg?height=300&width=200',
      description: '大阪の繁華街。グリコの看板や巨大なフードサンプルなど、活気あふれる観光スポットです。'
    },
    {
      id: 'osaka-3',
      name: 'ユニバーサル・スタジオ・ジャパン',
      image: '/placeholder.svg?height=300&width=200',
      description: '人気の映画やアニメをテーマにしたアトラクションが楽しめるテーマパーク。'
    }
  ],
  '北海道': [
    {
      id: 'hokkaido-1',
      name: '札幌時計台',
      image: '/placeholder.svg?height=300&width=200',
      description: '札幌のシンボル的建造物。明治時代に建てられた歴史的な建物です。'
    },
    {
      id: 'hokkaido-2',
      name: '小樽運河',
      image: '/placeholder.svg?height=300&width=200',
      description: 'レンガ造りの倉庫群が並ぶ風情ある運河。夜はガス灯が灯り、ロマンチックな雰囲気を醸し出します。'
    },
    {
      id: 'hokkaido-3',
      name: '富良野ラベンダー畑',
      image: '/placeholder.svg?height=300&width=200',
      description: '夏には一面がラベンダーで覆われる美しい景観。北海道を代表する観光スポットの一つです。'
    }
  ]
};

