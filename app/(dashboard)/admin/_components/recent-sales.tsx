import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecentSales() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8 mt-4">
          {[1, 2, 3, 4, 5].map((_) => (
            <div key={_} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-sm text-muted-foreground">
                  olivia.martin@email.com
                </p>
              </div>
              <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
