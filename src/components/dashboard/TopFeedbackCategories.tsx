import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FeedbackItem {
  id: string;
  title: string;
  count: number;
  trend: number;
  severity: number;
  verbatim?: string[];
  category: string;
  merchantGMV?: number;
  gmvImpact?: number;
}

interface TopFeedbackCategoriesProps {
  data: {
    complaints: FeedbackItem[];
    improvements: FeedbackItem[];
    praises: FeedbackItem[];
  };
  onFeedbackItemClick: (item: FeedbackItem) => void;
}

const calculateGMVImpact = (item: FeedbackItem): number => {
  const baseGMV = item.merchantGMV || 1000000;
  const severityMultiplier = item.severity / 10;
  const mentionsWeight = Math.log10(item.count + 1);

  return baseGMV * severityMultiplier * mentionsWeight;
};

const sortByGMVImpact = (items: FeedbackItem[]): FeedbackItem[] => {
  return [...items].sort((a, b) => {
    const aImpact = calculateGMVImpact(a);
    const bImpact = calculateGMVImpact(b);
    return bImpact - aImpact;
  });
};

const formatGMVImpact = (value: number): string => {
  if (value >= 1000000) {
    return `₹${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `₹${(value / 1000).toFixed(1)}K`;
  }
  return `₹${value.toFixed(0)}`;
};

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

  const gmvImpact = calculateGMVImpact(item);

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
          <div className="flex items-center gap-2 mt-1">
            <p className="text-muted-foreground text-xs">
              {item.count} mentions
            </p>
            <span className="text-xs text-muted-foreground">•</span>
            <p className="text-muted-foreground text-xs font-medium">
              GMV Impact: {formatGMVImpact(gmvImpact)}
            </p>
          </div>
        </div>
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
  const sortedItems = sortByGMVImpact(items);
  
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
        {sortedItems.map((item) => (
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("all");

  const features = ["all", "payments", "checkout", "onboarding", "shipping", "reporting"];

  const filterItems = (items: FeedbackItem[]) => {
    return items.filter(
      (item) =>
        (selectedFeature === "all" || item.category.toLowerCase() === selectedFeature) &&
        (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.verbatim?.some((text) =>
          text.toLowerCase().includes(searchQuery.toLowerCase())
        ))
    );
  };

  const processedData = {
    complaints: data.complaints.map(item => ({
      ...item,
      gmvImpact: calculateGMVImpact(item)
    })),
    improvements: data.improvements.map(item => ({
      ...item,
      gmvImpact: calculateGMVImpact(item)
    })),
    praises: data.praises.map(item => ({
      ...item,
      gmvImpact: calculateGMVImpact(item)
    }))
  };

  const filteredData = {
    complaints: filterItems(processedData.complaints),
    improvements: filterItems(processedData.improvements),
    praises: filterItems(processedData.praises),
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Top Feedback Categories</h3>
        <div className="flex gap-2 items-center">
          <select
            className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
            value={selectedFeature}
            onChange={(e) => setSelectedFeature(e.target.value)}
          >
            {features.map((feature) => (
              <option key={feature} value={feature}>
                {feature.charAt(0).toUpperCase() + feature.slice(1)}
              </option>
            ))}
          </select>
          <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search insights..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeedbackCategoryCard 
          title="Complaints" 
          items={filteredData.complaints} 
          badgeVariant="destructive"
          onItemClick={onFeedbackItemClick}
        />
        <FeedbackCategoryCard 
          title="Improvements" 
          items={filteredData.improvements} 
          badgeVariant="outline"
          onItemClick={onFeedbackItemClick}
        />
        <FeedbackCategoryCard 
          title="Praises" 
          badgeVariant="default"
          badgeColor="bg-emerald-500 hover:bg-emerald-500"
          items={filteredData.praises} 
          onItemClick={onFeedbackItemClick}
        />
      </div>
    </div>
  );
};

export default TopFeedbackCategories;
