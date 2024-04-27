import {   useState } from 'react';
import {  Table, Tag } from 'antd';
import styles from "./volunteer.module.scss"
import MockData from './mock'
const StatusOptions = {
  checkedIn: {name: '已入住', color: 'volcano'},
  noCheckedIn: {name: '未入住', color: 'geekblue'},
}
const columns = [
  {
    title: '序号',
    render: (_,record,index)=>`${ index + 1 }`,
  },
  {
    title: '志愿者名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => {
      return <a>{text}</a>;
    }
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '入住时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '贡献积分',
    dataIndex: 'contributionPoints',
    key: 'contributionPoints',
  },
  {
    title: '消费积分',
    dataIndex: 'consumptionPoints',
    key: 'consumptionPoints',
  },
  {
    title: '活动参加次数',
    dataIndex: 'activitiesNums',
    key: 'activitiesNums',
  }, {
    title: '处置任务数',
    dataIndex: 'disposalNums',
    key: 'disposalNums',
  },
  {
    title: '累积服务时长',
    dataIndex: 'accumulateTime',
    key: 'accumulateTime',
  },

  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <Tag color={StatusOptions[status].color} key={status}>
              {StatusOptions[status].name}
        </Tag>
    ),
  },

];

const EventTotal = () =>{
  const [data, setData] = useState(MockData)


  return (
    <div className={styles.page}>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
export default EventTotal;

