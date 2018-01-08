var data = [{
  name: 'Test',
  texts: [
    'der getestet wird',
    'der weiterhin getestet wird'
  ]
}];

extendText();



// extend text content with extension sentences
function extendText() {
  findTextNodes(document.body).forEach(function (node) {
    data.forEach(function (date) {
      var parts = node.textContent.split(date.name);
      for (var i = 1; i < parts.length; i++) {
        parts.splice(i, 0, date.name + ', ' + date.texts[Math.floor(date.texts.length * Math.random())]);
      }
      node.textContent = parts.join('')
    });
  });
}


// via http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page#answer-10730777
function findTextNodes(el) {
  var node;
  var textNodes = [];
  var walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while (node = walk.nextNode()) {
    textNodes.push(node);
  }
  return textNodes;
}
