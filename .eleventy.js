// This is the eleventy configuration file

module.exports = (config) => {
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

// We've exported a function (opens new window)which returns some settings.
// These settings tell Eleventy to look in the src folder for all of our content,
// templates and other source code, and tell it to use dist as the output fold
