import React from 'react';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import './privacy.scss';


function cookie() {
    return (
        <div className="Privacy Cookie">
            
            <Header Main bs="bs"/>
            <div className='Privacy_Policy'>
                <h5 className='Privacy_Header'>Privacy & Security</h5>

                <p className='Minor_Header Cookie_Header'>Cookie policy</p>

                <p className='Content'>This cookie policy explains how we use cookies and other similar technologies when you use our Service. It also explains how you can control their use. Your continued browsing of the service indicates your
                    consent to our use of cookies.
                    Kapitify Labs is an entity responsible for the use of cookies on the service. If you have any questions, you can contact us at <a href='https://support@kapitify.com'>support@kapitify.com</a>.</p>

                <p className='Minor_Header'>Cookies</p>
                <p className='Content'>A cookie is a small text file which is placed onto your device (e.g. computer, smartphone, or other electronic device) when you visit our service to store a range of information, for example, your language preference, or browser and device you are using to view the website or the app. Those cookies are set by us and called first-party cookies. We also use third-party cookies, which are cookies from a domain different that the domain of our service, for our advertising and marketing efforts.
                    Session cookies expire each time you close your browser and do not remain on your device afterwards. These cookies allow our website to link your actions during a particular browser session.
                    Persistent cookies will remain on your device for a period of time and will expire on a set
                    expiration date, or when you delete them manually from your cache. These cookies are stored on your device in between browser sessions and allow your preferences and actions across our service to be
                    remembered.</p>

                <p className='Minor_Header'>How can you manage your cookies and similar technologies?</p>

                <p className='Sub_Header'>• Browser and device settings</p>
                <p className='Content'>Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for
                    doing so vary from browser to browser, and from version to version. The detailed instructions on how to control your cookies through browser settings can also be found here:
                    <a href="https://www.aboutcookies.org/how-to-control-cookies/">https://www.aboutcookies.org/how-to-control-cookies</a>.
                    Please note that blocking all cookies will have a negative impact upon the usability of many
                    services. If you block cookies, you will not be able to use all the features on our Service.
                    To opt out of data usage by Google Analytics follow instructions
                   <br/> <a href='https://tools.google.com/dlpage/gaoptout'>https://tools.google.com/dlpage/gaoptout.</a>
                    <br/>To reset your device identifier or opt-out of personalized advertising, follow Google instructions or
                    Apple instructions.</p>

                <p className='Sub_Header'>• Opt-out of internet-based advertising</p>
                <p className='Content'>The third-party advertisers, ad agencies and vendors with which we work may be members of
                    the Network Advertising Initiative, the Digital Advertising Alliance Self-Regulatory Program for Online.</p>
                <div className='Content'>
                   <p>
                   Behavioral Advertising, the European Digital Advertising Alliance. To opt-out of interest-based
                    advertising from the participating companies, visit the following links:
                   </p>
                    <p>Network Advertising Initiative – <a href="http://optout.networkadvertising.org/">http://optout.networkadvertising.org/</a></p>
                   <p> Digital Advertising Alliance – <a href="http://optout.aboutads.info/">http://optout.aboutads.info/</a></p>
                    <p>Digital Advertising Alliance (Canada) – <a href="http://youradchoices.ca/choices">http://youradchoices.ca/choices</a></p>
                    <p>Digital Advertising Alliance (EU) – <a href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</a></p>
                    <p>DAA AppChoices page – <a href="http://www.aboutads.info/appchoices">http://www.aboutads.info/appchoices</a></p>
                </div>



                <p className='Minor_Header'> Cookies purposes</p>
                <p className='Content'> Cookies are used by us for the following purposes:</p>
                <ul>
                <li className=' indent'>
                     To speed up the loading of pages.</li>
                <li >
                    To recognize you the next time you visit our service. As a result, the information, which you have
                    earlier entered in certain fields on the service may automatically appear the next time you use
                    our service.
                </li>
                <li > To recognize and count the number of visitors, to know which pages are the most and least
                    popular, and to see how visitors move around our service when they are using it. As a result, we
                    will be able to improve the way our service works, for example, by ensuring that users are
                    finding what they are looking for easily.</li>
                <li >   To make our service and the advertising displayed on it more relevant to your interests.</li>
                <li > To measure advertising performance.  </li>
              
                <li> To prevent fraudulent activity and improve security.</li>
                <li> To personalize the content of the service.</li>
                <li>  To analyze the performance of the service and fix bugs.</li>
                </ul>


            </div>
            <Footer />
        </div>
    )
}
export default cookie