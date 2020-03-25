function test() {
    console.log("test 2ww")
    var url = "https://corona.lmao.ninja/all"
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            console.log("test 1")
            displayData(this.response)
        }
    }
    xhttp.open("GET", url, true)
    xhttp.send()
}

function displayData(data) {
    console.log(data)
    document.getElementById("data").innerHTML = data
}