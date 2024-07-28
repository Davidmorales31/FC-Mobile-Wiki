import React from 'react';
import ImageIcon from '../components/iconos';

function Menu(){
    return(
    <div className='Menu-Body'>
        <div className='Asides-Content'>
            <ImageIcon 
            src='GuidesEvent.png'
            alt='Guides Event | FC Mobile Wiki'
            text='GUIDES' />

            <ImageIcon 
            src='PlayerReview.png'
            alt='Players Review | FC Mobile Wiki'
            text='REVIEWS' />
            
            <ImageIcon
            src='investments.png'
            alt='investments | FC Mobile Wiki'
            text='INVESMENTS'
            />
        </div>
        <div className='ImageContent'>
        
        </div>
        <div className='NewsContent'></div>
    </div>
    )

}

export default Menu;