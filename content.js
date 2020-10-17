function admitNow() {
    for(let item of document.getElementsByTagName("span")) {
        if (item.innerHTML == "Admit") {
            item.click()
        }
    }
}

// Run this function every 3 seconds
setInterval(admitNow, 3000)