import {   useState } from 'react';
import { Space, Table, Tag } from 'antd';
import EventForm from './components/form'
import styles from "./event.module.scss"
import MockData from './mock'
const StatusOptions = {
  peddingAccept: {name: '待受理', color: 'volcano'},
  processed: {name: '处理中', color: 'geekblue'},
  completed: {name: '已完成', color: 'green'},
}
const columns = [
  {
    title: '序号',
    render: (_,record,index)=>`${ index + 1 }`,
  },
  {
    title: '事件标题',
    dataIndex: 'title',
    key: 'title',
    render: (text) => {
      return <a>{text}</a>;
    }
  },
  {
    title: '事件类别',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '上报人',
    dataIndex: 'reporter',
    key: 'reporter',
  },

  {
    title: '上报事件',
    dataIndex: 'reportTime',
    key: 'reportTime',
  },
  {
    title: '上报归属',
    dataIndex: 'reportBelong',
    key: 'reportBelong',
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          return (
            <Tag color={StatusOptions[tag].color} key={tag}>
              {StatusOptions[tag].name}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const EventTotal = () =>{
  const [data, setData] = useState(MockData)


  return (
    <div className={styles.page}>
      <EventForm   changeData={setData} />
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
export default EventTotal;

