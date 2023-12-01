import React from 'react'
import './MyStory.css'
import img from './MyStoryImg.PNG'
import { FaLongArrowAltRight } from "react-icons/fa";


const MyStory = () => {
    return (
        <div className='myStory'>
            <div className='myStry-img-contanier'>
                <img src={img} alt='' />
            </div>
            <div className='myStory-text'>
                <h1>
                    My
                    Story:
                </h1>
                <p>
                    In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.
                </p>
                <p>
                    Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.
                </p>
                <button>
                    Know more <FaLongArrowAltRight />
                </button>
            </div>
        </div>
    )
}

export default MyStory
