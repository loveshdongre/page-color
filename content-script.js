var browser = browser || chrome;

// enable popup btn when on correct url
browser.runtime.onMessage.addListener(
    function(request) {
        if (request.msg === "changeColor") {
            all = document.getElementsByTagName("*");
            for (el of all) {
                el.style.color = request.color;
            }
        }
    }
);