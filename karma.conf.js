module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ["jasmine", "requirejs"],

    // list of files / patterns to load in the browser
    files: [
      // Load your test-main.js and test files
      "test-main.js",
      { pattern: "src/**/*.spec.ts", watched: false }, // Load TypeScript test files
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.com/browse/keyword/karma-preprocessor
    preprocessors: {
      "**/*.ts": ["typescript"], // Use karma-typescript to compile TypeScript files
    },

    typescriptPreprocessor: {
      // options passed to the typescript compiler
      options: {
        sourceMap: false, // (optional) Generates corresponding .map file.
        noResolve: false, // (optional) Skip resolution and preprocessing.
      },
      // transforming the filenames
      transformPath: function (path) {
        return path.replace(/\.ts$/, ".js");
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.com/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.com/browse/keyword/karma-launcher
    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,
  });
};
