// TODO: This file was created by bulk-decaffeinate.
// Check that you're happy with the conversion, then remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const CategoryPageTemplate = require("../../templates/pages/category");
const LayoutPresenter = require("../layout");
const ProjectItemPresenter = require("../project-item");

module.exports = function(application) {

    
  var self = {

    application,
    category: application.category,

    projectElements() {
      return self.category().projects().map(project => ProjectItemPresenter(application, project, self.category()));
    },

    categories() {
      return application.categories();
    },

    name() {
      return self.category().name();
    },

    avatarUrl() {
      return self.category().avatarUrl();
    },

    description() {
      return self.category().description();
    },

    backgroundColor() {
      return self.category().backgroundColor();
    },

    style() {
      return {backgroundColor: self.backgroundColor()};
    },

    hiddenIfCategoryProjectsLoaded() {
      if (application.categoryProjectsLoaded()) { return 'hidden'; }
    }
  };
    
  const content = CategoryPageTemplate(self);
  return LayoutPresenter(application, content);
};

