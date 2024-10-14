import { Outlet } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import { Nav, Toast } from '@douyinfe/semi-ui';
import { useNavigate } from '@modern-js/runtime/router';
import logo from '../static/logo.png';
import './index.css';
import { IconFavoriteList, IconHistory, IconHome } from '@douyinfe/semi-icons';

export default function Layout() {
  const navigate = useNavigate()
  const onNavClick = ({itemKey}: any) => {
    if(itemKey === 'index') {
      navigate('/')
    } else {
      Toast.info('暂未上线')
    }
  }
  return (
    <div>
      <div className="container-box">
        <Helmet>
          <link
            rel="icon"
            type="image/x-icon"
            href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
          />
        </Helmet>
        <div className="side">
          <Nav
            style={{ height: '100%', background: '#f8f8f8' }}
            selectedKeys={['index']}
            items={[
              { itemKey: 'index', text: '主页', icon: <IconHome /> },
              { itemKey: 'history', text: '历史会话', icon: <IconHistory /> },
              {
                text: '我的收藏',
                itemKey: 'fav',
                icon: <IconFavoriteList />,
              },
            ]}
            header={{
              logo: (
                <img
                  style={{ width: 24, height: 24, marginBottom: 4 }}
                  src={logo}
                ></img>
              ),
              text: 'LensAI',
            }}
            footer={
              {
                // collapseButton: true,
              }
            }
            onSelect={data => console.log('trigger onSelect: ', data)}
            onClick={onNavClick}
          />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
