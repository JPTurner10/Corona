function getGlobalData() {
    var url = "https://corona.lmao.ninja/all"
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            displayGlobalData(this.response)
        }
    }
    xhttp.open("GET", url, true)
    xhttp.send()
}

function displayGlobalData(data) {
    console.log(data)
    document.getElementById("globalDisplay").innerHTML = data
}

function getMarketData() {
    var code = document.getElementById("marketCode").value
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&" + code + "=MSFT&interval=5min&apikey=EY8R9HBUQELISBSS"
    console.log(url)
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            displayMarketData(this.response)
        }
    }
    xhttp.open("GET", url, true)
    xhttp.send()
}

function displayMarketData(data) {
    document.getElementById("marketDisplay").innerHTML = data
}