import * as fs from "fs";
import path from "path";
import Reporter from "@wdio/reporter";

class CustomReporter extends Reporter {
    failedScenarios: any = [];
    constructor(options) {
        super(options);
        this.failedScenarios = [];
    }

    onTestFail(test) {
        const currentSuite = this.currentSuites.find(suite => suite.type == 'scenario');

        if (!this.failedScenarios.includes(currentSuite?.title)) {
            this.failedScenarios.push(currentSuite?.title);
        }
    }

    onRunnerEnd(runnerStats) {
        const failedFeaturePath = this.options.filePath ?? "./rerun/failedFeatures.txt";
        const filePath = path.resolve(failedFeaturePath);

        // Read the existing failed scenarios from the file
        let existingFailedScenarios: any = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            existingFailedScenarios = fileContent.trim().split("\n");
        }

        // Combine the existing and newly failed scenarios
        const updatedFailedScenarios = [
            ...existingFailedScenarios,
            ...this.failedScenarios,
        ];

        // Remove duplicates and empty lines
        const uniqueFailedScenarios = Array.from(
            new Set(updatedFailedScenarios)
        ).filter((scenario) => scenario.trim() !== "");

        // Update the feature file with the @failed tag for each failed scenario
        const updatedFeatureContent = uniqueFailedScenarios
            .map((scenario) => `${scenario}`)
            .join("\n");

        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedFeatureContent);
    }
}

export default CustomReporter;
