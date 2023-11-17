import { Card, Col } from "antd";

const AppCard = ({data}) => {
  return(
    <Col span={6} className="gutter-row mb-2">
      <Card
        size="small"
        className="w-[230px]"
        cover={<img src={data ? data : 'https://smartauladi.sch.id/wp-content/uploads/no-image.jpg'} style={{borderRadius: 0}}/>}
        bordered={false}
        hoverable
        style={{borderRadius: 0}}
      >
        <span className="font-bold text-lg py-2">{data ? data : 'Product Name'}</span><br />
        <span>Rp. </span>
      </Card>
    </Col>
  )
}

export default AppCard;