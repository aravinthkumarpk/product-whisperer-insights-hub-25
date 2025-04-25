
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

interface KeyMetric {
  name: string;
  value: string | number;
  change: number;
  changeLabel: string;
  changeType: "positive" | "negative" | "neutral";
}

interface KeyMetricsPanelProps {
  data: KeyMetric[];
}

const KeyMetricsPanel: React.FC<KeyMetricsPanelProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((metric, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-1.5">
              <p className="text-sm font-medium text-muted-foreground">
                {metric.name}
              </p>
              <div className="flex items-end justify-between">
                <h2 className="text-3xl font-bold">{metric.value}</h2>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  metric.changeType === "positive" 
                    ? "text-emerald-500" 
                    : metric.changeType === "negative" 
                    ? "text-red-500" 
                    : "text-gray-500"
                }`}>
                  {metric.changeType === "positive" ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : metric.changeType === "negative" ? (
                    <ArrowDown className="h-4 w-4" />
                  ) : null}
                  <span>{Math.abs(metric.change)}% {metric.changeLabel}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KeyMetricsPanel;
