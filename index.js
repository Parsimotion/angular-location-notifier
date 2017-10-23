angular.module("location.notifier", [])
.run(function($rootScope) {
  $rootScope.$on('$locationChangeStart', notify);
})

function notify(e, newUrl) {
  if(runningInIframe()) {
    var message = {
      type: "iframe_url_changed",
      href: newUrl
    };
    window.top.postMessage(message, '*');
  }
}

function runningInIframe() {
  try {
    return window.self != window.top;
  } catch(e) {
    return true;
  }
}
