import React from 'react';
import './faq.scss';
import Header from '../../components/header/Header';
//import Footer from '../../components/footer/Footer';
import FooterTag from '../../components/footerTag/FooterTag';
import Accordion from '../../components/accordion/accordion';


function FAQs() {
      return (
          
          <div className='faq'>
              {/* <div className='bs'> */}
                  <Header />
              {/* </div> */}
              <div className='faq_body'>
              <p className='faq_Heading'>Frequently Asked Questions</p>
          <Accordion/>
        </div>
        <FooterTag/>
        </div>
      );
}
export default FAQs;
