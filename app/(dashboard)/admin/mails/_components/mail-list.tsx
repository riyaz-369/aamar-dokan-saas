/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMail } from "../use-mail";
import { useSearchParams } from "next/navigation";
import { MailsType } from "../mails.interface";
import { UpdateMailStatusIntoDB } from "../_action";
import { CheckCheck } from "lucide-react";
import { ContactMessageStatus } from "@prisma/client";

interface MailListProps {
  items: MailsType[];
}

export function MailList({ items }: MailListProps) {
  const [mail, setMail] = useMail();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const matched = items.filter((item) => item.id === id);
    setMail({
      ...matched,
      selected: id,
    });
  }, [id]);

  const handleUpdateMailStatus = async (
    status: ContactMessageStatus,
    id: string
  ) => {
    console.log(status);
    const updatedStatus = await UpdateMailStatusIntoDB(status, id);
    console.log(updatedStatus);
  };

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 pr-4 pt-0">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              mail.selected === item.id && "bg-muted"
            )}
            onClick={() => {
              handleUpdateMailStatus("Read", item.id);
              setMail({
                ...mail,
                selected: item.id,
              });
            }}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {item.status === "Read" && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    mail.selected === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item.createdAt), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <p className="text-xs font-medium text-start">{item.subject}</p>
              <p className="line-clamp-2 text-xs text-start text-muted-foreground">
                {item.message.substring(0, 300)}
              </p>
            </div>
            <Badge
              className="cursor-pointer"
              variant={item.status === "Read" ? "outline" : "destructive"}
            >
              {item.status}{" "}
              {item.status === "Read" && (
                <CheckCheck size={16} className="ml-1" />
              )}{" "}
            </Badge>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
