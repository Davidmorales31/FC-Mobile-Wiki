import React from 'react';

function Header(Username, Level){
    return(
        <div className='header-content'>
            <div className='header-left-content'>
                <div>
                    <img className='image-FCMobilewiki'
                    src={require('../images/iconFCMobileWiki.png')}
                    alt='FC Mobile Wiki Icon'
                    />
                </div>
                <div className='user-info-header'>
                    <p> Somos Noobs YT</p> 
                    <p> Level 52 </p> 
                </div>
                <div className='NewsIcon'>
                    <img className='image-FCMobilewiki'
                    src={require('../images/NewsIndex.png')}
                    alt='News FC Mobile' />
                </div>
            </div>
            <div className='header-right-content'>
                
                    <div className='language-selector' id='imageIdiom'>
                        <div className="language">
                        <img id='headerLanguage'src={require('../images/English.png')} alt="Bandera de España"/>
                        <p id="spanLanguae"> English </p>
                        </div>
                    </div>
                
            </div>
        </div>
    );
}

export default Header;