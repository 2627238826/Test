/**
 * Created by cyl on 2017/7/24.
 */
(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [ ng.platformBrowser.BrowserModule ],
            declarations: [ app.AppComponent ],
            bootstrap: [ app.AppComponent ]
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));