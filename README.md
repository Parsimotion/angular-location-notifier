# angular-location-notifier
Notify your new location to parent app when running inside an iframe via window.postMessage.
### Example message
```
{
   type: "iframe_url_changed",
   href: "http://your-app.com/the/new/location"
};
```
# Installation

    $ bower install parsimotion/angular-location-notifier --save

To use, include "location.notifier" as a dependency in your Angular module:
```
angular.module('myModule', ['location.notifier']);
```
