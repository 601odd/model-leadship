const statusOptions = ['peddingAccept', 'processed', 'completed']
const data = []

for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    type: '发现举报',
    reporter: '张三',
    reportTime: '2024-12-12 12:12:12',
    title: '倒垃圾，乱停车',
    reportBelong: '朝阳街道/牌坊湾社区/锦绣网格',
    status:[statusOptions[Math.floor(Math.random() * 3)]]
  })
}
export default data
