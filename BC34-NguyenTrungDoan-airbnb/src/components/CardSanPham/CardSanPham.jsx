import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export default function CardSanPham(props) {
  return (
    <div className='mt-5 container flex justify-evenly'>
        <Card
    hoverable
    style={{
      width: 340,
    }}
    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg" />}
  >
    <Meta title="Toàn bộ nhà" description="www.airbnb.com" />
  </Card>

  <Card
    hoverable
    style={{
      width: 340,
    }}
    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_960_720.jpg" />}
  >
    <Meta title="Chỗ ở độc đáo" description="www.airbnb.com" />
  </Card>

  <Card
    hoverable
    style={{
      width: 340,
    }}
    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2020/02/01/22/10/house-4811590_960_720.jpg" />}
  >
    <Meta title="Trang trại và thiên nhiên" description="www.airbnb.com" />
  </Card>

  <Card
    hoverable
    style={{
      width: 340,
    }}
    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2017/04/02/11/11/cat-2195538_960_720.jpg" />}
  >
    <Meta title="Cho phép mang theo thú cưng" description="www.airbnb.com" />
  </Card>
    </div>
  )
}
