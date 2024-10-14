import { Button, List, Tag, TextArea, Typography } from '@douyinfe/semi-ui';
import logo from '../../static/logo.png';
import { IconSearch } from '@douyinfe/semi-icons';
import { useNavigate } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import promptModel from '../../models/prompt';
import { useState } from 'react';

const defalutPrompt = '输入住房需求';
const suggestion = [
  '2号线沿线地铁站附近的房子，我在深圳湾科技中心上班，需要离上班近，最好是整租公寓，价格4k内',
  '在南山找一个环境好的小区，整租一室一厅，位置可以偏，价格3k内，周边配套比较丰富，有健身房和商场',
];

const MainSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [state, actions] = useModel(promptModel);
  const onSearch = () => {
    actions.set(query);
    navigate('/detail');
  }

  return (
    <div >
      <div style={{ marginBottom: 48 }} className='flex-column'>
        <div>
          <img style={{width: 80, height: 80}} src={logo}></img>
        </div>
        <Typography.Title heading={3}>
        LensAI智能搜房
        </Typography.Title>
        <Typography.Text type="tertiary">中介般专业，零套路服务</Typography.Text>
      </div>
      <div>
        <TextArea onChange={(v) => setQuery(v)} placeholder={defalutPrompt}></TextArea>
        <div className='between' style={{marginTop: 12}}>
            <Button type="tertiary">偏好设置</Button>
            <Button onClick={onSearch} theme='solid' type="primary" icon={<IconSearch></IconSearch>}>搜索</Button>
        </div>
        <div style={{ marginTop: 24 }}>
          <Typography.Text type="tertiary">可以这样表达：</Typography.Text>
          {suggestion.map(s => (
            <div style={{ margin: '8px 0px' }}>
              <Tag size="large">
                <Typography.Text type="tertiary">{s}</Typography.Text>
                </Tag>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainSearch;
