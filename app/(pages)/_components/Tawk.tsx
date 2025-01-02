"use client"
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export  const TawkMessage = () => {
  const tawkRef = useRef(null);

  return (
    <TawkMessengerReact
      propertyId={process.env.NEXT_PUBLIC_TAWK_TO_ID}
      ref={tawkRef}
      widgetId="1igkcl4k3"
    />
  );
};

