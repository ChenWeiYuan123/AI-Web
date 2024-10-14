import { useEffect, useState } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import { List } from '@douyinfe/semi-ui';
(window as any)._AMapSecurityConfig = {
  securityJsCode: '3fe9f99a0e7ea15076eaf088bfe6f93f',
};
interface Position {
  latitude: number;
  longitude: number;
}
interface Location {
  target: string;
  name: string;
  type: string;
  distance: string;
  address?: string;
  position?: Position;
}
interface AreaData {
  success: boolean;
  data: Location[];
}
const defaultAreaData: Location[] = [
  {
    target: '深圳市南山区',
    name: '深大南',
    type: '地铁站',
    distance: '步行 5 分钟',
    address: '广东省深圳市南山区学府路',
    position: {
      latitude: 22.534089,
      longitude: 113.927211,
    },
  },
  {
    target: '深圳市南山区',
    name: '南山地铁',
    type: '地铁站',
    distance: '步行 5 分钟',
    address: '广东省深圳市南山区南山大道与桃园路交叉口',
    position: {
      latitude: 22.541891,
      longitude: 113.923948,
    },
  },
];
const getCenter = (locations: Location[]) => {
  let latitudeSum = 0;
  let longitudeSum = 0;
  locations.forEach(item => {
    const { position } = item;
    latitudeSum += position?.latitude || 0;
    longitudeSum += position?.longitude || 0;
  });
  const len = locations.length;
  return [longitudeSum / len, latitudeSum / len];
};
export const useAreaSearch = () => {
  const [loading, setLoading] = useState(false);
  const [areaData, setAreaData] = useState<AreaData>({
    success: false,
    data: [],
  });
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAreaData({
        success: true,
        data: defaultAreaData,
      });
    }, 1000);
  }, []);
  return { loading, areaData };
};
const Area = ({ data }: { data: AreaData }) => {
  useEffect(() => {
    // return;
    AMapLoader.load({
      key: '8cc40a2b6984c421eba0e438c3fec83a', //申请好的 Web 端开发者 Key，首次调用 load 时必填
      version: '2.0', //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.Scale'], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['AMap.Scale','...','...']
    })
      .then(AMap => {
        const center = getCenter(data?.data);
        const map = new AMap.Map('map', {
          center,
          zoom: 13,
        }); //"container"为 <div> 容器的 id
        const markerList: any[] = [];
        const circleList: any[] = [];
        data?.data.map(item => {
          const { position } = item;
          const { latitude, longitude } = position as Position;
          const marker = new AMap.Marker({
            position: [longitude, latitude], //位置
          });
          markerList.push(marker);
          //设置圆形位置
          var center = new AMap.LngLat(longitude, latitude);
          //设置圆的半径大小
          var radius = 1000;
          var circle = new AMap.Circle({
            center: center, //圆心
            radius: radius, //半径
            borderWeight: 0, //描边的宽度
            // strokeColor: '#FF33FF', //轮廓线颜色
            // strokeOpacity: 1, //轮廓线透明度
            strokeWeight: 0, //轮廓线宽度
            fillOpacity: 0.4, //圆形填充透明度
            // strokeStyle: 'dashed', //轮廓线样式
            // strokeDasharray: [10, 10],
            fillColor: '#1791fc', //圆形填充颜色
            zIndex: 50, //圆形的叠加顺序
          });
          circleList.push(circle);
        });
        markerList.forEach((marker, idx) => {
          const circle = circleList[idx];
          map.add(marker);
          //圆形 Circle 对象添加到 Map
          map.add(circle);
          //根据覆盖物范围调整视野
          map.setFitView([circle]);
        });
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 300, marginRight: 12 }}>
        <List
          size="small"
          bordered
          dataSource={data?.data}
          renderItem={item => (
            <List.Item>
                <div>地点：{item.target}  {item.name}</div>
                <div>距离：{item.distance}</div>
            </List.Item>
          )}
        />
      </div>
      <div style={{ flex: 1, height: 320 }} id="map"></div>
    </div>
  );
};
export default Area;
