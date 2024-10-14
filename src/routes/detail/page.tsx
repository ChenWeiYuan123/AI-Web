import { useEffect, useState } from 'react';
import Area, { useAreaSearch } from './components/Area';
import { Breadcrumb, Divider, Spin, Typography } from '@douyinfe/semi-ui';
import { useModel } from '@modern-js/runtime/model';
import promptModel from '../../models/prompt';
import HouseList, { searchHouse } from './components/HouseList';
import { HouseItem } from './components/HouseList/House';
import { IconHome } from '@douyinfe/semi-icons';

type stepType = 'location' | 'search' | 'analyze' | 'supplement';
const Detail = () => {
  const [state, actions] = useModel(promptModel);
  const { loading: aloading, areaData } = useAreaSearch();
  const [houseData, setHouseData] = useState<HouseItem[]>();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!aloading && areaData?.success) {
      setStep(1);
      (async () => {
        const houseData = await searchHouse();
        setHouseData(houseData);
        setStep(2);
      })();
    }
  }, [areaData, aloading]);
  useEffect(() => {
    if (step === 1) {
    }
  }, [step]);
  return (
    <div>
      <Breadcrumb routes={[{
        path: '/',
        href: '/',
        icon: <IconHome size="small" />
      },'搜索结果']}>
      </Breadcrumb>
      <Typography.Title>{state.prompt}</Typography.Title>
      <Divider margin={12}></Divider>
      {step >= 0 && (
        <div className="fa-center" style={{ marginBottom: 12 }}>
          {aloading && <Spin spinning={aloading}></Spin>}
          <Typography.Title heading={5}>{ aloading ? "区域定位中" : <span>已定位<span style={{color: "#3072f6"}}>2</span>个区域</span>}</Typography.Title>
        </div>
      )}
      {step > 0 && (
        <div style={{ marginBottom: 12 }}>
          <Area data={areaData}></Area>
        </div>
      )}
      {step > 0 && (
        <div className="fa-center" style={{ marginBottom: 12 }}>
          {step === 1 && <Spin spinning={true}></Spin>}
          <Typography.Title heading={5}>{step === 1 ? "房源匹配中" : <span>已为你找到<span style={{color: "#3072f6"}}>20</span>套房源</span>}</Typography.Title>
        </div>
      )}
      {step > 1 && <HouseList></HouseList>}
    </div>
  );
};
export default Detail;
