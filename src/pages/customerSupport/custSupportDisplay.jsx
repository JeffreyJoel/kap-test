import React from 'react';
import Chat from "../../components/customerSupportChat/CustomSupportChat.jsx";

const CustomerSupportDisplay = ({ call, response }) =>{
    return (
        <div>
            <div className='customerSupport_body_call'>
                {call}
            </div>
            
            <div className='customerSupport_body_botResponse' >
                <Chat />
                <div className='customerSupport_body_botResponse_text'>
                    {response}
                </div>
            </div>
            
        </div>
    )
}
export default CustomerSupportDisplay