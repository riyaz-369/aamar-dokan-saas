"use client"
import React, { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const TawkMessage: React.FC = () => {
  const tawkRef = useRef(null);

  const handleBeforeLoad = () => {
    console.log('TawkMessengerReact is about to load');
  };

  const handleStatusChange = (status: string) => {
    console.log('TawkMessengerReact status:', status);
  };
  const handleChatMinimized = () => {
    console.log('TawkMessengerReact chat minimized');
  };
  const handleChatStarted = () => {
    console.log('TawkMessengerReact chat started');
  };

  const handleLoad = () => {
    console.log('TawkMessengerReact loaded');
  };
  return (
    <TawkMessengerReact
      propertyId={process.env.NEXT_PUBLIC_TAWK_TO_ID}
      ref={tawkRef}
      widgetId="1igkcl4k3"
      onBeforeLoad={handleBeforeLoad}
      onStatusChange={handleStatusChange}
      onChatMinimized={handleChatMinimized}
      onChatStarted={handleChatStarted}
      onLoad={handleLoad}
    />
  );
};

export default TawkMessage;

