"use client";

import { useEffect, useState } from "react";
import { GetContactUsDataFromDB } from "./_action";
import { MailsType } from "./mails.interface";

const useContactData = () => {
  const [contactData, setContactData] = useState<MailsType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const contact = await GetContactUsDataFromDB();
      setContactData(contact);
    };
    getData();
  }, []);

  if (contactData.length > 0) {
    return contactData;
  }
  return [];
};

export default useContactData;
