var HttpRequestData = /** @class */ (function () {
    function HttpRequestData(method, uri, version, message, response, fullfilled) {
        if (response === void 0) { response = undefined; }
        if (fullfilled === void 0) { fullfilled = false; }
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fullfilled = fullfilled;
    }
    return HttpRequestData;
}());
var myData = new HttpRequestData('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
