import React, { Component } from "react";

export class chat extends Component {
    componentDidMount() {
        window.watsonAssistantChatOptions = {
            integrationID: "c6c67dfb-4c6d-406b-a6d9-763f322eb1d1", // The ID of this integration.
            region: "us-south", // The region your integration is hosted in.
            serviceInstanceID: "d6a6b64b-ef76-48f2-8c9b-50a263eb35c7", // The ID of your service instance.
            onLoad: function(instance) { instance.render(); }
          };
          setTimeout(function(){
            const t=document.createElement('script');
            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
            document.head.appendChild(t);
          });
        
    }

    render() {
        return(
            <div>

            </div>
        );
    }
}

export default chat