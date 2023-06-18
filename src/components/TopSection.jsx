import React from 'react'
import { useNavigate } from 'react-router'
import './TopSection.css'
const TopSection = () => {

    const navigate = useNavigate()

    function onClickOnViewCollection() {
        navigate("/products")
    }
    return (
        <div>
            <div className='collection'>
                <div style={{ marginTop: '60px' }}>
                    <img
                        src='https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-24-2//w/1920/IMAGE-landscape-default-fill-48cbf8b6-5b24-4620-b212-3a620d493bb3-default_0.jpg?ts=1686757325120'
                        alt='image1' />
                </div>
                <div>
                    <img
                        src='https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-join-life/subhome-xmedia-24//w/1920/IMAGE-landscape-fill-a2628e19-7996-4884-9a5e-2d33ab4bcb45-default_0.jpg?ts=1686664293290'
                        alt='image2' />
                    <button onClick={onClickOnViewCollection} className="border-gradient border-gradient-purple">View All Collections</button></div>
                <div style={{ marginTop: '40px' }}>
                    <img
                        src='https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-knitwear/subhome-xmedia-24-2//w/1920/IMAGE-landscape-default-fill-56c22222-74cf-436b-ae43-48adf9e9d5c2-default_0.jpg?ts=1686817957817'
                        alt='image3' /></div>
            </div>
        </div>
    )
}

export default TopSection