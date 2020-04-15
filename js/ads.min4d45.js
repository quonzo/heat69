'use strict';

(function(w, d) {
  w.adthrive = w.adthrive || {};
  w.adthrive.cmd = w.adthrive.cmd || [];
  w.adthrive.host = w.adthrive.host || 'ads.adthrive.com';
  w.adthrive.threshold = w.adthrive.threshold || '';

  w.adthrive.siteAds = {"siteId":"565e30c34856897050c5e05a","siteName":"Gentlemans Gazette","targeting":[{"key":"siteId","value":"565e30c34856897050c5e05a"},{"key":"siteName","value":"Gentlemans Gazette"},{"key":"service","value":"AdThrive Edge"},{"key":"bidding","value":"on"},{"key":"dynamicVersion","value":""},{"key":"verticals","value":["Mens Style and Grooming"]}],"adOptions":{"thirtyThreeAcross":true,"appNexus":true,"brightroll":true,"criteo":true,"districtM":true,"mediaGrid":true,"openx":true,"padsquad":true,"pubMatic":true,"rubicon":true,"rubiconMediaMath":true,"sonobi":true,"sovrn":true,"teads":true,"tripleLift":true,"undertone":true,"unruly":true,"theTradeDesk":true,"inImage":false,"inImageAdsZone":null,"verticals":["Mens Style and Grooming"],"indexExchange":true,"amazonUAM":true,"comscoreFooter":false,"comscoreTAL":true,"comscore":"Lifestyle","footerSelector":"","pmp":true,"allowSmallerAdSizes":true,"delayLoading":false,"gamMCMEnabled":false,"gamMCMChildNetworkCode":"","infiniteScroll":false,"infiniteScrollRefresh":true,"sensitiveCategories":["alc"]},"adTypes":{"animatedFooter":true,"expandableFooter":true,"interscroller":true,"miniscroller":true,"nativeMobileContent":true,"nativeDesktopContent":true,"nativeDesktopSidebar":true,"outstreamDesktop":true,"outstreamMobile":true,"nativeMobileRecipe":true,"nativeDesktopRecipe":true},"video":{"jwPlayerId":"efRlvJXn","jwCollapsiblePlayerId":"0JSKHnMr","jwPlaylistId":"ooLMj4pe","partners":{"appNexus":true,"indexExchange":true,"openx":true,"pubMatic":true,"rubicon":true,"spotx":true,"telaria":true},"contextual":{"autoplayCollapsibleEnabled":false,"defaultPlayerType":"static","overrideEmbedLocation":false},"collapsible":{"title":"HAVE YOU WATCHED THIS VIDEO YET?","topMargin":null,"sidebarSelector":".sidebar, .flex_column.av_one_fourth","footerSelector":"","desktopLocation":"top","mobileSize":"medium","shuffle":true,"experiment":false},"contextualAutoplayCollapsibleDesktop":{"pageSelector":"","elementSelector":"","position":"afterend","skip":0},"contextualAutoplayCollapsibleMobile":{"pageSelector":"","elementSelector":"","position":"afterend","skip":0},"autoplayPlaylistCollapsibleDesktop":{"enabled":false,"pageSelector":"body.single, body.page:not(.home)","elementSelector":".entry-content > p, .entry-content-wrapper p","position":"afterend","skip":3,"classNames":[],"sticky":true,"float":false},"autoplayPlaylistCollapsibleMobile":{"enabled":false,"pageSelector":"body.single, body.page:not(.home)","elementSelector":".entry-content > p, .entry-content-wrapper p","position":"afterend","skip":4,"classNames":[],"experiment":false},"sekindoDesktopPlaylist":{"enabled":false,"title":"","pageSelector":"","elementSelector":"","position":"afterend","skip":0,"classNames":[]},"sekindoMobilePlaylist":{"enabled":false,"title":"HAVE YOU WATCHED THIS VIDEO YET?","pageSelector":"body.single","elementSelector":".entry-content > p","position":"afterend","skip":3,"classNames":[]}},"adUnits":[{"name":"Sidebar_9","location":"Sidebar","sequence":9,"sticky":true,"devices":["desktop"],"autosize":true,"dynamic":{"enabled":true,"pageSelector":"","elementSelector":".inner_sidebar, .flex_column.av_one_fourth","position":"beforeend","min":0,"max":1,"lazy":false,"spacing":0,"skip":0,"every":1,"classNames":[]},"targeting":[{"key":"location","value":["Sidebar"]},{"key":"sticky","value":true}],"stickyOverlapSelector":".snippet-title, #footer","adSizes":[[300,250],[250,250],[300,600],[120,240],[160,600],[300,1050],[336,280],[320,50],[320,100],[1,1],[300,420],[300,50]],"priority":291},{"name":"Content","location":"Content","sticky":false,"devices":["desktop"],"autosize":true,"dynamic":{"enabled":true,"pageSelector":"body.single, body.page","elementSelector":".entry-content > p, .avia_textblock > *","position":"afterend","min":0,"max":5,"lazy":true,"lazyMax":2,"spacing":1,"skip":2,"every":null,"classNames":[]},"targeting":[{"key":"location","value":["Content"]}],"adSizes":[[120,240],[250,250],[300,250],[320,50],[320,100],[336,280],[468,60],[728,90],[970,90],[1,1],[300,300],[552,334],[300,50],[728,250],[970,250],[1,2]],"priority":199},{"name":"Content","location":"Content","sticky":false,"devices":["tablet"],"autosize":true,"dynamic":{"enabled":true,"pageSelector":"body.single, body.page","elementSelector":".entry-content > p, .avia_textblock > *","position":"afterend","min":0,"max":7,"lazy":true,"lazyMax":2,"spacing":0.7,"skip":0,"every":1,"classNames":[]},"targeting":[{"key":"location","value":["Content"]}],"adSizes":[[120,240],[250,250],[300,250],[320,50],[320,100],[336,280],[468,60],[728,90],[970,90],[1,1],[300,300],[552,334],[300,50],[728,250],[970,250],[1,2]],"priority":199},{"name":"Content","location":"Content","sticky":false,"devices":["phone"],"autosize":true,"dynamic":{"enabled":true,"pageSelector":"body.single, body.page","elementSelector":".entry-content > p, .avia_textblock > *","position":"afterend","min":0,"max":7,"lazy":true,"lazyMax":2,"spacing":1.3,"skip":0,"every":1,"classNames":[]},"targeting":[{"key":"location","value":["Content"]}],"adSizes":[[120,240],[250,250],[300,250],[320,50],[320,100],[336,280],[468,60],[728,90],[970,90],[1,1],[300,300],[552,334],[300,50],[728,250],[970,250],[1,2]],"priority":199},{"name":"Footer","location":"Footer","sticky":true,"devices":["tablet","phone","desktop"],"autosize":true,"dynamic":{"enabled":true,"pageSelector":"body:not(.home)","elementSelector":"body","position":"beforeend","min":0,"max":1,"lazy":false,"spacing":0,"skip":0,"every":1,"classNames":[]},"targeting":[{"key":"location","value":["Footer"]},{"key":"sticky","value":true}],"adSizes":[[320,50],[320,100],[728,90],[970,90],[468,60],[1,1],[300,50]],"priority":-1}],"breakpoints":{"tablet":768,"desktop":1024}};

  var delivery = 'core';
  var p = ['core'];

  if (['21', '22', '23'].indexOf(String(w.adthrive.threshold)) !== -1) {
    delivery = 'control';
  } else if (['24', '25', '26'].indexOf(String(w.adthrive.threshold)) !== -1) {
    delivery = 'next';
    p.push('next');
  }

  p.push('v1');

  w.adthrive.styleUrl = 'https://' + w.adthrive.host + '/sites/565e30c34856897050c5e05a/ads.min.css';
  w.adthrive.baseUrl = 'https://' + w.adthrive.host + '/' + p.join('/');
  w.adthrive.mobile = false;

  w.adthrive.cmd.push(function() {
    w.adthrive.siteAds.targeting.push( {key: 'delivery', value: delivery } );
    w.adthrive.config.abGroup.set('delivery', delivery);
  });

  var script = d.createElement('script');
  script.type = 'text/javascript';
  script.src = w.adthrive.baseUrl + '/js/adthrive.min.js?threshold=' + w.adthrive.threshold;
  var node = d.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(script, node);
})(window, document);