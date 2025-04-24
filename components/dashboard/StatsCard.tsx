import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const StatsCard = ({ icon, title, children }: StatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-3xl font-semibold">{title}</CardTitle>
        {icon}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
};
