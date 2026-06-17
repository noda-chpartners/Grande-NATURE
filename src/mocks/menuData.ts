import menu1 from '@/assets/menu11.png';
import menu2 from '@/assets/menu2.jpg';
import menu3 from '@/assets/menu3.jpg';
import menu4 from '@/assets/menu4.jpg';
import menu5 from '@/assets/hero.jpg';
// ...



export const menuItems = [
  {
    id: 1,
    name: '小顔リンパマッサージ',
    description: 'PCでお疲れの貴方へ',
    duration: '40分',
    originalPrice: '¥9,900',
    salePrice: '¥6,930',
    image: menu1,
  },
  {
    id: 2,
    name: '全身アロママッサージ',
    description: 'ゆったりリラックス',
    duration: '60分',
    originalPrice: '¥12,100',
    salePrice: '¥9,900',
    image: menu2,
  },
  {
    id: 3,
    name: '極上全身リンパマッサージ',
    description: '一番人気',
    duration: '120分',
    originalPrice: '¥22,000',
    salePrice: '¥15,400',
    image: menu3,
  },
  {
    id: 4,
    name: 'グロッティプロ フェイシャル',
    description: '近赤外線＋エクソソーム導入',
    duration: '約60分',
    originalPrice: '¥25,300',
    salePrice: '¥13,200',
    image: menu4,
  },
  {
    id: 5,
    name: '贅沢スペシャルコース',
    description: 'ボディ＆フェイシャル',
    duration: '約150分',
    originalPrice: '¥26,400',
    salePrice: '¥18,480',
    image: menu5,
  },
];

export const infoData = [
  {
    icon: 'ri-time-line',
    label: '営業時間',
    value: '11:00 〜 21:30',
    note: '水曜・日曜は 18:30 まで',
  },
  {
    icon: 'ri-calendar-check-line',
    label: '定休日',
    value: 'なし',
    note: '年中無休で営業中',
  },
  {
    icon: 'ri-phone-line',
    label: 'TEL',
    value: '03-6421-3344',
    note: 'お気軽にお問合せください',
  },
  {
    icon: 'ri-train-line',
    label: '最寄駅',
    value: '自由が丘駅 / 奥沢駅',
    note: '自由が丘駅 徒歩5分 / 奥沢駅 徒歩3分',
  },
];