import { api } from "./api";

export interface ResumeAnalysis {
  atsScore: number;
  resumeScore: number;

  strengths: string[];

  missingSkills: string[];

  suggestions: string[];

  summary: string;
}

export const ResumeService = {
  async analyzeResume(
    file: File
  ): Promise<ResumeAnalysis> {
    const formData = new FormData();

    formData.append("resume", file);

    const response = await api.post(
      "/resume/analyze",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    return response.data;
  },
};