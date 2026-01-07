const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  // Passthrough copy - copy public/ contents to root (not to /public/)
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy("src/css");

  // Markdown configuration
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAnchor);
    mdLib.set({ typographer: true }); // Smart quotes, dashes
  });

  // Collections
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagSet = new Set();
    collectionApi.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        if (tag !== "post") tagSet.add(tag);
      });
    });
    return [...tagSet].sort();
  });

  // Create a collection for each tag dynamically
  // This allows using collections[tagName] in templates
  eleventyConfig.addCollection("tagCollections", (collectionApi) => {
    const tagMap = {};
    collectionApi.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        if (tag !== "post") {
          if (!tagMap[tag]) tagMap[tag] = [];
          tagMap[tag].push(item);
        }
      });
    });
    // Sort posts in each tag by date DESC
    Object.keys(tagMap).forEach((tag) => {
      tagMap[tag].sort((a, b) => b.date - a.date);
    });
    return tagMap;
  });

  // Filters
  eleventyConfig.addFilter("readingTime", (content) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  });

  eleventyConfig.addFilter("kebabCase", (str) => {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  });

  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("isoDate", (date) => {
    return new Date(date).toISOString();
  });

  // Head filter for limiting arrays (used in feed)
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array)) return array;
    return n < 0 ? array.slice(n) : array.slice(0, n);
  });

  // Shortcodes for prev/next navigation
  eleventyConfig.addFilter("getPreviousPost", (posts, currentUrl) => {
    const currentIndex = posts.findIndex((post) => post.url === currentUrl);
    return currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  });

  eleventyConfig.addFilter("getNextPost", (posts, currentUrl) => {
    const currentIndex = posts.findIndex((post) => post.url === currentUrl);
    return currentIndex > 0 ? posts[currentIndex - 1] : null;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
