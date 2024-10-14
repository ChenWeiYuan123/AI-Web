import { Button, Table } from '@douyinfe/semi-ui';
export default function Layout() {
  return (
    <div>
        <div >
            <Button>添加</Button>
        </div>
      <Table dataSource={[
        {a: 1, b: 2}
      ]} columns={[
        {
            dataIndex: 'a',
        },
        {
            dataIndex: 'b',
        }
      ]}></Table>
    </div>
  );
}
