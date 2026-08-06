import db from "../database/database";

import type {
  InterviewReport,
} from "../types/interview.types";

export const InterviewRepository = {
  saveInterview(
    report: InterviewReport
  ): number {
    const statement = db.prepare(`
      INSERT INTO interviews (
        category,
        difficulty,
        overallScore,
        communication,
        technicalKnowledge,
        domainKnowledge,
        confidence,
        strengths,
        areasForImprovement,
        suggestedAnswer,
        recommendation
      )
      VALUES (
        @category,
        @difficulty,
        @overallScore,
        @communication,
        @technicalKnowledge,
        @domainKnowledge,
        @confidence,
        @strengths,
        @areasForImprovement,
        @suggestedAnswer,
        @recommendation
      )
    `);

    const result = statement.run({
      ...report,
      strengths: JSON.stringify(
        report.strengths
      ),
      areasForImprovement:
        JSON.stringify(
          report.areasForImprovement
        ),
    });

    return Number(
      result.lastInsertRowid
    );
  },

  findAll() {
    const statement = db.prepare(`
      SELECT *
      FROM interviews
      ORDER BY createdAt DESC
    `);

    return statement.all();
  },

  findById(id: number) {
    const statement = db.prepare(`
      SELECT *
      FROM interviews
      WHERE id = ?
    `);

    return statement.get(id);
  },
};