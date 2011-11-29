
  task("clean", "Clean up build directories", function() {
    return console.log("cleaning up...");
  });

  task("build", "Build the project files", function() {
    return console.log("building...");
  });

  task("package", "Clean, build, and package the project", function() {
    invoke("clean");
    invoke("build");
    return console.log("packaging...");
  });
