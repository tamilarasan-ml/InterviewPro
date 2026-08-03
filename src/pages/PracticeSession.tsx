import { PageHeader } from "../components/ui";

const PracticeSession = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Practice Session"
        subtitle="Answer interview questions one by one."
      />

      <div className="rounded-xl bg-white p-8 shadow-md">
        <h2 className="text-2xl font-semibold">
          Question 1
        </h2>

        <p className="mt-4 text-gray-600">
          Your interview questions will appear here.
        </p>
      </div>
    </div>
  );
};

export default PracticeSession;