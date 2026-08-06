import { useEffect } from "react";

import {
  Card,
  PageHeader,
} from "../components/ui";

import {
  useAnalyticsStore,
} from "../store/analytics.store";

const Analytics = () => {
  const {
    analytics,
    loading,
    fetchAnalytics,
  } = useAnalyticsStore();

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  if (loading) {
    return (
      <p className="text-center">
        Loading Analytics...
      </p>
    );
  }

  if (!analytics) {
    return (
      <p className="text-center">
        No analytics available.
      </p>
    );
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="Analytics Dashboard"
        subtitle="Track your interview performance."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

        <Card>
          <h3 className="text-slate-500">
            Interviews
          </h3>

          <p className="mt-3 text-4xl font-bold text-cyan-600">
            {analytics.totalInterviews}
          </p>
        </Card>

        <Card>
          <h3 className="text-slate-500">
            Average Score
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-600">
            {analytics.averageScore}%
          </p>
        </Card>

        <Card>
          <h3 className="text-slate-500">
            Highest Score
          </h3>

          <p className="mt-3 text-4xl font-bold text-yellow-600">
            {analytics.highestScore}%
          </p>
        </Card>

        <Card>
          <h3 className="text-slate-500">
            Best Category
          </h3>

          <p className="mt-3 text-xl font-bold">
            {analytics.bestCategory}
          </p>
        </Card>

        <Card>
          <h3 className="text-slate-500">
            Latest Interview
          </h3>

          <p className="mt-3 text-sm">
            {analytics.latestInterview}
          </p>
        </Card>

      </div>

    </div>
  );
};

export default Analytics;