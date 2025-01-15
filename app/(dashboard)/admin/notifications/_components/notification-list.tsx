/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNotification } from "../use-notification";
import { useSearchParams } from "next/navigation";
import { CheckCheck } from "lucide-react";
import { NotificationDataTypes } from "@/lib/action.notification";

interface MailListProps {
  items: NotificationDataTypes[];
  setShowForm: (setShow: boolean) => void;
}

export function MailList({ items, setShowForm }: MailListProps) {
  const [mail, setMail] = useNotification();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const matched = items.filter((item) => item.id === id);
    setMail({
      ...matched,
      selected: id,
    });
  }, [id]);

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
              setMail({
                ...mail,
                selected: item?.id as string,
              });
              setShowForm(false);
            }}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.title}</div>
                  {item.notificationStatus === "Read" && (
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
                  {item.createdAt &&
                    formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                    })}
                </div>
              </div>
              <p className="line-clamp-2 text-xs text-start text-muted-foreground">
                {item.message.substring(0, 300)}
              </p>
            </div>
            <Badge
              className="cursor-pointer"
              variant={
                item.notificationStatus === "Read" ? "outline" : "destructive"
              }
            >
              {item.notificationStatus}
              {item.notificationStatus === "Read" && (
                <CheckCheck size={16} className="ml-1" />
              )}{" "}
            </Badge>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
