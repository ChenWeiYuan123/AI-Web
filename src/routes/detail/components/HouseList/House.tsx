import { Tag, TagGroup } from '@douyinfe/semi-ui';
import './house.css';
export interface Price {
    min: number;
    max: number;
}
export interface Address {
    full: string;
}
export interface Image {
    src: string;
    name?: string;
}
export interface HouseLayout {
    bedRoom: number;
    livingRoom: number;
    bathRoom: number;
}
export type HouseType = string
export interface HouseItem{
    address: Address;
    price: Price;
    images: Image[];
    type: string;
    district: string;
    time: string;
    tags: string[];
    area: number;
    layout: HouseLayout;
    title: string;
    summary: string;
}
const House = ({data}: {data: HouseItem}) => {
    const { images, title, price,district,layout,type, area, time, tags } = data;
    const {bedRoom, bathRoom, livingRoom} = layout;
    const cover = images?.[0].src;
    return <div style={{display: 'flex', marginBottom: 48, cursor: "pointer"}}>
        <img src={cover} className='house-image'></img>
        <div style={{flex: 1, padding: '12px 24px'}}>
            <div style={{display: 'flex'}}>
                <div className='house-title'>{title}</div>
                <div className='house-price'>{price.min}/月</div>
            </div>
            <div className='house-summary'>{title}</div>
            <div className='house-desc'>
                <div>{district}</div>
                <div className='house-slash'>/</div>
                <div>{type}</div>
                <div className='house-slash'>/</div>
                <div>{bedRoom}室{livingRoom}厅{bathRoom}卫</div>
                <div className='house-slash'>/</div>
                <div>{area}m2</div>
                <div>
                    {tags.map(tag => <Tag color='grey' style={{marginLeft: 12}}><span style={{color: '#849aae'}}>{tag}</span></Tag>)}
                </div>
            </div>
            <div className='house-time'>{time}</div>
        </div>
    </div>
}
export default House;
