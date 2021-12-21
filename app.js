var btc = document.getElementById("bitcoin")
var eth = document.getElementById("eth")
var doge = document.getElementById("doge")

var settings = {
"async" : true,
"scrossDomain":true,
"url":"https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CDoge&vs_currencies=usd",
"method": "GET",
"headers":{}
}

$.ajax(settings).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    doge.innerHTML=response.dogecoin.usd;
})