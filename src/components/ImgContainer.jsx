import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as GooglePlay } from '../assets/googleplay.svg';
import { ReactComponent as AppStore } from '../assets/appstore.svg';
 const ImgContainer = () => {
 
  const { t } = useTranslation();

      return (
          <div className='img-cont'>
            
              <div className='img-titles'>
                <h1>{t('imgtitle.h1')}</h1>
                <h4>{t('imgtitle.h4')}</h4>
                  <div className='btn_container'>
                  <a class="playstore-button" href="#">
                  <GooglePlay />
                    <span class="texts">
                      <span class="text-one">Download on the</span>
                      <span class="text-two">App Store</span>
                    </span>
                  </a>

                  <a class="playstore-button" href="#">
                    <AppStore />
                    <span class="texts">
                      <span class="text-one">GET IT ON</span>
                      <span class="text-two">Google Play</span>
                    </span>
                  </a>
                  </div>
                </div>
            </div>
      );
  };

export default ImgContainer;