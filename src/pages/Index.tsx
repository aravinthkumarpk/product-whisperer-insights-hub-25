import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import KeyMetricsPanel from "@/components/dashboard/KeyMetricsPanel";
import FeedbackSourcesBreakdown from "@/components/dashboard/FeedbackSourcesBreakdown";
import TopFeedbackCategories from "@/components/dashboard/TopFeedbackCategories";
import TrendChart from "@/components/dashboard/TrendChart";
import FeedbackDetailPanel from "@/components/dashboard/FeedbackDetailPanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Download } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import mockData from "@/data/mockData";

const Index = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30D");
  const [selectedFeedbackItem, setSelectedFeedbackItem] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const handleFeedbackItemClick = (item) => {
    setSelectedFeedbackItem(item);
    setActiveTab("detail");
  };

  const handleCloseDetail = () => {
    setSelectedFeedbackItem(null);
    setActiveTab("overview");
  };

  return (
    <DashboardLayout>
      <div className="px-6 py-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">MerchantSays Dashboard</h1>
            <p className="text-muted-foreground">
              Voice of merchant analytics and insights
            </p>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-9 gap-1">
                  <Calendar className="h-4 w-4" />
                  {selectedTimeRange}
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSelectedTimeRange("7D")}>
                  Last 7 days
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTimeRange("14D")}>
                  Last 14 days
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTimeRange("30D")}>
                  Last 30 days
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTimeRange("3M")}>
                  Last 3 months
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTimeRange("6M")}>
                  Last 6 months
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="h-9" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="detail">Feedback Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <KeyMetricsPanel data={mockData.keyMetrics} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Sentiment Trend</h3>
                  <TrendChart data={mockData.sentimentTrend} />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Feedback Sources</h3>
                  <FeedbackSourcesBreakdown data={mockData.feedbackSources} />
                </CardContent>
              </Card>
            </div>

            <TopFeedbackCategories 
              data={mockData.topFeedbackCategories}
              onFeedbackItemClick={handleFeedbackItemClick}
            />
          </TabsContent>
          
          <TabsContent value="detail">
            {selectedFeedbackItem ? (
              <FeedbackDetailPanel 
                item={selectedFeedbackItem} 
                onClose={handleCloseDetail}
              />
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">Select a feedback item to view details</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab("overview")} 
                    className="mt-4"
                  >
                    Go back to overview
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Index;
