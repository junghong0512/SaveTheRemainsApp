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
};
