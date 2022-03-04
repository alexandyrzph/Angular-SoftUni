class HttpRequestData {
    constructor(
        private method: string,
        private uri: string,
        private version: string,
        private message: string,
        private response: string = undefined,
        private fullfilled: boolean = false
    ) { }
}

let myData = new HttpRequestData('GET', 'http://google.com', 'HTTP/1.1', '');

console.log(myData);