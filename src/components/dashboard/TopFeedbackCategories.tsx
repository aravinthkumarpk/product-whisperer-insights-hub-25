
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const FeedbackCategoryCard: React.FC<{
  title: string;
  items: FeedbackItem[];
  badgeVariant: "destructive" | "outline" | "default";
  badgeColor?: string;
  onItemClick: (item: FeedbackItem) => void;
}> = ({ title, items, badgeVariant, badgeColor, onItemClick }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-md font-medium flex items-center">
          <Badge 
            variant={badgeVariant} 
            className={`mr-2 px-1.5 ${badgeColor || ""}`}
          >
            {items.length}
          </Badge>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 max-h-[350px] overflow-y-auto">
        {items.map((item) => (
          <FeedbackItemRow 
            key={item.id} 
            item={item} 
            onClick={onItemClick}
          />
        ))}
      </CardContent>
    </Card>
  );
};

const TopFeedbackCategories: React.FC<TopFeedbackCategoriesProps> = ({
  data,
  onFeedbackItemClick,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Top Feedback Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeedbackCategoryCard 
          title="Complaints" 
          items={data.complaints} 
          badgeVariant="destructive"
          onItemClick={onFeedbackItemClick}
        />
        <FeedbackCategoryCard 
          title="Improvements" 
          items={data.improvements} 
          badgeVariant="outline"
          onItemClick={onFeedbackItemClick}
        />
        <FeedbackCategoryCard 
          title="Praises" 
          badgeVariant="default"
          badgeColor="bg-emerald-500 hover:bg-emerald-500"
          items={data.praises} 
          onItemClick={onFeedbackItemClick}
        />
      </div>
    </div>
  );
};

export default TopFeedbackCategories;
