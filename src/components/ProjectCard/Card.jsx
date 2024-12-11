import React from 'react'
import './card.css'
import CustomCircularProgress from './CustomCircularProgress'
function Card(item) {
    
    return (
        <div className="project_card">
            <div className="product_img">
                <img src="https://s3-alpha-sig.figma.com/img/2618/79a3/4948b66945cef0bd697df23daca00775?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qRqOqWxUUE1OaAcV6hY-Kh7TvGLjBM6DVw~yBichlVEdgOAmwfhMUKPOQrKkzxMFrLqeliPiI~R1xCfahptIduyC4~NvqQoQm-QcyfNC9D~ot2aF2Vuo88tlQtGT2chGkWXpx~DQ3Yb4Q0Xy0syek7zB92NRAzpbPqg6eKX4gED0ENeyU0tDWNVlBBCdc5eXhZwtxaSe6UnwmxHeHKj-1zXbcDtPh9KIBQ7rFTwVM-OgzOnRJkGt~Bu0WtPH3nZozeaZCNAS5sBgZU5LtBEqfdxtzRCQScHiX4m8XfQe8qnTF2rFVg7-VIUfCbQM2QNfyglLJykn-pdUz9lInt7L1w__" alt="" />
            </div>
            <div className="product_info">
                <div className="product_title">
                    <div className="product_name_id">
                        <h1>{item.data.title}</h1>
                        <span>ID: #{item.data.id}</span>
                    </div>
                    <div className="product_process">
                        <span>{item.data.status}</span>
                    </div>
                </div>
                <div className="product_date_cicle">
                    <div className="product_date">
                        <p>Start Date: <span>{item.data.start_date}</span></p>
                        <p>End Date: <span>{item.data.end_date}</span></p>
                    </div>
                    <div className="product_circle">
                        <CustomCircularProgress value={item.data.current_progress_percentage} primaryColor="#ddd" secondaryColor="#4caf50" />
                        <div className="progress_color">
                            <div>
                                <div className="col_one"></div> <p>Completed</p>
                            </div>
                            <div>
                                <div className="col_two"></div> <p>Remaining</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_view">
                    <a href="">View Summary</a>
                </div>
            </div>
        </div>
    )
}

export default Card
