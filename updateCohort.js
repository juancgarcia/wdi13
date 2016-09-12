var cohorter = require("cohorter")

var prompt = require("prompt")

console.log("What is the new cohort number?")
prompt.start()
prompt.get(['cohortNum'], function (err, result) {
  console.log('  Cohort Number: ' + result.cohortNum);
  cohorter.newCohort(result.cohortNum)
});
