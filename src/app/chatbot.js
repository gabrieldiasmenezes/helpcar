// components/WatsonChatbot.js
import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "d9e8d383-5b1f-4852-8cd9-d04a58c9fb25", // O ID da integração
      region: "us-south", // A região onde sua integração está hospedada
      serviceInstanceID: "101833fd-0f14-4141-b131-7bf1dfb686d5", // O ID da sua instância de serviço
      onLoad: async (instance) => { await instance.render(); }
    };

    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);
  }, []);

  return null; // Este componente não precisa renderizar nada
};

export default ChatBot;