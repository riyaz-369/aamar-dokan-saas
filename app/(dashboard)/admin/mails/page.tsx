import { cookies } from "next/headers";
import { Mail } from "./_components/mail";
import prisma from "@/prisma";
import { MailsType } from "./mails.interface";

export default async function MailPage() {
  const layout = (await cookies()).get("react-resizable-panels:layout:mail");
  const collapsed = (await cookies()).get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  const mails: MailsType[] = await prisma.contactUs.findMany();

  return (
    <>
      <div className="hidden flex-col md:flex">
        <Mail
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
        />
      </div>
    </>
  );
}
