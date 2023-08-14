interface Data {
  store: {
    id: string;
    name: string;
    address: string;
    description: string;
    location: [number, number];
    type: StoreType;
    created_at: Date;
    updated_at: Date;
  }[];
  item: {
    id: string;
    name: string;
    price: number;
    store_id: string;
    created_at: Date;
    updated_at: Date;
  }[];
}

export enum StoreType {
  CAFE = 'cafe',
  ITALIAN = 'italian',
  KOREAN = 'korean',
  JAPANESE = 'japanese',
  MAXICAN = 'maxican',
  BAKERY = 'bakery',
  GROCERY = 'grocery',
}

export enum ItemType {
  BAKERY = 'bakery',
  GROCERY = 'grocery',
  KOREAN = 'korean',
  VEGAN = 'VEGAN',
}

export const data: Data = {
  store: [
    {
      id: 'uuid1',
      name: '스타벅스',
      address: '서울특별시 마포구 공덕동 공덕오거리',
      description: '스타벅스 매장',
      location: [127, 37],
      type: StoreType.CAFE,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 'uuid2',
      name: '공덕김밥',
      address: '서울특별시 마포구 공덕동 공덕오거리',
      description: '공덕 김밥 분식 매장',
      location: [127, 37],
      type: StoreType.KOREAN,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 'uuid1',
      name: '버거킹',
      address: '서울특별시 마포구 공덕동 공덕오거리',
      description: '버거킹 매장',
      location: [127, 37],
      type: StoreType.MAXICAN,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],

  item: [
    {
      id: 'itemuuid1',
      name: 'Bakery Package',
      price: 5000,
      store_id: 'uuid1',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
};
