import React, { useEffect, useState, useCallback } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './mob_tab.scss';
import homeIcon from '../../props/icons/Home_gray.svg';
import chatIcon from '../../props/icons/Message_dark.svg';
import orderIcon from '../../props/icons/Heart.svg';
import HomeScreen from '../screens/home_screen/HomeScreen';
import ChatScreen from '../screens/chat_screen/ChatScreen';
import Interest from '../screens/interest_screen/Interest';



function checkId() {
    let id = window.location.search.split("?").pop();
    console.log(id)
    if (id < 3 && id) {
        id = id * 1;
        console.log("yes")
    } else {
        id = 1
    }
    return id
}

function Tabx() {
    const [index, setIndex] = useState(checkId);
    const [footerPop, setFooterPop] = useState(true);
    useEffect(() => {
        const tabe = document.querySelectorAll("img.tabIcons");
        tabe[index].classList.add("active");
    }, [index]);


    const checkActive = (e) => {
        const tab = document.querySelectorAll("img.tabIcons");
        tab.forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    }
    
    
      const [y, setY] = useState(window.scrollY);
    
      const FooterPopUp = useCallback(
        e => {
           
          const window = e.currentTarget;
          if (y > window.scrollY) {
            //console.log("scrolling up");
            setFooterPop(false)
          } else if (y < window.scrollY) {
            //console.log("scrolling down");
            setFooterPop(true)
          }
          else{
            setFooterPop(false)
          }
          setY(window.scrollY);
        }, [y]
      );
    
      useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", FooterPopUp);
        return () => {
          window.removeEventListener("scroll", FooterPopUp);
        };
      }, [FooterPopUp]);
         window.addEventListener("touchstart", () => {
            setFooterPop(false)
        })
    // const FooterPopUp = () => {
    //     if (window.scrollY >= 2) {
    //         setFooterPop(false)
    //     }
    //     else if(window.scrollY >= 0){
    //         setFooterPop(false)
    //     }
    //     else {
    //         setFooterPop(true)
    //     }
    // };
    // window.addEventListener("scroll", FooterPopUp);
    return (


        <div className="Tabx">


            <Tabs defaultIndex={index} onSelect={index => setIndex(index)}>
                    {
                        footerPop ?
                            <TabList  className="hide">
                                    <Tab> <img onClick={checkActive} src={chatIcon} alt="Chats" className="tabIcons" /> </Tab>
                                    <Tab> <img onClick={checkActive} src={homeIcon} alt="Home" className="tabIcons" /></Tab>
                                    <Tab> <img onClick={checkActive} src={orderIcon} alt="Order" className="tabIcons" /></Tab>
                            </TabList>
                            : <TabList>
                            <Tab> <img onClick={checkActive} src={chatIcon} alt="Chats" className="tabIcons" /> </Tab>
                            <Tab> <img onClick={checkActive} src={homeIcon} alt="Home" className="tabIcons" /></Tab>
                            <Tab> <img onClick={checkActive} src={orderIcon} alt="Order" className="tabIcons" /></Tab>
                    </TabList>
                    }

                <TabPanel>
                    <ChatScreen />
                </TabPanel>
                <TabPanel>
                    <HomeScreen />
                </TabPanel>
                <TabPanel>
                    <Interest />
                </TabPanel>

            </Tabs>
        </div>
    )
}
export default Tabx;