!function (t) {
    var e, n, l, i, o, a,
        d = '<svg><symbol id="icon-gitlab" viewBox="0 0 1024 1024"><path d="M932.317184 567.76704L885.10464 422.46144l-93.57312-287.997952c-4.8128-14.81728-25.776128-14.81728-30.590976 0L667.36128 422.459392H356.62848L263.051264 134.46144c-4.8128-14.81728-25.776128-14.81728-30.593024 0l-93.57312 287.997952-47.210496 145.309696a32.165888 32.165888 0 0 0 11.68384 35.96288l408.6272 296.890368L920.61696 603.734016c11.272192-8.192 15.990784-22.71232 11.68384-35.964928" fill="#FC6D26" ></path><path d="M512.002048 900.62848l155.365376-478.171136H356.634624z" fill="#E24329" ></path><path d="M512.004096 900.62848L356.63872 422.47168H138.901504z" fill="#FC6D26" ></path><path d="M138.891264 422.465536l-47.214592 145.309696a32.16384 32.16384 0 0 0 11.685888 35.96288L511.991808 900.62848z" fill="#FCA326" ></path><path d="M138.893312 422.459392h217.737216L263.053312 134.46144c-4.8128-14.819328-25.778176-14.819328-30.590976 0z" fill="#E24329" ></path><path d="M512.002048 900.62848l155.365376-478.154752H885.10464z" fill="#FC6D26" ></path><path d="M885.11488 422.465536l47.214592 145.309696a32.16384 32.16384 0 0 1-11.685888 35.96288L512.014336 900.62848z" fill="#FCA326" ></path><path d="M885.096448 422.459392H667.36128l93.577216-287.997952c4.814848-14.819328 25.778176-14.819328 30.590976 0z" fill="#E24329" ></path></symbol></svg>',
        c = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss");
    if (c && !t.__iconfont__svg__cssinject__) {
        t.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (t) {
            console && console.log(t)
        }
    }

    function s() {
        o || (o = !0, l())
    }

    e = function () {
        var t, e, n;
        (n = document.createElement("div")).innerHTML = d, d = null, (e = n.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (n = document.body).firstChild ? (e = n.firstChild).parentNode.insertBefore(t, e) : n.appendChild(t))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(e, 0) : (n = function () {
        document.removeEventListener("DOMContentLoaded", n, !1), e()
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (l = e, i = t.document, o = !1, (a = function () {
        try {
            i.documentElement.doScroll("left")
        } catch (t) {
            return void setTimeout(a, 50)
        }
        s()
    })(), i.onreadystatechange = function () {
        "complete" == i.readyState && (i.onreadystatechange = null, s())
    })
}(window);