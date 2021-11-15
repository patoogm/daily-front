import React from 'react'
import Image from '../../images/bitcoin.jpg'
import {useParams} from "react-router-dom";
//Component imports
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Noticia = () => {
   const {title,urlToImage,content} = useParams()
    return (
        <div >
            <div>
                <Header />
                <Navbar />
            </div>
            <div className='d-flex flex-row mx-4  '>
                <div className='bg-dark text-white mx-auto col-7 p-3 card '>
                    <div>
                        <h1 className= 'text-center'>{title}</h1>
                    </div>
                    <div>
                        <img src={urlToImage} className='img-fluid w-100 ' />
                    </div>
                    <div>
                        <p>{content}</p>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-around mx-auto col-4 pl-5 card '>
                    <div className='bg-dark text-white p-3'>
                        <p className='h3 text-center'>Noticia 1</p>
                        <div className='text-left'>
                            <img src={Image} className='img-fluid   ' />
                            <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit... </p>
                        </div>
                    </div>
                    <div className='bg-dark text-white p-3'>
                        <p className='h3 text-center'>Noticia 2</p>
                        <div className='text-left'>
                            <img src={Image} className='img-fluid'/>
                            <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit... </p>
                        </div>
                    </div>
                    <div className='bg-dark text-white p-3'>
                        <p className='h3 text-center'>Noticia 3</p>
                        <div className='text-left'>
                            <img src={Image} className='img-fluid   ' />
                            <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit... </p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Noticia
