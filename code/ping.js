/*
TODO: ping client
>>>>> For now only gets ping from server! <<<<<
*/


// List of locations and IPs
var ip = ["23.235.60.92",       /*N. Virginia*/ 
          "69.162.81.155",      /*Dallas*/
          "192.199.248.75",     /*Denver*/
          "162.254.206.227",    /*Miami*/
          "207.250.234.100",    /*Minneapolis*/
          "184.107.126.165",    /*Montreal*/
          "206.71.50.230",      /*New York*/
          "65.49.22.66",        /*San Francisco*/
          "23.81.0.59",         /*Seattle*/
          "207.228.238.7",      /*Washington DC*/
          "131.255.7.26",       /*Buenos Aires*/
          "95.142.107.181",     /*Amsterdam*/
          "185.206.224.67",     /*Copenhagen*/
          "195.201.213.247",    /*Frankfurt*/
          "5.152.197.179",      /*London*/
          "195.12.50.155",      /*Madrid*/
          "51.158.22.211",      /*Paris*/
          "46.248.187.100",     /*Warsaw*/
          "197.221.23.194",     /*Johannesburg*/
          "47.94.129.116",      /*Beijing*/
          "103.1.14.238",       /*Hong Kong*/
          "103.120.178.71",     /*Mumbai*/
          "106.14.156.213",     /*Shanghai*/
          "110.50.243.6",       /*Tokyo*/
          "223.252.19.130",     /*Brisbane*/
          "101.0.86.43",        /*Sydney*/
          "185.229.226.83"];    /*Tel-Aviv*/

var pingTimes = [];

function ping(host) {

    var started = new Date().getTime();
  
    var http = new XMLHttpRequest();
  
    http.open("GET", "http://" + host + ":" + /*async*/true);
    http.onreadystatechange = function() {
      
        if (http.readyState == 4) {
            var ended = new Date().getTime();
            
            // get ping
            var milliseconds = ended - started;
    
            return milliseconds;

      }

    }

    try {

      http.send(null);

    } catch(exception) {
      // this is expected
    }
  
  }

function wrap(arr, n) {

    // averages by n pings
    var result = {};

    for (var i = 0; i < arr.length;) {

        var sum = 0;

        for(var j = 0; j < n; j++){

        // Check if value is numeric. If not use 0
        sum += +arr[i++] || 0

        }

      result.push(sum/n);

    }

    return result

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