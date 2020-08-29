"use strict";

/*
TODO: ping client
>>>>> For now only gets ping from server! <<<<<
*/
// List of locations and IPs
//        N. Virginia,     Dallas,          Denver,           Miami,            Minneapolis,        Montreal,          New York,       San Francisco, Seattle,      Washington DC,   Buenos Aires,   Amsterdam,         Copenhagen,       Frankfurt,        London,          Madrid,          Paris,            Warsaw,          Johannesburg,      Beijing,        Hong Kong,      Mumbai,           Shanghai,         Tokyo,          Brisbane,          Sydney,       Tel-Aviv
var ip = ["23.235.60.92", "69.162.81.155", "192.199.248.75", "162.254.206.227", "207.250.234.100", "184.107.126.165", "206.71.50.230", "65.49.22.66", "23.81.0.59", "207.228.238.7", "131.255.7.26", "95.142.107.181", "185.206.224.67", "195.201.213.247", "5.152.197.179", "195.12.50.155", "51.158.22.211", "46.248.187.100", "197.221.23.194", "47.94.129.116", "103.1.14.238", "103.120.178.71", "106.14.156.213", "110.50.243.6", "223.252.19.130", "101.0.86.43", "185.229.226.83"];
var pingTimes = [];

function ping(host) {
  var started = new Date().getTime();
  var http = new XMLHttpRequest();
  http.open("GET", "http://" + host + ":" +
  /*async*/
  true);

  http.onreadystatechange = function () {
    if (http.readyState == 4) {
      var ended = new Date().getTime(); // get ping

      var milliseconds = ended - started;
      return milliseconds;
    }
  };

  try {
    http.send(null);
  } catch (exception) {// this is expected
  }
}

function wrap(arr, n) {
  // averages by n pings
  var result = {};

  for (var i = 0; i < arr.length;) {
    var sum = 0;

    for (var j = 0; j < n; j++) {
      // Check if value is numeric. If not use 0
      sum += +arr[i++] || 0;
    }

    result.push(sum / n);
  }

  return result;
}

function main(n) {
  // make sure to call include n server pings from css call
  for (var i = 0; i <= ip.length; i++) {
    for (var j = 0; j < n; j++) {
      // append to array
      pingTimes.push(ping(ip[i]));
    }
  }

  return wrap(pingTimes, n);
}