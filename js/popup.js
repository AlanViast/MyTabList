(function(){
  var $bookmarkList = $('.bookmarkList');
  chrome.tabs.query({}, function(tabs){
    console.log(tabs);
    tabs.forEach(function(tab, index){
      //ForEach
      var tabLi = $("<li></li>");
      tab.id
      tabLi.text(tab.title);
      tabLi.data('id', tab.id);
      tabLi.data('tab', tab);
      tabLi.addClass(tab.status);

      tabLi.on('click', function(event) {
        event.preventDefault();
        chrome.tabs.update(tab.id, {selected: true});
      });

      $bookmarkList.append(tabLi);
    });

  });
})();