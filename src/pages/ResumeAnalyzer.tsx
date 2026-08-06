import { useState } from "react";

import {
  PageHeader,
  Card,
  Button,
  Badge,
} from "../components/ui";

import { useResumeStore } from "../store/resume.store";

const ResumeAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);

  const {
    analysis,
    loading,
    analyzeResume,
  } = useResumeStore();

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    await analyzeResume(file);
  };

  return (
    <div className="space-y-8">

      <PageHeader
        title="Resume Analyzer"
        subtitle="Upload your resume and receive AI-powered feedback."
      />

      <Card>

        <div className="space-y-6">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(
                e.target.files?.[0] ?? null
              )
            }
          />

          <Button
            variant="primary"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading
              ? "Analyzing..."
              : "Analyze Resume"}
          </Button>

        </div>

      </Card>

      {analysis && (
        <>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <Card>

              <h3 className="text-slate-500">
                ATS Score
              </h3>

              <p className="mt-3 text-5xl font-bold text-cyan-600">
                {analysis.atsScore}%
              </p>

            </Card>

            <Card>

              <h3 className="text-slate-500">
                Resume Score
              </h3>

              <p className="mt-3 text-5xl font-bold text-green-600">
                {analysis.resumeScore}%
              </p>

            </Card>

          </div>

          <Card>

            <h2 className="mb-4 text-xl font-semibold">
              Strengths
            </h2>

            <div className="flex flex-wrap gap-3">

              {analysis.strengths.map(
                (item) => (
                  <Badge
                    key={item}
                    variant="primary"
                  >
                    {item}
                  </Badge>
                )
              )}

            </div>

          </Card>

          <Card>

            <h2 className="mb-4 text-xl font-semibold">
              Missing Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {analysis.missingSkills.map(
                (item) => (
                  <Badge
                    key={item}
                    variant="warning"
                  >
                    {item}
                  </Badge>
                )
              )}

            </div>

          </Card>

          <Card>

            <h2 className="mb-4 text-xl font-semibold">
              Suggestions
            </h2>

            <ul className="list-disc pl-6 space-y-2">

              {analysis.suggestions.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}

            </ul>

          </Card>

          <Card>

            <h2 className="mb-4 text-xl font-semibold">
              AI Summary
            </h2>

            <p className="leading-8 text-slate-700">
              {analysis.summary}
            </p>

          </Card>

        </>
      )}

    </div>
  );
};

export default ResumeAnalyzer;