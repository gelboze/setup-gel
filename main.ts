import * as core from "@actions/core";

async function run() {
  try {
    const input = core.getInput("exampleInput");
    core.info(`Input received: ${input}`);
    core.setOutput("exampleOutput", `Hello, ${input}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
