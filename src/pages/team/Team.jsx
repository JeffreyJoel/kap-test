import React from 'react';
import './faq.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Accordion from '../../components/accordion/accordion';


function FAQs() {
    // const [open, setOpen]=useState(0)
      return (
          
          <div className='faq'>
              <div className='bs'>
                  <Header Main/>
              </div>
              <div className='faq_body'>
              <p className='faq_Heading'>Frequently Asked<br/> Questions</p>
          {/* <div className="accordion" >
          {accordionData.map(({ title, content }, idx) => (
          <Accordion title={title} content={content} key={idx} multiple = {multiple} open={open === idx} onToggle={(e)=>
            setOpen((a)=>(a === idx ? "" : idx))
          } />
        ))}
              <div className='g-info'>GENERAL INFORMATION</div>
              {generalInfo.map(({ title, content },  idx) => (
          <Accordion title={title} content={content} key={idx}/>
        ))}
          </div> */}
          <Accordion/>
        </div>
        <Footer/>
        </div>
      );
}
export default FAQs;
