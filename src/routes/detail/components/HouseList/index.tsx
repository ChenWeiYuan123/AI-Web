import { useEffect, useState } from 'react';
import House, { HouseItem } from './House';
const mockData: HouseItem[] = [
  {
    title: '整租·雅居乐君域公馆 1室1厅 东南',
    summary: 'summarysummarysummarysummary',
    price: {
      min: 3000,
      max: 4000,
    },
    address: {
      full: '番禺-市桥-雅居乐君域公馆',
    },
    images: [
      {
        src: 'https://vrlab-image4.ljcdn.com/release/auto3dhd/c5a491d0b0c0af3c338dfee497f45641/screenshot/1646705633_0/pc0_IokUaiuJx.jpg?imageMogr2/quality/70/thumbnail/1024x',
      },
    ],
    type: '整租',
    district: '君域公馆',
    time: '2024-01-01',
    area: 25,
    tags: ['近地铁', '精装'],
    layout: {
        bedRoom: 1,
        livingRoom: 1,
        bathRoom: 1
    }
  },
  {
    title: '整租·雅居乐君域公馆 1室1厅 东南',
    summary: 'summarysummarysummarysummary',
    price: {
      min: 3000,
      max: 4000,
    },
    address: {
      full: '番禺-市桥-雅居乐君域公馆',
    },
    images: [
      {
        src: 'https://vrlab-image4.ljcdn.com/release/auto3dhd/c5a491d0b0c0af3c338dfee497f45641/screenshot/1646705633_0/pc0_IokUaiuJx.jpg?imageMogr2/quality/70/thumbnail/1024x',
      },
    ],
    type: '整租',
    district: '君域公馆',
    time: '2024-01-01',
    area: 25,
    tags: ['近地铁', '精装'],
    layout: {
        bedRoom: 1,
        livingRoom: 1,
        bathRoom: 1
    }
  },
];
export const searchHouse = (): Promise<HouseItem[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData);
          }, 1000);
    });
  };
const HouseList = () => {
  return <div style={{ marginTop: 24 }}>
    {
        mockData.map(item => {
            return <House data={item}></House>
        })
    }
  </div>;
};
export default HouseList;
