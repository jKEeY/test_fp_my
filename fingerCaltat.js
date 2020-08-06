class FingerCaltat {
  constructor(config) {
    this.config = config;
    this.components = [];
  }
  /**
   * @returns {boolean}
   */
  checkIsWebkitRequestFileSystem() {
    return !!window.webkitRequestFileSystem;
  }
  /**
   * @returns {number} or throw
   */
  getVersionChrome() {
    var userAgent = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (!userAgent) throw "UserAgent is not Google Chrome";
    return parseInt(userAgent[2], 10);
  }
  /**
   * @returns {boolean}
   */
  isUsingStorage() {
    return new Promise(function (resolve) {
      "storage" in navigator && "estimate" in navigator.storage
        ? navigator.storage.estimate().then(function (resolveTwo) {
            resolveTwo.usage;
            var tmp = resolveTwo.quota;
            console.log(resolveTwo, tmp);
            resolve(!!(tmp && tmp < 12e7));
          })
        : resolve(!1);
    });
  }
  /**
   * @param {array} arr
   * @param {function} func
   */
  transformKObject(arr, func) {
    arr.forEach(func);
  }
  /**
   *
   * @param {array} arr
   * @param {function} func
   *
   * @returns {array}
   */
  maps(arr, func) {
    var n = [];

    return null === arr
      ? n
      : Array.prototype.map && arr.map === Array.prototype.map
      ? arr.map(func)
      : this.transformKObject(arr, function (item, index) {
          n.push(func(item, index));
        });
  }
  /**
   *
   * @param {string} text
   */
  callConsoleLog(text) {
    if (window.console && console.log) console.log(text);
  }
  /**
   *
   * @param {*} e Uint8Array
   * @param {*} t array
   */
  сomparingTwoArrayse(e, t) {
    if (0 == t.length || t.length > e.length) return -1;
    for (var n = 0; n < e.length; n++) {
      for (var r = 0, o = 0; o < t.length; o++) {
        if (e[n + o] != t[o]) {
          r = 0;
          break;
        }
        r++;
      }
      if (r == t.length) return n;
    }
    return -1;
  }
  generateHash(num) {
    for (var t = "", n = 0; n < num; n++)
      t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
        Math.floor(62 * Math.random())
      );
    return t;
  }
  /**
   * @param {string} key
   */
  getCookieValue(key) {
    for (
      var t = key + "=", n = document.cookie.split(";"), r = 0;
      r < n.length;
      r++
    ) {
      for (var o = n[r]; " " == o.charAt(0); ) o = o.substring(1, o.length);
      if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
    }
  }
  saveCookieAndLocalStorage(storage, value, cookieDomain, cookieKey) {
    return (
      "n/a" !== value &&
        (!(function (e, t, n, r) {
          // o
          var keyWithValue = e + "=" + t,
            // i
            dateOne = new Date(),
            // oq
            dateTwo = new Date();
          dateOne.setTime(dateOne.getTime() + 24 * n * 60 * 60 * 1e3);
          dateTwo.setTime(dateOne.getTime());
          localStorage.setItem(
            t + " " + dateTwo.toUTCString(),
            dateOne.toUTCString()
          );
          var a = "expires=" + dateOne.toUTCString(),
            c = "";
          r && r.length > 0 && (c = "domain=" + r),
            (document.cookie = [keyWithValue, "path=/", a, c].join("; "));
        })(cookieKey || "_vid", value, 365, cookieDomain),
        this.saveLocalStorage(storage, "_vid", value)),
      value
    );
  }
  saveLocalStorage(storage, key, value) {
    storage.setItem(key, value);
  }
  getLocaleStorageItem(storage, key) {
    return storage.getItem(key);
  }
}

module.exports = FingerCaltat;
