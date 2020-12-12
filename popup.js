var browser = browser || chrome;

btn = document.getElementById('btn');
btn.addEventListener('click', changeColor);

function changeColor() {
    val = document.getElementById('color').value;
    response = {"msg": "changeColor", "color": val};
    browser.tabs.query({}, function(tabs) {
        for (tab of tabs) {
            browser.tabs.sendMessage(tab.id, response);
        }
    });
}
