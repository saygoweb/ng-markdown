angular.module('sgw.ui.markdown', [])
// Typeahead
.directive('markdown', function() {
	return {
		restrict : 'E',
		link : function(scope, element, attrs) {
			var htmlText = markdown.toHTML(element.text());
			element.html(htmlText);
		}
	};
});
