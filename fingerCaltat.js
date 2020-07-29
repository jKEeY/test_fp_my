class FingerCaltat {
  constructor(config) {
    this.config = config;
  }

  checkIsWebkitRequestFileSystem() {
    return !!window.webkitRequestFileSystem;
  }
  /**
   * @returns {number} or throw
   */
  getVersionChrome() {
    var userAgent = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (!userAgent) throw "UserAgent is not Google Chrome";
    return parseInt(e[2], 10);
  }
  test() {
    return new Promise(function (resolve, reject) {
      "storage" in navigator && "estimate" in navigator.storage
        ? navigator.storage.estimate().then(function (resolveTwo) {
            resolveTwo.usage;
            var tmp = resolveTwo.quota;
            resolve(!!(tmp && tmp < 12e7));
          })
        : e(!1);
    });
  }
}

var fingetCaltat = new FingerCaltat({});

console.log(fingetCaltat.test());
