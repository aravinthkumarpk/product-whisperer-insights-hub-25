
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp } from "lucide-react";

interface FeedbackItem {
  id: string;
  title: string;
  count: number;
  trend: number;
  severity: number;
  verbatim?: string[];
  category: string;
}

interface TopFeedbackCategoriesProps {
  data: {
    complaints: FeedbackItem[];
    improvements: FeedbackItem[];
    praises: FeedbackItem[];
  };
  onFeedbackItemClick: (item: FeedbackItem) => void;
}

const FeedbackItemRow: React.FC<{
  item: FeedbackItem;
  onClick: (item: FeedbackItem) => void;
}> = ({ item, onClick }) => {
  const severityColor = () => {
    if (item.severity > 8) return "bg-red-500";
    if (item.severity > 6) return "bg-amber-500";
    if (item.severity > 4) return "bg-amber-400";
    if (item.severity > 2) return "bg-emerald-400";
    return "bg-emerald-500";
  };

  return (
    <div 
      className="flex items-center justify-between py-3 px-4 border-b last:border-0 hover:bg-muted/50 cursor-pointer transition-colors"
      onClick={() => onClick(item)}
    >
      <div className="flex items-center gap-3 flex-1">
        <span 
          className={`inline-block w-1.5 h-12 rounded-full ${severityColor()}`}
        />
        <div className="flex-1">
          <p className="font-medium text-sm">{item.title}</p>
          <p className="text-muted-foreground text-xs mt-1">
            {item.count} mentions
          </p>
        </div>
      </div>
      <div className={`flex items-center space-x-1 text-sm font-medium ${
        item.trend > 0 ? "text-red-500" : item.trend < 0 ? "text-emerald-500" : "text-gray-500"
      }`}>
        {item.trend > 0 ? (
          <ArrowUp className="h-3 w-3" />
        ) : item.trend < 0 ? (
          <ArrowDown className="h-3 w-3" />
        ) : null}
        <span>{Math.abs(item.trend)}%</span>
      </div>
    </div>
  );
};

const TopFeedbackCategories: React.FC<TopFeedbackCategoriesProps> = ({
  data,
  onFeedbackItemClick,
}) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Top Feedback Categories</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="complaints" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-2 px-6 pt-1">
            <TabsTrigger value="complaints">
              <Badge variant="destructive" className="mr-1 px-1.5">{data.complaints.length}</Badge>
              Complaints
            </TabsTrigger>
            <TabsTrigger value="improvements">
              <Badge variant="outline" className="mr-1 px-1.5">{data.improvements.length}</Badge>
              Improvements
            </TabsTrigger>
            <TabsTrigger value="praises">
              <Badge variant="default" className="mr-1 px-1.5 bg-emerald-500 hover:bg-emerald-500">{data.praises.length}</Badge>
              Praises
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="complaints" className="max-h-[400px] overflow-y-auto">
            {data.complaints.map((item) => (
              <FeedbackItemRow 
                key={item.id} 
                item={item} 
                onClick={onFeedbackItemClick}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="improvements" className="max-h-[400px] overflow-y-auto">
            {data.improvements.map((item) => (
              <FeedbackItemRow 
                key={item.id} 
                item={item} 
                onClick={onFeedbackItemClick}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="praises" className="max-h-[400px] overflow-y-auto">
            {data.praises.map((item) => (
              <FeedbackItemRow 
                key={item.id} 
                item={item} 
                onClick={onFeedbackItemClick}
              />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TopFeedbackCategories;
