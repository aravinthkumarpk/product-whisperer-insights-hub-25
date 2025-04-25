
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, Edit, Plus, Share2 } from "lucide-react";

interface FeedbackItem {
  id: string;
  title: string;
  count: number;
  trend: number;
  severity: number;
  verbatim?: string[];
  category: string;
}

interface FeedbackDetailPanelProps {
  item: FeedbackItem;
  onClose: () => void;
}

const FeedbackDetailPanel: React.FC<FeedbackDetailPanelProps> = ({ item, onClose }) => {
  // Mock related issues
  const relatedIssues = [
    "Payment processing delay",
    "Checkout form validation errors",
    "Abandoned cart issues"
  ];

  // Mock verbatim examples if not provided
  const verbatim = item.verbatim || [
    "I tried to use Magic Checkout but it got stuck at the final step.",
    "The checkout experience was frustrating because it kept asking me to re-enter my card details.",
    "We've had several customers complain about this issue in the last week."
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="mr-2 h-8 w-8 p-0" onClick={onClose}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <CardDescription>
              {item.category} • {item.count} mentions • Severity: {item.severity}/10
            </CardDescription>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" size="sm" className="h-8">
            <Edit className="mr-2 h-3 w-3" />
            Edit
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <Plus className="mr-2 h-3 w-3" />
            Add to filter
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <Share2 className="mr-2 h-3 w-3" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <Download className="mr-2 h-3 w-3" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Verbatim Examples</h4>
            <div className="space-y-3">
              {verbatim.map((quote, i) => (
                <div key={i} className="bg-muted p-3 rounded-md text-sm">
                  "{quote}"
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="text-sm font-medium mb-2">Related Issues</h4>
            <div className="flex flex-wrap gap-2">
              {relatedIssues.map((issue, i) => (
                <Badge key={i} variant="outline" className="cursor-pointer">
                  {issue}
                </Badge>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="text-sm font-medium mb-2">Estimated Impact</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-3 rounded-md">
                <p className="text-xs text-muted-foreground">Revenue Impact</p>
                <p className="text-lg font-semibold">-$24,500</p>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-xs text-muted-foreground">Affected Users</p>
                <p className="text-lg font-semibold">~1,230</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t pt-4">
        <Button onClick={onClose}>Close</Button>
      </CardFooter>
    </Card>
  );
};

export default FeedbackDetailPanel;
