// This is the eleventy configuration file

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/images/");

  const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

  // Returns work items, sorted by display order
  config.addCollection("work", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/work/*.md"));
  });

  // Returns work items, sorted by display order then filtered by featured
  config.addCollection("featuredWork", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/work/*.md")
    ).filter((x) => x.data.featured);
  });

  // Returns a collection of blog posts in reverse date order
  config.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

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

// We've exported a function which returns some settings.
// These settings tell Eleventy to look in the src folder for all of our content,
// templates and other source code, and tell it to use dist as the output fold
