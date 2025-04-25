
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, Edit, Plus, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VerbatimFeedback {
  text: string;
  merchantName: string;
  merchantId: string;
  merchantSegment: 'Enterprise' | 'MM+' | 'EB';
  merchantCategory: string;
}

interface FeedbackItem {
  id: string;
  title: string;
  count: number;
  trend: number;
  severity: number;
  verbatim?: VerbatimFeedback[];
  category: string;
  gmvImpact?: number;
  affectedMerchants?: number;
  okrsImpacted?: string[];
}

interface FeedbackDetailPanelProps {
  item: FeedbackItem;
  onClose: () => void;
  onRelatedIssueClick?: (issue: string) => void;
}

const FeedbackDetailPanel: React.FC<FeedbackDetailPanelProps> = ({ 
  item, 
  onClose,
  onRelatedIssueClick 
}) => {
  const [showAllVerbatim, setShowAllVerbatim] = useState(false);
  const { toast } = useToast();
  
  // Mock related issues - in a real app, these would come from the backend
  const relatedIssues = [
    "Payment processing delay",
    "Checkout form validation errors",
    "Abandoned cart issues"
  ];

  const verbatim = item.verbatim || [
    {
      text: "I tried to use Magic Checkout but it got stuck at the final step.",
      merchantName: "TechGear Store",
      merchantId: "TECH001",
      merchantSegment: "Enterprise",
      merchantCategory: "Ecom"
    },
    {
      text: "The checkout experience was frustrating because it kept asking me to re-enter my card details.",
      merchantName: "InsureRight",
      merchantId: "INS023",
      merchantSegment: "MM+",
      merchantCategory: "Insurance"
    },
    {
      text: "We've had several customers complain about this issue in the last week.",
      merchantName: "FashionHub",
      merchantId: "FAS104",
      merchantSegment: "EB",
      merchantCategory: "Ecom"
    }
  ];

  const displayVerbatim = showAllVerbatim ? verbatim : verbatim.slice(0, 3);

  const handleRelatedIssueClick = (issue: string) => {
    if (onRelatedIssueClick) {
      onRelatedIssueClick(issue);
      toast({
        title: "Navigating to related issue",
        description: `Loading details for: ${issue}`,
      });
    }
  };

  return (
    <Card className="animate-in fade-in duration-300">
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
              {displayVerbatim.map((quote, i) => (
                <div key={i} className="bg-muted p-3 rounded-md">
                  <p className="text-sm mb-2">"{quote.text}"</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">{quote.merchantName}</Badge>
                    <Badge variant="outline">ID: {quote.merchantId}</Badge>
                    <Badge variant="outline">{quote.merchantSegment}</Badge>
                    <Badge variant="outline">{quote.merchantCategory}</Badge>
                  </div>
                </div>
              ))}
            </div>
            {verbatim.length > 3 && (
              <Button
                variant="link"
                className="mt-2 p-0"
                onClick={() => setShowAllVerbatim(!showAllVerbatim)}
              >
                {showAllVerbatim ? "Show less" : `Show all (${verbatim.length})`}
              </Button>
            )}
          </div>
          
          <Separator />
          
          <div>
            <h4 className="text-sm font-medium mb-2">Related Issues</h4>
            <div className="flex flex-wrap gap-2">
              {relatedIssues.map((issue, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => handleRelatedIssueClick(issue)}
                >
                  {issue}
                </Badge>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="text-sm font-medium mb-2">Business Impact</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted p-3 rounded-md">
                <p className="text-xs text-muted-foreground">GMV Impact</p>
                <p className="text-lg font-semibold">₹{(item.gmvImpact || 24500).toLocaleString('en-IN')}</p>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-xs text-muted-foreground">Affected Merchants</p>
                <p className="text-lg font-semibold">{(item.affectedMerchants || 1230).toLocaleString()}</p>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-xs text-muted-foreground">OKRs Impacted</p>
                <div className="mt-1">
                  {(item.okrsImpacted || ['Merchant Satisfaction', 'GMV Growth']).map((okr, index) => (
                    <Badge key={index} variant="secondary" className="mr-1 mb-1">
                      {okr}
                    </Badge>
                  ))}
                </div>
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
