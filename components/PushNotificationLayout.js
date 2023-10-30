"use client";
import React, { useEffect } from "react";
import { requestPermission, onMessageListener } from "/helper/firebase";

function PushNotificationLayout({ children }) {
  useEffect(() => {
    requestPermission();
    const unsubscribe = onMessageListener().then((payload) => {
      console.log(payload);
    });
    return () => {
      unsubscribe.catch((err) => console.log("faild", err));
    };
  }, []);

  return <>{children}</>;
}

export default PushNotificationLayout;
