const covidDates = ["1/22/20", "1/29/20", "2/5/20", "2/12/20", "2/19/20", "2/26/20", "3/4/20", "3/11/20", "3/18/20", "3/24/20"]
const marketDates = ["2020-01-22", "2020-01-29", "2020-02-05", "2020-02-12", "2020-02-19", "2020-02-26", "2020-03-04", "2020-03-11", "2020-03-18", "2020-03-24"]


function getGlobalData() {
    var url = "https://corona.lmao.ninja/v2/historical/UK"
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            getMarketData(this.response)
        }
    }
    xhttp.open("GET", url, true)
    xhttp.send()
}

function displayGlobalData(casesData, marketData) {
    casesData = JSON.parse(casesData)
    var casesDataArray = []
    for(i = 0; i < covidDates.length; i++) {
        casesDataArray.push(casesData["timeline"]["cases"][covidDates[i]])
    }
    marketData = JSON.parse(marketData)
    var marketDataArray = []
    for(i = 0; i < marketDates.length; i++) {
        marketDataArray.push(parseInt(marketData["Time Series (Daily)"][marketDates[i]]["4. close"]))
    }
    console.log(marketDataArray)
    var chart = document.getElementById("graph")
    var lineChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: covidDates,
            datasets: [{
              label: 'A',
              yAxisID: 'A',
              data: casesDataArray,
              fill: false,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff"
            }, {
              label: 'B',
              yAxisID: 'B',
              data: marketDataArray,
              fill: false,
              backgroundColor: "rgba(50,122,122,0.4)",
              borderColor: "rgba(50,122,122,1)",
              pointBorderColor: "rgba(50,122,122,1)",
              pointBackgroundColor: "#fff"
            }]
          },
          options: {
            scales: {
              yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'left',
              }, {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                  max: 1,
                  min: 0
                }
              }]
            }
        }
    })
}

function getMarketData(casesData) {
    var code = document.getElementById("marketCode").value
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + code + "&apikey=EY8R9HBUQELISBSS"
    console.log(url)
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            displayGlobalData(casesData, this.response)
        }
    }
    xhttp.open("GET", url, true)
    xhttp.send()
}

