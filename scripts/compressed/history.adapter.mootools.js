(function(e, t) { "use strict"; var n = e.History = e.History || {},
        r = e.MooTools,
        i = e.Element; if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    Object.append(i.NativeEvents, { popstate: 2, hashchange: 2 }), n.Adapter = { bind: function(e, t, n) { var r = typeof e == "string" ? document.id(e) : e;
            r.addEvent(t, n) }, trigger: function(e, t, n) { var r = typeof e == "string" ? document.id(e) : e;
            r.fireEvent(t, n) }, extractEventData: function(e, n) { var r = n && n.event && n.event[e] || n && n[e] || t; return r }, onDomLoad: function(t) { e.addEvent("domready", t) } }, typeof n.init != "undefined" && n.init() })(window);