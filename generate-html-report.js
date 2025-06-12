const fs = require('fs');
const path = require('path');
const reporter = require('cucumber-html-reporter');

const jsonFilePath = path.join(__dirname, 'reports', 'cucumber.json');
const htmlReportPath = path.join(__dirname, 'reports', 'cucumber_report.html');

// Check if the JSON file exists and is not empty
if (!fs.existsSync(jsonFilePath)) {
  console.error('❌ Error: cucumber.json file not found. Please ensure tests ran successfully and generated the report.');
  process.exit(1);
}

const fileContent = fs.readFileSync(jsonFilePath, 'utf-8');
if (!fileContent || fileContent.trim().length === 0) {
  console.error('❌ Error: cucumber.json file is empty. No test results to generate report.');
  process.exit(1);
}

try {
  JSON.parse(fileContent); // Validate JSON format
} catch (err) {
  console.error('❌ Error: Invalid JSON format in cucumber.json. Cannot generate report.');
  console.error(err.message);
  process.exit(1);
}

const options = {
  theme: 'bootstrap',
  jsonFile: jsonFilePath,
  output: htmlReportPath,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGE",
    "Browser": "Chrome",
    "Platform": "Windows 10"
  }
};

reporter.generate(options);
console.log('✅ HTML report generated successfully at:', htmlReportPath);
