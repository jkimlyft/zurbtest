/**
 * Any code used inside this helper is ignored by Handlebars. Use it if your email service provider uses a Handlebars-like syntax.
 * @example
 * {{{{raw}}}}
 * {{ this }} code won't be parsed.
 * {{{{/raw}}}}
 */
module.exports = function(content) {
  return content.fn();
}

var parentSource = $("#parent-template").html(),
    partialSource = $("#partial-template").html(),
    parentTemplate = Handlebars.compile(parentSource),
    partialTemplate = Handlebars.compile(partialSource);

Handlebars.registerPartial({
  partialTemplate: partialSource
});

$('#content').html(parentTemplate);
