import { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import MockData from '../mock'

const App = ({ changeData }) => {
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState("all")

  const onRadioChange = (e) => {
    const value = e.target.value
    setRadioValue(value)
    const filterData = value === 'all' ? MockData :MockData.filter(item => item.status.includes(e.target.value))
    changeData(filterData)
  }

  const handleClick = () => {
    const {title,reporter} = form.getFieldsValue()
    if(title === '' && reporter === '') return changeData(MockData)

    const filterData = MockData.filter(item => {
      const titleRegex = new RegExp(title, 'i');
      const reporterRegex = new RegExp(reporter, 'i');
      return (title && titleRegex.test(item.title)) || (reporter && reporterRegex.test(item.reporter));
    });
    console.log(filterData);
    changeData(filterData);
  }
  return (
    <Form
      layout='Horizontal'
      form={form}
      style={{ padding: "20px",display: "flex", justifyContent:'space-around'}}
    >
      <div><Form.Item >
        <Radio.Group value={radioValue}  onChange={onRadioChange} defaultValue='all' optionType="button"  buttonStyle="solid">
        <Radio.Button value="all">全部</Radio.Button>
          <Radio.Button value="peddingAccept">待受理</Radio.Button>
          <Radio.Button value="processed">处理中</Radio.Button>
          <Radio.Button value="completed">已完成</Radio.Button>
        </Radio.Group>
      </Form.Item></div>
      <div  style={{  display: "flex", gap:'20px'}}>
        <Form.Item label="事件标题" name='title'>
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="上报人" name='reporter'>
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item  >
        <Button type="primary" onClick={handleClick}>搜索</Button>
      </Form.Item></div>
    </Form>
  );
};
export default App;
