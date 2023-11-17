// "use client"
import Layout from "@/components/Layout";
import { Card, Col, Row } from "antd";

const Dashboard = () => {
  return(
    <Layout>
      <div className="px-4 py-3 w-full">
        <h1 className="text-xl font-bold ">Dashboard</h1>
        <Row gutter={8} className='pt-4'>
            <Col span={6}>
                <Card size="small">
                    <Row>
                        <Col span={12}>
                            <span className="font-bold text-md">Products</span>
                            <br />
                            <span className='font-bold text-2xl'>1</span>                        
                        </Col>
                        <Col span={6} offset={6} className='items-center justify-center right-0 flex text-3xl'>
                            {/* <FontAwesomeIcon icon={faBoxOpen} className='float-right'/>                         */}
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={6}>
                <Card size="small">
                    <Row>
                        <Col span={12}>
                            <span className="font-bold text-md">Categories</span>
                            <br />
                            <span className='font-bold text-2xl'>1</span>                        
                        </Col>
                        <Col span={6} offset={6} className='items-center justify-center right-0 flex text-3xl'>
                            {/* <FontAwesomeIcon icon={faList} className='float-right'/>                         */}
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={6}>
                <Card size="small">
                    <Row>
                        <Col span={12}>
                            <span className="font-bold text-md">Tags</span>
                            <br />
                            <span className='font-bold text-2xl'>1</span>                        
                        </Col>
                        <Col span={6} offset={6} className='items-center justify-center right-0 flex text-3xl'>
                            {/* <FontAwesomeIcon icon={faTags} className='float-right'/>                         */}
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={6}>
                <Card size="small">
                    <Row>
                        <Col span={12}>
                            <span className="font-bold text-md">Tags</span>
                            <br />
                            <span className='font-bold text-2xl'>1</span>                        
                        </Col>
                        <Col span={6} offset={6} className='items-center justify-center right-0 flex text-3xl'>
                            {/* <FontAwesomeIcon icon={faTags} className='float-right'/>                         */}
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>        
      </div>
    </Layout>
  )
}

export default Dashboard;