!function(){'use strict';function e(){!function(){var e,n=!1,t=[],o=!1;function i(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent('WebComponentsReady',{bubbles:!0}))}function s(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback((function(n){e=n,o&&e()}))}function c(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),n=!0,r().then(i)}function r(){o=!1;var n=t.map((function(e){return e instanceof Function?e():e}));return t=[],Promise.all(n).then((function(){o=!0,e&&e()})).catch((function(e){console.error(e)}))}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(e){e&&(t.push(e),n&&r())},window.WebComponents._batchCustomElements=s;var d='webcomponents-loader.js',l=[];(!('attachShadow'in Element.prototype&&'getRootNode'in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&l.push('sd'),window.customElements&&!window.customElements.forcePolyfill||l.push('ce');var w=function(){var e=document.createElement('template');if(!('content'in e))return!0;if(!(e.content.cloneNode()instanceof DocumentFragment))return!0;var n=document.createElement('template');n.content.appendChild(document.createElement('div')),e.content.appendChild(n);var t=e.cloneNode(!0);return 0===t.content.childNodes.length||0===t.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!w||(l=['sd-ce-pf']),l.length){var a,m='bundles/webcomponents-'+l.join('-')+'.js';if(window.WebComponents.root)a=window.WebComponents.root+m;else{var u=document.querySelector('script[src*="'+d+'"]');a=u.src.replace(d,m)}var p=document.createElement('script');p.src=a,'loading'===document.readyState?(p.setAttribute('onload','window.WebComponents._batchCustomElements()'),document.write(p.outerHTML),document.addEventListener('DOMContentLoaded',c)):(p.addEventListener('load',(function(){s(),c()})),p.addEventListener('error',(function(){throw new Error('Could not load polyfill bundle'+a)})),document.head.appendChild(p))}else'complete'===document.readyState||'interactive'===document.readyState?c():(window.addEventListener('load',c),window.addEventListener('DOMContentLoaded',(function(){window.removeEventListener('load',c),c()})))}()}if(!((window.location.search||'').indexOf('disable-slickstream')>=0)&&!window._slickEmbedScriptLoaded){window.WebComponents=window.WebComponents||{},window.slickSiteCode='V13FAWAZ',window.slickScriptStartTime=Date.now(),window.slickConfiguration=JSON.parse('{"engagementResourcesDomain":"https://app.slickstream.com","engagementCacheableApiDomain":"https://app.slickstream.com","engagementNonCacheableApiDomain":"https://backend.slickstream.com","storyResourcesDomain":"https://stories.slickstream.com","storyCacheableApiDomain":"https://stories.slickstream.com","storyNonCacheableApiDomain":"https://stories-api.slickstream.com","websocketUri":"wss://backend.slickstream.com/socket?site=V13FAWAZ"}'.trim()),window.slickRoot='',window.slickRestHost='',window.slickSocketUri='',window.slickStoryRoot=window.slickRoot,window.slickStoryServiceRoot=window.slickStoryRoot;let n='https://app.slickstream.com/';if(window.slickConfiguration)n=window.slickConfiguration.engagementResourcesDomain;else{const e=document.currentScript||function(){const e=document.getElementsByTagName('script');return e[e.length-1]}(),t=e&&e.src||'';if(t)try{const e=new URL(t).hostname;'127.0.0.1'!==e&&'localhost'!==e&&'guild.systems'!==e||(n=new URL('/',t).href)}catch(e){console.log('Failed to parse currentScriptUrl. Using default.',e)}}const t=document.currentScript&&document.currentScript.src&&document.currentScript.src.indexOf('extension=true')>0;window.WebComponents.root=new URL('/s/scripts/@webcomponents-2.4.0/webcomponentsjs/',n).href;const o=async()=>new Promise((e,o)=>{const i=document.createElement('script');i.onload=()=>e(),i.onerror=e=>o(e),i.onabort=e=>o(e),i.src=new URL('/e2/guild-nav-embed.js?v=1.15.6&site=V13FAWAZ'+(t?`&extension=true&exttime=${Date.now()}`:''),n).href,document.head.appendChild(i)}),i=()=>new Promise(e=>{if(window._slickPolyfills&&window._slickPolyfills.InterSectionObserverReady)e();else{const n=()=>{window.removeEventListener('InterSectionObserverReady',n),e()};window.addEventListener('InterSectionObserverReady',n)}});!function(e){if(window._slickPolyfills=window._slickPolyfills||{},'IntersectionObserver'in window)window._slickPolyfills.InterSectionObserverReady=!0,document.dispatchEvent(new CustomEvent('InterSectionObserverReady',{bubbles:!0}));else{const n=document.createElement('script');n.src=new URL('/s/scripts/polyfills/intersection-observer.min.js',e).href,document.head.appendChild(n)}}(n);let s=0;const c=async()=>{e(),window.WebComponents.waitFor(async()=>{window.customElements?(await i(),await o()):(console.log('*** Custom Elements failed to initialize. Retrying...'),s<100&&(s++,setTimeout(()=>c(),500)))})};c(),window._slickEmbedScriptLoaded=!0}}();