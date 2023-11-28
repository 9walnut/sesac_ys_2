Applicants.findAll({
  attributes: [
    [sequelize.fn("COUNT", sequelize.col("*")), "TotalApplicants"],
    [sequelize.fn("SUM", sequelize.col("Score")), "TotalScore"],
  ],
  raw: true,
})
  .then((result) => {
    const { TotalApplicants, TotalScore } = result[0];
    return Applicants.findAll({
      attributes: [[sequelize.fn("MAX", sequelize.col("Score")), "MaxScore"]],
      raw: true,
    }).then((maxScoreResult) => {
      const MaxScore = maxScoreResult[0].MaxScore;

      return Applicants.findAll({
        attributes: [
          [sequelize.fn("AVG", sequelize.col("Score")), "AverageScore"],
        ],
        raw: true,
      }).then((averageScoreResult) => {
        const AverageScore = averageScoreResult[0].AverageScore;

        // "ResultSummary" 테이블에 데이터 삽입
        return ResultSummary.create({
          TotalApplicants,
          TotalScore,
          MaxScore,
          AverageScore,
        });
      });
    });
  })
  .then(() => {
    console.log("Data inserted into ResultSummary table.");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });
