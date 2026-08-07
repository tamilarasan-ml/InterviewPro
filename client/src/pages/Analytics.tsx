import { useEffect } from "react";

import {
  EmptyState,
  PageHeader,
  StatCard,
} from "../components/ui";

import AnalyticsCharts from "../components/analytics/AnalyticsCharts";

import { useAnalyticsStore } from "../store/analytics.store";

const Analytics = () => {
  const {
    analytics,
    loading,
    error,
    fetchAnalytics,
  } = useAnalyticsStore();

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading Analytics...
      </div>
    );
  }

  if (error) {
    return (
      <EmptyState
        title="Unable to load analytics"
        description={error}
        actionLabel="Retry"
        onAction={fetchAnalytics}
      />
    );
  }

  if (!analytics) {
    return (
      <EmptyState
        title="No Analytics Available"
        description="Complete interviews to generate analytics."
      />
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Analytics Dashboard"
        subtitle="Track your interview performance."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

        <StatCard
          title="Interviews"
          value={analytics.summary.totalInterviews}
        />

        <StatCard
          title="Average Score"
          value={`${analytics.summary.averageScore}%`}
        />

        <StatCard
          title="Highest Score"
          value={`${analytics.summary.highestScore}%`}
        />

        <StatCard
          title="Best Category"
          value={analytics.summary.bestCategory}
        />

      </div>

      <AnalyticsCharts
        trendData={analytics.trend}
        categoryData={analytics.categories}
        skillData={analytics.skills}
      />

    </div>
  );
};

export default Analytics;