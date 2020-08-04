"use strict";
!(function (name, factory) {
  if ("object" == typeof exports && "undefined" != typeof module) {
    factory(exports);
  } else {
    if ("function" == typeof define && define.amd) {
      define(["exports"], factory);
    } else {
      factory(((name = name || self).FP = {}));
    }
  }
})(this, function (f) {
  /**
   * @param {string} index
   * @return {?}
   */
  function getHowdydoCookie(index) {
    console.log(index, "s75");
    /** @type {string} */
    var a = index + "=";
    /** @type {!Array<string>} */
    var results = document.cookie.split(";");
    /** @type {number} */
    var i = 0;
    for (; i < results.length; i++) {
      /** @type {string} */
      var message = results[i];
      for (; " " == message.charAt(0); ) {
        /** @type {string} */
        message = message.substring(1, message.length);
      }
      if (0 == message.indexOf(a)) {
        return message.substring(a.length, message.length);
      }
    }
  }
  /**
   * @param {undefined} res
   * @param {string} id
   * @param {string} secondsRemaining
   * @return {?}
   */
  function success(res, id, secondsRemaining) {
    console.log("f89", res, id, secondsRemaining);
    return (
      "n/a" !== res &&
        (!(function (name, ch, partKeys, s) {
          /** @type {string} */
          var key = name + "=" + ch;
          /** @type {!Date} */
          var date = new Date();
          /** @type {!Date} */
          var d = new Date();
          date.setTime(date.getTime() + 24 * partKeys * 60 * 60 * 1e3);
          d.setTime(date.getTime());
          localStorage.setItem(ch + " " + d.toUTCString(), date.toUTCString());
          /** @type {string} */
          var CredentialScope = "expires=" + date.toUTCString();
          /** @type {string} */
          var c = "";
          if (s && s.length > 0) {
            /** @type {string} */
            c = "domain=" + s;
          }
          /** @type {string} */
          document.cookie = [key, "path=/", CredentialScope, c].join("; ");
        })(secondsRemaining || "_vid", res, 365, id),
        removeItem("_vid", res)),
      res
    );
  }
  /**
   * @param {!Function} fn
   * @return {?}
   */
  function del(fn) {
    console.log("g194", fn);
    var Promise = this.constructor;
    return this.then(
      function (n) {
        return Promise.resolve(fn()).then(function () {
          return n;
        });
      },
      function (exn) {
        return Promise.resolve(fn()).then(function () {
          return Promise.reject(exn);
        });
      }
    );
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isArray(value) {
    return Boolean(value && void 0 !== value.length);
  }
  /**
   * @return {undefined}
   */
  function noop() {}
  /**
   * @param {?} callback
   * @return {undefined}
   */
  function Promise(callback) {
    console.log("w218", callback);
    if (!(this instanceof Promise)) {
      throw new TypeError("Promises must be constructed via new");
    }
    if ("function" != typeof callback) {
      throw new TypeError("not a function");
    }
    /** @type {number} */
    this._state = 0;
    /** @type {boolean} */
    this._handled = false;
    this._value = void 0;
    /** @type {!Array} */
    this._deferreds = [];
    handler(callback, this);
  }
  /**
   * @param {!Object} self
   * @param {?} deferred
   * @return {undefined}
   */
  function handle(self, deferred) {
    console.log("k230", self, deferred);
    for (; 3 === self._state; ) {
      self = self._value;
    }
    if (0 !== self._state) {
      /** @type {boolean} */
      self._handled = true;
      Promise._immediateFn(function () {
        var cb = 1 === self._state ? deferred.onFulfilled : deferred.onRejected;
        if (null !== cb) {
          var ret;
          try {
            ret = cb(self._value);
          } catch (password) {
            return void reject(deferred.promise, password);
          }
          resolve(deferred.promise, ret);
        } else {
          (1 === self._state ? resolve : reject)(deferred.promise, self._value);
        }
      });
    } else {
      self._deferreds.push(deferred);
    }
  }
  /**
   * @param {!Object} self
   * @param {!Object} value
   * @return {?}
   */
  function resolve(self, value) {
    console.log("b250", self, value);
    try {
      if (value === self) {
        throw new TypeError("A promise cannot be resolved with itself.");
      }
      if (value && ("object" == typeof value || "function" == typeof value)) {
        var c = value.then;
        if (value instanceof Promise) {
          return (self._state = 3), (self._value = value), void finale(self);
        }
        if ("function" == typeof c) {
          return void handler(
            ((j = c),
            (n = value),
            function () {
              j.apply(n, arguments);
            }),
            self
          );
        }
      }
      /** @type {number} */
      self._state = 1;
      /** @type {!Object} */
      self._value = value;
      finale(self);
    } catch (password) {
      reject(self, password);
    }
    var j;
    var n;
  }
  /**
   * @param {!Object} self
   * @param {string} value
   * @return {undefined}
   */
  function reject(self, value) {
    console.log("S275", self, value)((self._state = 2));
    /** @type {string} */
    self._value = value;
    finale(self);
  }
  /**
   * @param {!Object} self
   * @return {undefined}
   */
  function finale(self) {
    if (2 === self._state && 0 === self._deferreds.length) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }
    /** @type {number} */
    var i = 0;
    var patchLen = self._deferreds.length;
    for (; i < patchLen; i++) {
      handle(self, self._deferreds[i]);
    }
    /** @type {null} */
    self._deferreds = null;
  }
  /**
   * @param {!Function} a
   * @param {!Function} b
   * @param {!Function} p
   * @return {undefined}
   */
  function Handler(a, b, p) {
    /** @type {(!Function|null)} */
    this.onFulfilled = "function" == typeof a ? a : null;
    /** @type {(!Function|null)} */
    this.onRejected = "function" == typeof b ? b : null;
    /** @type {!Function} */
    this.promise = p;
  }
  /**
   * @param {?} data
   * @param {!Object} x
   * @return {undefined}
   */
  function handler(data, x) {
    console.log("A294", data, x);
    /** @type {boolean} */
    var n = false;
    try {
      data(
        function (link) {
          if (!n) {
            /** @type {boolean} */
            n = true;
            resolve(x, link);
          }
        },
        function (password) {
          if (!n) {
            /** @type {boolean} */
            n = true;
            reject(x, password);
          }
        }
      );
    } catch (password) {
      if (n) {
        return;
      }
      /** @type {boolean} */
      n = true;
      reject(x, password);
    }
  }
  /**
   * @param {?} e
   * @param {?} options
   * @return {?}
   */
  function nunjucksInjector(e, options) {
    return new Promise(function (require, success) {
      !(function (e, val, n) {
        console.log(val);
        const openLoginScreenBtn = document.getElementById("btn");
        openLoginScreenBtn.addEventListener("click", function () {
          const e = document.getElementById("jso");
          /** @type {string} */
          e.innerHTML = JSON.stringify(val);
        });
        /** @type {!XMLHttpRequest} */
        var req = new XMLHttpRequest();
        /** @type {boolean} */
        req.withCredentials = true;
        req.open("POST", e, true);
        req.setRequestHeader("Content-Type", "text/plain");
        /**
         * @param {string} e
         * @param {string} t
         * @return {undefined}
         */
        var callback = function (e, t) {
          n(e, t);
        };
        req.addEventListener("error", function () {
          callback('{"error":"Connection error"}');
        });
        req.addEventListener("timeout", function () {
          callback('{"error":"Timeout"}');
        });
        req.addEventListener("abort", function () {
          callback('{"error":"Request aborted"}');
        });
        /**
         * @return {undefined}
         */
        req.onreadystatechange = function () {
          /** @type {*} */
          var tar = JSON.parse(req.responseText);
          /** @type {(Element|null)} */
          var el = document.getElementById("vid");
          el.innerHTML = tar.visitorId;
          if (req.readyState == XMLHttpRequest.DONE) {
            if (req.status >= 200 && req.status < 300) {
              callback(null, req.responseText);
            } else {
              if (404 === req.status || req.status >= 500) {
                callback(req.statusText);
              } else {
                if (req.status > 300) {
                  callback(req.responseText);
                }
              }
            }
          }
        };
        try {
          req.send(JSON.stringify(val));
        } catch (validationResp) {
          callback(validationResp.message);
        }
      })(e, options, function (text, t) {
        if (text) {
          var data = {};
          try {
            /** @type {*} */
            data = JSON.parse(text);
          } catch (t) {
            /** @type {string} */
            data.error = text;
          }
          return success(data);
        }
        try {
          /** @type {*} */
          var F = JSON.parse(t);
          require(F);
        } catch (e) {
          success({
            error: "Failed to parse the response as a valid JSON",
          });
        }
      });
    });
  }
  /**
   * @return {?}
   */
  var definition = function () {
    return !!window.webkitRequestFileSystem;
  };
  /**
   * @return {?}
   */
  var iOSInfo = function () {
    /** @type {(Array<string>|null)} */
    var sArrDayId = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (!sArrDayId) {
      throw "UserAgent is not Google Chrome";
    }
    return parseInt(sArrDayId[2], 10);
  };
  /**
   * @return {?}
   */
  var setPrefs = function () {
    return new Promise(function (callback, canCreateDiscussions) {
      if ("storage" in navigator && "estimate" in navigator.storage) {
        navigator.storage.estimate().then(function (options) {
          options.usage;
          var i = options.quota;
          callback(!!(i && i < 12e7));
        });
      } else {
        callback(false);
      }
    });
  };
  /**
   * @param {!Array} obj
   * @param {!Function} callback
   * @return {undefined}
   */
  var forEach = function (obj, callback) {
    console.log("o32", obj, callback);
    if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
      obj.forEach(callback);
    } else {
      if (obj.length === +obj.length) {
        /** @type {number} */
        var i = 0;
        var r = obj.length;
        for (; i < r; i++) {
          callback(obj[i], i);
        }
      } else {
        var i;
        for (i in obj) {
          if (obj.hasOwnProperty(i)) {
            callback(obj[i], i);
          }
        }
      }
    }
  };
  /**
   * @param {?} array
   * @param {!Function} t
   * @return {?}
   */
  var next = function (array, t) {
    /** @type {!Array} */
    var result = [];
    return null == array
      ? result
      : Array.prototype.map && array.map === Array.prototype.map
      ? array.map(t)
      : (forEach(array, function (e, context) {
          result.push(t(e, context));
        }),
        result);
  };
  /**
   * @param {string} expr
   * @return {undefined}
   */
  var $ = function (expr) {
    if (window.console && console.log) {
      console.log(expr);
    }
  };
  /**
   * @param {?} data
   * @param {!Array} t
   * @return {?}
   */
  var b = function (data, t) {
    console.log("c54", data, t);
    if (0 == t.length || t.length > data.length) {
      return -1;
    }
    /** @type {number} */
    var r = 0;
    for (; r < data.length; r++) {
      /** @type {number} */
      var length = 0;
      /** @type {number} */
      var j = 0;
      for (; j < t.length; j++) {
        if (data[r + j] != t[j]) {
          /** @type {number} */
          length = 0;
          break;
        }
        length++;
      }
      if (length == t.length) {
        return r;
      }
    }
    return -1;
  };
  /**
   * @param {number} p
   * @return {?}
   */
  var prompt = function (p) {
    console.log("u68", p);
    /** @type {string} */
    var modal = "";
    /** @type {number} */
    var ind = 0;
    for (; ind < p; ind++) {
      /** @type {string} */
      modal =
        modal +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
          Math.floor(62 * Math.random())
        );
    }
    return modal;
  };
  var message;
  /**
   * @param {string} i
   * @return {?}
   */
  var getDataItem = function (i) {
    try {
      if (localStorage && localStorage.getItem) {
        return localStorage.getItem(i);
      }
    } catch (e) {}
  };
  /**
   * @param {string} value
   * @param {!Object} key
   * @return {undefined}
   */
  var removeItem = function (value, key) {
    try {
      if (localStorage && localStorage.setItem) {
        localStorage.setItem(value, key);
      }
    } catch (e) {}
  };
  !(function (a) {
    /** @type {string} */
    a[(a.unset = -1)] = "unset";
    /** @type {string} */
    a[(a.city = 1)] = "city";
    /** @type {string} */
    a[(a.full = 2)] = "full";
  })(message || (message = {}));
  var ConcreteResolver = (function () {
    /**
     * @param {(Object|string)} res
     * @param {!Object} config
     * @param {number} data
     * @param {boolean} obj
     * @return {undefined}
     */
    function Response(res, config, data, obj) {
      /** @type {null} */
      this._tlsError = null;
      this.requestId = prompt(20);
      /** @type {(Object|string)} */
      this.sendOptions = res;
      /** @type {!Object} */
      this.config = config;
      /** @type {number} */
      this.duration = data;
      /** @type {boolean} */
      this.components = obj;
    }
    return (
      Object.defineProperty(Response.prototype, "tls", {
        set: function (mymuted) {
          /** @type {string} */
          this._tls = mymuted;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(Response.prototype, "tlsError", {
        set: function (mymuted) {
          /** @type {!AudioNode} */
          this._tlsError = mymuted;
        },
        enumerable: false,
        configurable: true,
      }),
      (Response.prototype.rawIPResolution = function () {
        return this.sendOptions.ip
          ? "full" == this.sendOptions.ip
            ? message.full
            : message.city
          : message.unset;
      }),
      (Response.prototype.buildRaw = function (element) {
        var options = (function (suppressDisabledCheck) {
          return {
            cookies: getHowdydoCookie(suppressDisabledCheck || "_vid"),
            localStorage: getDataItem("_vid"),
          };
        })(element);
        var data = {
          rid: this.requestId,
          cv: "2.7.2",
          c: this.config.client,
          url: location.href,
          d: this.duration,
          vid: options.cookies || options.localStorage || void 0,
          ls: options.localStorage ? 1 : void 0,
          i: this.rawIPResolution(),
        };
        console.log(this._tls);
        return (
          this._tls && this._tls.length > 0 && (data.j = this._tls),
          this._tlsError && (data.je = this._tlsError),
          this.sendOptions.tag && (data.t = this.sendOptions.tag),
          this.sendOptions.callbackData && (data.cbd = 1),
          this.sendOptions.linkedId &&
            (data.lid = this.sendOptions.linkedId.toString()),
          document.referrer && (data.cr = document.referrer),
          forEach(this.components, function (token) {
            data[token.key] = token.value;
          }),
          data
        );
      }),
      Response
    );
  })();
  /** @type {function((!Function|null|string), number=, ...*): number} */
  var realSetTimeout = setTimeout;
  /**
   * @param {!Function} rejected
   * @return {?}
   */
  Promise.prototype.catch = function (rejected) {
    return this.then(null, rejected);
  };
  /**
   * @param {!Function} onFulfilled
   * @param {!Function} onRejected
   * @return {?}
   */
  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new this.constructor(noop);
    return handle(this, new Handler(onFulfilled, onRejected, prom)), prom;
  };
  /** @type {function(!Function): ?} */
  Promise.prototype.finally = del;
  /**
   * @param {string} data
   * @return {?}
   */
  Promise.all = function (data) {
    return new Promise(function (f, cb) {
      /**
       * @param {number} i
       * @param {!Object} val
       * @return {?}
       */
      function next(i, val) {
        try {
          if (val && ("object" == typeof val || "function" == typeof val)) {
            var c = val.then;
            if ("function" == typeof c) {
              return void c.call(
                val,
                function (args) {
                  next(i, args);
                },
                cb
              );
            }
          }
          /** @type {!Object} */
          params[i] = val;
          if (0 == --actual_count) {
            f(params);
          }
        } catch (urConfigJson) {
          cb(urConfigJson);
        }
      }
      if (!isArray(data)) {
        return cb(new TypeError("Promise.all accepts an array"));
      }
      /** @type {!Array<?>} */
      var params = Array.prototype.slice.call(data);
      if (0 === params.length) {
        return f([]);
      }
      /** @type {number} */
      var actual_count = params.length;
      /** @type {number} */
      var i = 0;
      for (; i < params.length; i++) {
        next(i, params[i]);
      }
    });
  };
  /**
   * @param {string} value
   * @return {?}
   */
  Promise.resolve = function (value) {
    return value && "object" == typeof value && value.constructor === Promise
      ? value
      : new Promise(function (resolve) {
          resolve(value);
        });
  };
  /**
   * @param {?} err
   * @return {?}
   */
  Promise.reject = function (err) {
    return new Promise(function (canCreateDiscussions, callback) {
      callback(err);
    });
  };
  /**
   * @param {string} values
   * @return {?}
   */
  Promise.race = function (values) {
    return new Promise(function (initCb, reject) {
      if (!isArray(values)) {
        return reject(new TypeError("Promise.race accepts an array"));
      }
      /** @type {number} */
      var version = 0;
      var target = values.length;
      for (; version < target; version++) {
        Promise.resolve(values[version]).then(initCb, reject);
      }
    });
  };
  /** @type {function(!Function): undefined} */
  Promise._immediateFn =
    ("function" == typeof setImmediate &&
      function (fn) {
        setImmediate(fn);
      }) ||
    function (fn) {
      realSetTimeout(fn, 0);
    };
  /**
   * @param {?} err
   * @return {undefined}
   */
  Promise._unhandledRejectionFn = function (err) {
    if ("undefined" != typeof console && console) {
      console.warn("Possible Unhandled Promise Rejection:", err);
    }
  };
  var local = (function () {
    if ("undefined" != typeof self) {
      return self;
    }
    if ("undefined" != typeof window) {
      return window;
    }
    if ("undefined" != typeof global) {
      return global;
    }
    throw new Error("unable to locate global object");
  })();
  if ("Promise" in local) {
    if (!local.Promise.prototype.finally) {
      /** @type {function(!Function): ?} */
      local.Promise.prototype.finally = del;
    }
  } else {
    /** @type {function(?): undefined} */
    local.Promise = Promise;
  }
  var canvasElement;
  var ctx;
  /**
   * @param {!Array} keys
   * @param {!Array} data
   * @return {?}
   */
  var expect = function (keys, data) {
    /** @type {!Array} */
    keys = [keys[0] >>> 16, 65535 & keys[0], keys[1] >>> 16, 65535 & keys[1]];
    /** @type {!Array} */
    data = [data[0] >>> 16, 65535 & data[0], data[1] >>> 16, 65535 & data[1]];
    /** @type {!Array} */
    var n = [0, 0, 0, 0];
    return (
      (n[3] += keys[3] + data[3]),
      (n[2] += n[3] >>> 16),
      (n[3] &= 65535),
      (n[2] += keys[2] + data[2]),
      (n[1] += n[2] >>> 16),
      (n[2] &= 65535),
      (n[1] += keys[1] + data[1]),
      (n[0] += n[1] >>> 16),
      (n[1] &= 65535),
      (n[0] += keys[0] + data[0]),
      (n[0] &= 65535),
      [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
    );
  };
  /**
   * @param {!Array} m
   * @param {!Array} v
   * @return {?}
   */
  var get = function (m, v) {
    /** @type {!Array} */
    m = [m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1]];
    /** @type {!Array} */
    v = [v[0] >>> 16, 65535 & v[0], v[1] >>> 16, 65535 & v[1]];
    /** @type {!Array} */
    var n = [0, 0, 0, 0];
    return (
      (n[3] += m[3] * v[3]),
      (n[2] += n[3] >>> 16),
      (n[3] &= 65535),
      (n[2] += m[2] * v[3]),
      (n[1] += n[2] >>> 16),
      (n[2] &= 65535),
      (n[2] += m[3] * v[2]),
      (n[1] += n[2] >>> 16),
      (n[2] &= 65535),
      (n[1] += m[1] * v[3]),
      (n[0] += n[1] >>> 16),
      (n[1] &= 65535),
      (n[1] += m[2] * v[2]),
      (n[0] += n[1] >>> 16),
      (n[1] &= 65535),
      (n[1] += m[3] * v[1]),
      (n[0] += n[1] >>> 16),
      (n[1] &= 65535),
      (n[0] += m[0] * v[3] + m[1] * v[2] + m[2] * v[1] + m[3] * v[0]),
      (n[0] &= 65535),
      [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
    );
  };
  /**
   * @param {!Object} m
   * @param {number} n
   * @return {?}
   */
  var find = function (m, n) {
    return 32 === (n = n % 64)
      ? [m[1], m[0]]
      : n < 32
      ? [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
      : ((n = n - 32),
        [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]);
  };
  /**
   * @param {?} m
   * @param {number} n
   * @return {?}
   */
  var copy = function (m, n) {
    console.log(m, n);
    return 0 === (n = n % 64)
      ? m
      : n < 32
      ? [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
      : [m[1] << (n - 32), 0];
  };
  /**
   * @param {!Array} event
   * @param {!Array} obj
   * @return {?}
   */
  var extend = function (event, obj) {
    return [event[0] ^ obj[0], event[1] ^ obj[1]];
  };
  /**
   * @param {!Array} data
   * @return {?}
   */
  var split = function (data) {
    return (
      (data = extend(data, [0, data[0] >>> 1])),
      (data = get(data, [4283543511, 3981806797])),
      (data = extend(data, [0, data[0] >>> 1])),
      (data = get(data, [3301882366, 444984403])),
      (data = extend(data, [0, data[0] >>> 1]))
    );
  };
  /**
   * @return {?}
   */
  var parse = function () {
    return (function (input, b) {
      console.log("L468", input, b);
      b = b || 0;
      /** @type {number} */
      var padding = (input = input || "").length % 16;
      /** @type {number} */
      var bits = input.length - padding;
      /** @type {!Array} */
      var name = [0, b];
      /** @type {!Array} */
      var value = [0, b];
      /** @type {!Array} */
      var e = [0, 0];
      /** @type {!Array} */
      var result = [0, 0];
      /** @type {!Array} */
      var end = [2277735313, 289559509];
      /** @type {!Array} */
      var c = [1291169091, 658871167];
      /** @type {number} */
      var i = 0;
      for (; i < bits; i = i + 16) {
        /** @type {!Array} */
        e = [
          (255 & input.charCodeAt(i + 4)) |
            ((255 & input.charCodeAt(i + 5)) << 8) |
            ((255 & input.charCodeAt(i + 6)) << 16) |
            ((255 & input.charCodeAt(i + 7)) << 24),
          (255 & input.charCodeAt(i)) |
            ((255 & input.charCodeAt(i + 1)) << 8) |
            ((255 & input.charCodeAt(i + 2)) << 16) |
            ((255 & input.charCodeAt(i + 3)) << 24),
        ];
        /** @type {!Array} */
        result = [
          (255 & input.charCodeAt(i + 12)) |
            ((255 & input.charCodeAt(i + 13)) << 8) |
            ((255 & input.charCodeAt(i + 14)) << 16) |
            ((255 & input.charCodeAt(i + 15)) << 24),
          (255 & input.charCodeAt(i + 8)) |
            ((255 & input.charCodeAt(i + 9)) << 8) |
            ((255 & input.charCodeAt(i + 10)) << 16) |
            ((255 & input.charCodeAt(i + 11)) << 24),
        ];
        e = get(e, end);
        e = find(e, 31);
        e = get(e, c);
        name = extend(name, e);
        name = find(name, 27);
        name = expect(name, value);
        name = expect(get(name, [0, 5]), [0, 1390208809]);
        result = get(result, c);
        result = find(result, 33);
        result = get(result, end);
        value = extend(value, result);
        value = find(value, 31);
        value = expect(value, name);
        value = expect(get(value, [0, 5]), [0, 944331445]);
      }
      switch (((e = [0, 0]), (result = [0, 0]), padding)) {
        case 15:
          result = extend(result, copy([0, input.charCodeAt(i + 14)], 48));
        case 14:
          result = extend(result, copy([0, input.charCodeAt(i + 13)], 40));
        case 13:
          result = extend(result, copy([0, input.charCodeAt(i + 12)], 32));
        case 12:
          result = extend(result, copy([0, input.charCodeAt(i + 11)], 24));
        case 11:
          result = extend(result, copy([0, input.charCodeAt(i + 10)], 16));
        case 10:
          result = extend(result, copy([0, input.charCodeAt(i + 9)], 8));
        case 9:
          result = extend(result, [0, input.charCodeAt(i + 8)]);
          result = get(result, c);
          result = find(result, 33);
          result = get(result, end);
          value = extend(value, result);
        case 8:
          e = extend(e, copy([0, input.charCodeAt(i + 7)], 56));
        case 7:
          e = extend(e, copy([0, input.charCodeAt(i + 6)], 48));
        case 6:
          e = extend(e, copy([0, input.charCodeAt(i + 5)], 40));
        case 5:
          e = extend(e, copy([0, input.charCodeAt(i + 4)], 32));
        case 4:
          e = extend(e, copy([0, input.charCodeAt(i + 3)], 24));
        case 3:
          e = extend(e, copy([0, input.charCodeAt(i + 2)], 16));
        case 2:
          e = extend(e, copy([0, input.charCodeAt(i + 1)], 8));
        case 1:
          e = extend(e, [0, input.charCodeAt(i)]);
          e = get(e, end);
          e = find(e, 31);
          e = get(e, c);
          name = extend(name, e);
      }
      return (
        (name = extend(name, [0, input.length])),
        (value = extend(value, [0, input.length])),
        (name = expect(name, value)),
        (value = expect(value, name)),
        (name = split(name)),
        (value = split(value)),
        (name = expect(name, value)),
        (value = expect(value, name)),
        ("00000000" + (name[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (name[1] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (value[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (value[1] >>> 0).toString(16)).slice(-8)
      );
    })(canvasElement.toDataURL());
  };
  /**
   * @return {?}
   */
  var render = function () {
    !(function () {
      /** @type {number} */
      (canvasElement = document.createElement("canvas")).width = 240;
      /** @type {number} */
      canvasElement.height = 140;
      /** @type {string} */
      canvasElement.style.display = "inline";
      var opt_handler = canvasElement.getContext("2d");
      if (null != opt_handler) {
        ctx = opt_handler;
      }
    })();
    var e = {
      winding: false,
      data: "",
    };
    return ctx && canvasElement.toDataURL
      ? (ctx.rect(0, 0, 10, 10),
        ctx.rect(2, 2, 6, 6),
        (e.winding = false === ctx.isPointInPath(5, 5, "evenodd")),
        (ctx.textBaseline = "alphabetic"),
        (ctx.fillStyle = "#f60"),
        ctx.fillRect(125, 1, 62, 20),
        (ctx.fillStyle = "#069"),
        (ctx.font = "11pt no-real-font-123"),
        ctx.fillText("Cwm fjordbank \ud83d\ude03 gly", 2, 15),
        (ctx.fillStyle = "rgba(102, 204, 0, 0.2)"),
        (ctx.font = "18pt Arial"),
        ctx.fillText("Cwm fjordbank \ud83d\ude03 gly", 4, 45),
        (ctx.globalCompositeOperation = "multiply"),
        (ctx.fillStyle = "rgb(255,0,255)"),
        ctx.beginPath(),
        ctx.arc(50, 50, 50, 0, 2 * Math.PI, true),
        ctx.closePath(),
        ctx.fill(),
        (ctx.fillStyle = "rgb(0,255,255)"),
        ctx.beginPath(),
        ctx.arc(100, 50, 50, 0, 2 * Math.PI, true),
        ctx.closePath(),
        ctx.fill(),
        (ctx.fillStyle = "rgb(255,255,0)"),
        ctx.beginPath(),
        ctx.arc(75, 100, 50, 0, 2 * Math.PI, true),
        ctx.closePath(),
        ctx.fill(),
        (ctx.fillStyle = "rgb(255,0,255)"),
        ctx.arc(75, 75, 75, 0, 2 * Math.PI, true),
        ctx.arc(75, 75, 25, 0, 2 * Math.PI, true),
        ctx.fill("evenodd"),
        (e.data = parse()),
        e)
      : e;
  };
  /**
   * @return {?}
   */
  var check = function () {
    if (
      "Microsoft Internet Explorer" === navigator.appName ||
      ("Netscape" === navigator.appName && /Trident/.test(navigator.userAgent))
    ) {
      return [];
    }
    if (null != navigator.plugins) {
      /** @type {!Array} */
      var available = [];
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var patchLen = navigator.plugins.length;
      for (; i < patchLen; i++) {
        if (navigator.plugins[i]) {
          available.push(navigator.plugins[i]);
        }
      }
      return next(available, function (plugin) {
        var url = next(plugin, function (item) {
          return {
            type: item.type,
            suffixes: item.suffixes,
          };
        });
        return {
          name: plugin.name,
          description: plugin.description,
          mimeTypes: url,
        };
      });
    }
  };
  /** @type {!Navigator} */
  var na = navigator;
  /** @type {!Window} */
  var win = window;
  /** @type {!Navigator} */
  var n = navigator;
  /** @type {!Window} */
  var scope = window;
  /**
   * @return {?}
   */
  var login = function () {
    return new Promise(function (callback, canCreateDiscussions) {
      var filename = prompt(100);
      /** @type {!Array} */
      var path = [];
      /** @type {number} */
      var o = 0;
      for (; o < 1e3; o++) {
        path.push(filename);
      }
      /** @type {string} */
      var loghistory = path.join();
      /** @type {!Array} */
      var svcs = [];
      try {
        /** @type {number} */
        var c = 0;
        for (; c < 30; c++) {
          var s = prompt(10);
          localStorage.setItem(s, loghistory);
          svcs.push(s);
        }
        return callback(true);
      } catch (t) {
        return callback(false);
      } finally {
        svcs.forEach(function (mirrorName) {
          localStorage.removeItem(mirrorName);
        });
      }
    });
  };
  /**
   * @return {?}
   */
  var _init = function () {
    return "safari" in window ? checkPermissions() : config();
  };
  /**
   * @return {?}
   */
  var checkPermissions = function () {
    return new Promise(function (callback, canCreateDiscussions) {
      try {
        window.safari.pushNotification.requestPermission(
          "https://example.com",
          "private",
          {},
          function () {}
        );
      } catch (t) {
        if (callback(t)) {
          callback(false);
        } else {
          callback(true);
        }
      }
    });
  };
  /**
   * @return {?}
   */
  var config = function () {
    return new Promise(function (saveNotifs, obtainGETData) {
      remove()
        .then(function (data) {
          var pkValue = data[0];
          var passid = data[1];
          saveNotifs(pkValue / passid > 5 || passid < 9);
        })
        .catch(function (val) {
          return obtainGETData(val);
        });
    });
  };
  /**
   * @return {?}
   */
  var start = function () {
    return new Promise(function (cb, canCreateDiscussions) {
      try {
        window.openDatabase(null, null, null, null);
      } catch (t) {
        return cb(true);
      }
      try {
        return (
          window.localStorage.setItem("test", "1"),
          window.localStorage.removeItem("test"),
          cb(false)
        );
      } catch (t) {
        return cb(true);
      }
    });
  };
  /**
   * @return {?}
   */
  var tourPointLayerLoaded = function () {
    /** @type {(Array<string>|null)} */
    var cache_message = navigator.userAgent.match(
      /Version\/([0-9\._]+).*Safari/
    );
    if (!cache_message) {
      throw "UserAgent is not Safari";
    }
    /** @type {!Array<?>} */
    var version = cache_message[1].split(".").map(function (value) {
      return isNaN(parseInt(value)) ? 0 : parseInt(value);
    });
    return {
      major: version[0],
      minor: version[1],
      patch: version[2],
    };
  };
  /**
   * @param {string} size
   * @return {?}
   */
  var create = function (size) {
    return new Promise(function (resolve, callback) {
      /** @type {number} */
      var n_ref = performance.now();
      /** @type {string} */
      var path = "m-" + Date.now() + "-" + size;
      var request = window.indexedDB.open(path, 1);
      /**
       * @param {?} event
       * @return {undefined}
       */
      request.onupgradeneeded = function (event) {
        /** @type {number} */
        var n = performance.now() - n_ref;
        resolve([path, n]);
      };
      /**
       * @param {?} theError
       * @return {undefined}
       */
      request.onerror = function (theError) {
        callback(theError);
      };
      /**
       * @return {undefined}
       */
      request.onsuccess = function () {};
    });
  };
  /**
   * @return {?}
   */
  var remove = function () {
    return new Promise(function (moment, saveNotifs) {
      create("1")
        .then(function (translates) {
          var strchoose = translates[0];
          var strifoundthat = translates[1];
          create("2").then(function (data) {
            var passid = data[0];
            var i = data[1];
            [strchoose, passid].forEach(function (cur) {
              return deleteDatabase(cur);
            });
            moment([strifoundthat, i]);
          });
        })
        .catch(function (notifications) {
          return saveNotifs(notifications);
        });
    });
  };
  /**
   * @param {?} dbName
   * @return {?}
   */
  var deleteDatabase = function (dbName) {
    return new Promise(function (removeDoneCallback, callback) {
      var dbOpen = window.indexedDB.deleteDatabase(dbName);
      /**
       * @return {undefined}
       */
      dbOpen.onsuccess = function () {
        removeDoneCallback();
      };
      /**
       * @param {?} theError
       * @return {undefined}
       */
      dbOpen.onerror = function (theError) {
        callback(theError);
      };
    });
  };
  /**
   * @param {?} result
   * @return {?}
   */
  var callback = function (result) {
    return new RegExp(
      [103, 101, 115, 116, 117, 114, 101]
        .map(function (code21) {
          return String.fromCharCode(code21);
        })
        .join("")
    ).test(result);
  };
  /**
   * @return {?}
   */
  var init = function () {
    try {
      return definition()
        ? new Promise(function (saveNotifs, canCreateDiscussions) {
            if (iOSInfo() >= 76) {
              setPrefs().then(function (notifications) {
                return saveNotifs(notifications);
              });
            } else {
              window.webkitRequestFileSystem(
                0,
                1,
                function () {
                  saveNotifs(false);
                },
                function () {
                  saveNotifs(true);
                }
              );
            }
          })
        : /Apple/.test(navigator.vendor) && /Safari/.test(navigator.userAgent)
        ? (function () {
            var adbVersion = tourPointLayerLoaded();
            return adbVersion.major < 13
              ? start()
              : 13 == adbVersion.major && 0 === adbVersion.minor
              ? login()
              : _init();
          })()
        : "MozAppearance" in document.documentElement.style
        ? new Promise(function (callback, canCreateDiscussions) {
            try {
              var idb_req = window.indexedDB.open("test");
              /**
               * @return {?}
               */
              idb_req.onerror = function () {
                return callback(true);
              };
              /**
               * @return {?}
               */
              idb_req.onsuccess = function () {
                return callback(false);
              };
            } catch (t) {
              return callback(true);
            }
          })
        : (function () {
            /** @type {string} */
            var ua = navigator.userAgent.toLowerCase();
            if (0 === ua.indexOf("msie") && 0 === ua.indexOf("trident")) {
              return false;
            }
            /** @type {(Array<string>|null)} */
            var isOpera = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
            if (isOpera && parseInt(isOpera[1], 10) >= 10) {
              return true;
            }
            /** @type {(Array<string>|null)} */
            var isAOS = /edge/.exec(ua);
            return !(!isAOS || "edge" != isAOS[0]);
          })()
        ? new Promise(function (sessionMiddleware, canCreateDiscussions) {
            try {
              if (!window.indexedDB) {
                return sessionMiddleware(true);
              }
            } catch (t) {
              return sessionMiddleware(true);
            }
            return sessionMiddleware(false);
          })
        : Promise.resolve(false);
    } catch (val) {
      return Promise.reject(val);
    }
  };
  /**
   * @param {string} permanent
   * @return {undefined}
   */
  var closeCustomDateModal = function (permanent) {
    try {
      localStorage.setItem("_inc", permanent);
    } catch (e) {}
  };
  /**
   * @return {?}
   */
  var getCompoundIndex = function () {
    try {
      var e = localStorage.getItem("_inc");
      return e ? !(!e || "1" != e) : null;
    } catch (e) {
      return null;
    }
  };
  /** @type {!Window} */
  var global = window;
  /** @type {!HTMLDocument} */
  var doc = document;
  /** @type {!Navigator} */
  var nav = navigator;
  /** @type {!Array} */
  var handlersIndex = [
    {
      key: "k1",
    },
    {
      key: "k2",
    },
    {
      key: "k3",
    },
    {
      key: "k4",
    },
    {
      key: "k5",
    },
    {
      key: "k6",
    },
    {
      key: "k7",
    },
    {
      key: "k8",
    },
    {
      key: "k9",
    },
    {
      key: "k10",
    },
    {
      key: "k11",
    },
    {
      key: "k12",
    },
    {
      key: "k13",
    },
    {
      key: "k14",
    },
    {
      key: "k15",
    },
    {
      key: "k16",
      default: [],
    },
    {
      key: "k17",
    },
    {
      key: "k18",
    },
    {
      key: "k19",
    },
    {
      key: "k20",
      default: [],
    },
    {
      key: "k21",
      default: -1,
    },
    {
      key: "k22",
    },
    {
      key: "k23",
    },
    {
      key: "k24",
    },
    {
      key: "k25",
    },
    {
      key: "k26",
    },
    {
      key: "k27",
    },
    {
      key: "k28",
    },
    {
      key: "k29",
    },
    {
      key: "k30",
    },
    {
      key: "k31",
    },
    {
      key: "k32",
    },
    {
      key: "k33",
    },
  ];
  var obj = {
    k1: function (navigate) {
      navigate(nav.oscpu);
    },
    k2: function (require) {
      /** @type {!Array} */
      var cards = [
        [
          nav.language ||
            nav.userLanguage ||
            nav.browserLanguage ||
            nav.systemLanguage,
        ],
      ];
      if (Array.isArray(nav.languages)) {
        cards.push(nav.languages);
      } else {
        if ("string" == typeof nav.languages) {
          var p = nav.languages;
          if (p.length > 0) {
            cards.push(p.split(","));
          }
        }
      }
      return require(cards);
    },
    k3: function (saveNotifs) {
      saveNotifs(global.screen.colorDepth);
    },
    k4: function (navigate) {
      navigate(nav.deviceMemory);
    },
    k5: function (saveNotifs) {
      saveNotifs(
        [
          parseInt(global.screen.width.toString()),
          parseInt(global.screen.height.toString()),
        ]
          .sort()
          .reverse()
      );
    },
    k6: function (saveNotifs) {
      if (global.screen.availWidth && global.screen.availHeight) {
        saveNotifs(
          [
            parseInt(global.screen.availHeight.toString()),
            parseInt(global.screen.availWidth.toString()),
          ]
            .sort()
            .reverse()
        );
      } else {
        saveNotifs([]);
      }
    },
    k7: function (pixelToTime) {
      try {
        /** @type {number} */
        var width = parseInt(nav.hardwareConcurrency.toString());
        pixelToTime(isNaN(width) ? 1 : width);
      } catch (t) {
        pixelToTime(1);
      }
    },
    k8: function (saveNotifs) {
      saveNotifs(new Date().getTimezoneOffset());
    },
    k9: function (isNaN) {
      var timeZone;
      if (global.Intl && global.Intl.DateTimeFormat) {
        timeZone = new global.Intl.DateTimeFormat().resolvedOptions().timeZone;
      }
      isNaN(timeZone);
    },
    k10: function (saveNotifs) {
      /** @type {number} */
      var notifications = 1;
      try {
        /** @type {number} */
        notifications = global.sessionStorage ? 1 : 0;
      } catch (e) {}
      saveNotifs(notifications);
    },
    k11: function (saveNotifs) {
      /** @type {number} */
      var notifications = 1;
      try {
        /** @type {number} */
        notifications = global.localStorage ? 1 : 0;
      } catch (e) {}
      saveNotifs(notifications);
    },
    k12: function (saveNotifs) {
      /** @type {number} */
      var notifications = 1;
      try {
        /** @type {number} */
        notifications = global.indexedDB ? 1 : 0;
      } catch (e) {}
      saveNotifs(notifications);
    },
    k13: function (saveNotifs) {
      saveNotifs(global.openDatabase ? 1 : 0);
    },
    k14: function (navigate) {
      navigate(nav.cpuClass);
    },
    k15: function (expect) {
      expect(nav.platform);
    },
    k16: function (done) {
      done(check());
    },
    k17: function (lm) {
      lm(render());
    },
    k18: function (saveNotifs) {
      saveNotifs(
        (function () {
          /** @type {!Element} */
          var ads = document.createElement("div");
          /** @type {string} */
          ads.innerHTML = "&nbsp;";
          /** @type {string} */
          ads.className = "adsbox";
          /** @type {boolean} */
          var t = false;
          try {
            document.body.appendChild(ads);
            /** @type {boolean} */
            t = 0 == document.getElementsByClassName("adsbox")[0].offsetHeight;
            document.body.removeChild(ads);
          } catch (e) {
            /** @type {boolean} */
            t = false;
          }
          return t ? 1 : 0;
        })()
      );
    },
    k19: function (saveNotifs) {
      saveNotifs(
        (function () {
          var event;
          /** @type {number} */
          var maxTouchPoints = 0;
          if (void 0 !== na.maxTouchPoints) {
            /** @type {number} */
            maxTouchPoints = na.maxTouchPoints;
          } else {
            if (void 0 !== na.msMaxTouchPoints) {
              /** @type {number} */
              maxTouchPoints = na.msMaxTouchPoints;
            }
          }
          try {
            document.createEvent("TouchEvent");
            /** @type {boolean} */
            event = true;
          } catch (t) {
            /** @type {boolean} */
            event = false;
          }
          return {
            maxTouchPoints: maxTouchPoints,
            touchEvent: event,
            touchStart: "ontouchstart" in win,
          };
        })()
      );
    },
    k20: function (onDestroyed) {
      !(function (destroyed) {
        /** @type {!Array} */
        var baseFonts = ["monospace", "sans-serif", "serif"];
        /** @type {!Array} */
        var args = [
          "sans-serif-thin",
          "ARNO PRO",
          "Agency FB",
          "Arabic Typesetting",
          "Arial Unicode MS",
          "AvantGarde Bk BT",
          "BankGothic Md BT",
          "Batang",
          "Bitstream Vera Sans Mono",
          "Calibri",
          "Century",
          "Century Gothic",
          "Clarendon",
          "EUROSTILE",
          "Franklin Gothic",
          "Futura Bk BT",
          "Futura Md BT",
          "GOTHAM",
          "Gill Sans",
          "HELV",
          "Haettenschweiler",
          "Helvetica Neue",
          "Humanst521 BT",
          "Leelawadee",
          "Letter Gothic",
          "Levenim MT",
          "Lucida Bright",
          "Lucida Sans",
          "Menlo",
          "MS Mincho",
          "MS Outlook",
          "MS Reference Specialty",
          "MS UI Gothic",
          "MT Extra",
          "MYRIAD PRO",
          "Marlett",
          "Meiryo UI",
          "Microsoft Uighur",
          "Minion Pro",
          "Monotype Corsiva",
          "PMingLiU",
          "Pristina",
          "SCRIPTINA",
          "Segoe UI Light",
          "Serifa",
          "SimHei",
          "Small Fonts",
          "Staccato222 BT",
          "TRAJAN PRO",
          "Univers CE 55 Medium",
          "Vrinda",
          "ZWAdobeF",
        ];
        /** @type {!Element} */
        var r = document.getElementsByTagName("body")[0];
        /** @type {!Element} */
        var o = document.createElement("div");
        /** @type {!Element} */
        var form = document.createElement("div");
        var defaultWidth = {};
        var defaultHeight = {};
        /**
         * @return {?}
         */
        var render = function () {
          /** @type {!Element} */
          var node = document.createElement("span");
          return (
            (node.style.position = "absolute"),
            (node.style.left = "-9999px"),
            (node.style.fontSize = "48px"),
            (node.style.fontStyle = "normal"),
            (node.style.fontWeight = "normal"),
            (node.style.letterSpacing = "normal"),
            (node.style.lineBreak = "auto"),
            (node.style.lineHeight = "normal"),
            (node.style.textTransform = "none"),
            (node.style.textAlign = "left"),
            (node.style.textDecoration = "none"),
            (node.style.textShadow = "none"),
            (node.style.whiteSpace = "normal"),
            (node.style.wordBreak = "normal"),
            (node.style.wordSpacing = "normal"),
            (node.innerHTML = "mmMwWLliI0O&1"),
            node
          );
        };
        /**
         * @param {string} flightPhase
         * @param {string} navigationLibrary
         * @return {?}
         */
        var init = function (flightPhase, navigationLibrary) {
          var testNode = render();
          return (
            (testNode.style.fontFamily =
              "'" + flightPhase + "'," + navigationLibrary),
            testNode
          );
        };
        /**
         * @param {!NodeList} main
         * @return {?}
         */
        var f = function (main) {
          /** @type {boolean} */
          var resultToDisplay = false;
          /** @type {number} */
          var i = 0;
          for (; i < baseFonts.length; i++) {
            if (
              (resultToDisplay =
                main[i].offsetWidth !== defaultWidth[baseFonts[i]] ||
                main[i].offsetHeight !== defaultHeight[baseFonts[i]])
            ) {
              return resultToDisplay;
            }
          }
          return resultToDisplay;
        };
        var fontSpans = (function () {
          /** @type {!Array} */
          var noDupes = [];
          /** @type {number} */
          var j = 0;
          /** @type {number} */
          var numDefaultFonts = baseFonts.length;
          for (; j < numDefaultFonts; j++) {
            var el = render();
            el.style.fontFamily = baseFonts[j];
            o.appendChild(el);
            noDupes.push(el);
          }
          return noDupes;
        })();
        r.appendChild(o);
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var length = baseFonts.length;
        for (; i < length; i++) {
          defaultWidth[baseFonts[i]] = fontSpans[i].offsetWidth;
          defaultHeight[baseFonts[i]] = fontSpans[i].offsetHeight;
        }
        var t = (function () {
          var hash = {};
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var arg_count = args.length;
          for (; i < arg_count; i++) {
            /** @type {!Array} */
            var r = [];
            /** @type {number} */
            var j = 0;
            /** @type {number} */
            var numDefaultFonts = baseFonts.length;
            for (; j < numDefaultFonts; j++) {
              var inp = init(args[i], baseFonts[j]);
              form.appendChild(inp);
              r.push(inp);
            }
            /** @type {!Array} */
            hash[args[i]] = r;
          }
          return hash;
        })();
        r.appendChild(form);
        /** @type {!Array} */
        var blackList = [];
        /** @type {number} */
        var x = 0;
        /** @type {number} */
        var xlen = args.length;
        for (; x < xlen; x++) {
          console.log(t[args[x]]);
          if (f(t[args[x]])) {
            blackList.push(args[x]);
          }
        }
        r.removeChild(form);
        r.removeChild(o);
        destroyed(blackList);
      })(onDestroyed);
    },
    k21: function (e) {
      !(function (e) {
        console.log(e);
        if (n.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
          return e(-1);
        }
        var indexedDbProviderTest_Context =
          scope.OfflineAudioContext || scope.webkitOfflineAudioContext;
        if (null == indexedDbProviderTest_Context) {
          return e(-2);
        }
        var context = new indexedDbProviderTest_Context(1, 44100, 44100);
        var osc = context.createOscillator();
        /** @type {string} */
        osc.type = "triangle";
        osc.frequency.setValueAtTime(1e4, context.currentTime);
        var node = context.createDynamicsCompressor();
        forEach(
          [
            ["threshold", -50],
            ["knee", 40],
            ["ratio", 12],
            ["reduction", -20],
            ["attack", 0],
            ["release", 0.25],
          ],
          function (times) {
            if (
              void 0 !== node[times[0]] &&
              "function" == typeof node[times[0]].setValueAtTime
            ) {
              node[times[0]].setValueAtTime(times[1], context.currentTime);
            }
          }
        );
        osc.connect(node);
        node.connect(context.destination);
        osc.start(0);
        context.startRendering();
        /** @type {number} */
        var autoResumeTimer = setTimeout(function () {
          return (context.oncomplete = function () {}), e(-3);
        }, 1e3);
        /**
         * @param {?} event
         * @return {?}
         */
        context.oncomplete = function (event) {
          var HeaderBar;
          try {
            clearTimeout(autoResumeTimer);
            HeaderBar = event.renderedBuffer
              .getChannelData(0)
              .slice(4500, 5e3)
              .reduce(function (htmlbuffer, i) {
                return htmlbuffer + Math.abs(i);
              }, 0);
            osc.disconnect();
            node.disconnect();
          } catch (t) {
            return void e(-4);
          }
          e(HeaderBar);
        };
      })(e);
    },
    k22: function (saveNotifs) {
      saveNotifs(void 0 !== nav.plugins ? 1 : 0);
    },
    k23: function (navigate) {
      navigate(nav.productSub);
    },
    k24: function (Clazz_newIntArray) {
      Clazz_newIntArray(eval.toString().length);
    },
    k25: function (invalidArgumentCallback) {
      var next_argument;
      try {
        throw "a";
      } catch (e) {
        try {
          e.toSource();
          /** @type {boolean} */
          next_argument = true;
        } catch (e) {
          /** @type {boolean} */
          next_argument = false;
        }
      }
      invalidArgumentCallback(next_argument ? 1 : 0);
    },
    k26: function (saveNotifs) {
      saveNotifs(void 0 !== nav.webdriver ? 1 : 0);
    },
    k27: function (contains) {
      contains(navigator.vendor);
    },
    k28: function (saveNotifs) {
      saveNotifs(void 0 !== global.chrome ? 1 : 0);
    },
    k29: function (saveNotifs) {
      nav.permissions
        .query({
          name: "notifications",
        })
        .then(function (inAgent) {
          if (
            "denied" === Notification.permission &&
            "prompt" === inAgent.state
          ) {
            saveNotifs(1);
          } else {
            saveNotifs(0);
          }
        });
    },
    k30: function (saveNotifs) {
      /** @type {!Array} */
      var updateElementsText = [
        "webdriver" in global,
        "_Selenium_IDE_Recorder" in global,
        "callSelenium" in global,
        "_selenium" in global,
        "__webdriver_script_fn" in doc,
        "__driver_evaluate" in doc,
        "__webdriver_evaluate" in doc,
        "__selenium_evaluate" in doc,
        "__fxdriver_evaluate" in doc,
        "__driver_unwrapped" in doc,
        "__webdriver_unwrapped" in doc,
        "__selenium_unwrapped" in doc,
        "__fxdriver_unwrapped" in doc,
        "__webdriver_script_func" in doc,
        null !== doc.documentElement.getAttribute("selenium"),
        null !== doc.documentElement.getAttribute("webdriver"),
        null !== doc.documentElement.getAttribute("driver"),
      ];
      forEach(updateElementsText, function (canCreateDiscussions) {
        if (canCreateDiscussions) {
          saveNotifs(1);
        }
      });
      saveNotifs(0);
    },
    k31: function (setVersionText) {
      new Promise(function (cb, canCreateDiscussions) {
        var fields = getCompoundIndex();
        if (null === fields) {
          init()
            .then(function (fallbackReleases) {
              closeCustomDateModal(fallbackReleases ? "1" : "0");
              cb(fallbackReleases);
            })
            .catch(function (canCreateDiscussions) {
              cb(false);
            });
        } else {
          cb(fields);
        }
      })
        .then(function (usingWorker) {
          setVersionText(usingWorker ? 1 : 0);
        })
        .catch(function () {
          setVersionText(0);
        });
    },
    k32: function (invalidArgumentCallback) {
      try {
        /** @type {string} */
        document.cookie = "cookietest=1";
        /** @type {boolean} */
        var next_argument = -1 !== document.cookie.indexOf("cookietest=");
        /** @type {string} */
        document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
        invalidArgumentCallback(next_argument ? 1 : 0);
      } catch (t) {
        invalidArgumentCallback(0);
      }
    },
    k33: function (saveNotifs) {
      saveNotifs(
        (function () {
          if (!definition()) {
            return false;
          }
          try {
            if (
              [66, 114, 97, 118, 101]
                .map(function (code21) {
                  return String.fromCharCode(code21);
                })
                .join("") in window
            ) {
              return true;
            }
            /** @type {!Element} */
            var canvasElement = document.createElement("canvas");
            /** @type {number} */
            canvasElement.width = 4;
            /** @type {number} */
            canvasElement.height = 4;
            /** @type {string} */
            canvasElement.style.display = "inline";
            var hostname = canvasElement.toDataURL();
            if ("" == hostname) {
              return true;
            }
            var element = window.atob(hostname.split(",")[1]);
            var len = element.length;
            /** @type {!Uint8Array} */
            var a = new Uint8Array(len);
            /** @type {number} */
            var t = 0;
            for (; t < len; t++) {
              a[t] = element.charCodeAt(t);
            }
            var c = b(a, [73, 68, 65, 84, 24]);
            if (-1 == c) {
              return false;
            }
            var i = b(a, [73, 69, 78, 68]);
            return (
              -1 != c &&
              1321 !=
                a.slice(c + 5, i).reduce(function (buckets, name) {
                  return buckets + name;
                }, 0)
            );
          } catch (e) {
            return false;
          }
        })()
          ? 1
          : 0
      );
    },
  };
  var Buffer = (function () {
    /**
     * @param {string} options
     * @return {undefined}
     */
    function FirebaseApp(options) {
      this.options = options || {};
    }
    return (
      Object.defineProperty(FirebaseApp.prototype, "ip", {
        get: function () {
          return this.options.ip || "city";
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(FirebaseApp.prototype, "debug", {
        get: function () {
          return this.options.debug || false;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(FirebaseApp.prototype, "timeout", {
        get: function () {
          return this.options.timeout || 1e4;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(FirebaseApp.prototype, "tag", {
        get: function () {
          if (this.options.tag) {
            return "object" == typeof this.options.tag
              ? this.options.tag
              : {
                  tag: this.options.tag,
                };
          }
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(FirebaseApp.prototype, "linkedId", {
        get: function () {
          return this.options.linkedId;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(FirebaseApp.prototype, "disableTls", {
        get: function () {
          return this.options.disableTls || false;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(FirebaseApp.prototype, "callbackData", {
        get: function () {
          return !!this.options.callbackData;
        },
        enumerable: false,
        configurable: true,
      }),
      FirebaseApp
    );
  })();
  var mockObjectLoader = (function () {
    /**
     * @param {!Object} c
     * @return {undefined}
     */
    function e(c) {
      send(c);
      /** @type {!Object} */
      this.config = c;
      this.config.timeoutDelay = c.timeoutDelay || 50;
    }
    return (
      (e.load = function (a) {
        return new Promise(function (b, cb) {
          try {
            send(a);
          } catch (iconCtx) {
            return cb(iconCtx);
          }
          var n = new e(a);
          if (window.requestIdleCallback) {
            window.requestIdleCallback(function () {
              b(n);
            });
          } else {
            setTimeout(function () {
              b(n);
            }, n.config.timeoutDelay);
          }
        });
      }),
      (e.prototype.send = function (message) {
        var options = this;
        var response = new Buffer(message);
        return new Promise(function (should, expect) {
          /** @type {number} */
          var autoResumeTimer = setTimeout(function () {
            var m = {
              error: "Timeout",
              reason: response.timeout + "ms elapsed",
            };
            return expect(m);
          }, response.timeout);
          /** @type {boolean} */
          var key = true;
          if (message && message.disableTls) {
            /** @type {boolean} */
            key = false;
          }
          /** @type {!Promise} */
          var value = key
            ? new Promise(function (failure, callback) {
                /** @type {!XMLHttpRequest} */
                var xhr = new XMLHttpRequest();
                /** @type {number} */
                var autoResumeTimer = setTimeout(function () {
                  callback("Timeout");
                  xhr.abort();
                }, 5e3);
                xhr.open("GET", "https://api.sjpf.io");
                xhr.addEventListener("error", function () {
                  return callback("Connection error");
                });
                xhr.addEventListener("timeout", function () {
                  return callback("Timeout");
                });
                xhr.addEventListener("abort", function () {
                  return callback("Abort");
                });
                /**
                 * @return {undefined}
                 */
                xhr.onreadystatechange = function () {
                  if (xhr.readyState == XMLHttpRequest.DONE) {
                    clearTimeout(autoResumeTimer);
                    if (200 == xhr.status) {
                      failure(xhr.responseText);
                    } else {
                      if (xhr.status >= 300) {
                        callback(xhr.responseText);
                      }
                    }
                  }
                };
                try {
                  xhr.send();
                } catch (e) {
                  clearTimeout(autoResumeTimer);
                  try {
                    var identifierPositions = e.message.slice(0, 255);
                    return callback(identifierPositions);
                  } catch (e) {}
                }
              })
            : Promise.resolve("");
          /** @type {number} */
          var duedate = Date.now();
          !(function (resolveCB) {
            /** @type {number} */
            var startTime = Date.now();
            /** @type {!Array} */
            var results = [];
            /** @type {number} */
            var j = -1;
            /**
             * @return {undefined}
             */
            var check = function () {
              if ((j = j + 1) >= handlersIndex.length) {
                resolveCB(results);
              } else {
                var i = handlersIndex[j];
                try {
                  obj[i.key](function (command_module_id) {
                    /** @type {number} */
                    var touchTime = Date.now() - startTime;
                    results.push({
                      key: i.key,
                      value: command_module_id,
                      duration: touchTime,
                    });
                    /** @type {number} */
                    startTime = Date.now();
                    check();
                  });
                } catch (e) {
                  results.push({
                    key: i.key,
                    value: i.default,
                  });
                  check();
                }
              }
            };
            check();
          })(function (hiddenSid) {
            /** @type {number} */
            var timeSubmittedDiff = Date.now() - duedate;
            var wr = new ConcreteResolver(
              response,
              options.config,
              timeSubmittedDiff,
              hiddenSid
            );
            value
              .then(function (currentTime) {
                console.log(currentTime, "dsa");
                return (wr.tls = currentTime);
              })
              .catch(function (currentTime) {
                return (wr.tlsError = currentTime);
              })
              .finally(function () {
                nunjucksInjector(
                  getEndpoint(options.config),
                  wr.buildRaw(options.config.cookieKey)
                )
                  .then(function (request) {
                    if (request.error) {
                      return expect(request);
                    }
                    success(
                      request.visitorId,
                      options.config.cookieDomain,
                      options.config.cookieKey
                    );
                    clearTimeout(autoResumeTimer);
                    should(fn(request, response.tag));
                  })
                  .catch(function (args) {
                    expect(fn(args, response.tag));
                  });
              });
          });
        });
      }),
      e
    );
  })();
  /**
   * @param {!Object} ctx
   * @return {undefined}
   */
  var send = function (ctx) {
    if (!ctx) {
      throw new Error("config cannot be empty");
    }
    if (!ctx.client) {
      throw new Error("config.client cannot be empty");
    }
    if ("" == ctx.client) {
      throw new Error("config.client cannot be empty");
    }
  };
  /**
   * @param {!Object} r
   * @param {string} n
   * @return {?}
   */
  var fn = function (r, n) {
    return n && (r.tag = n), r;
  };
  /**
   * @param {!Object} options
   * @return {?}
   */
  var getEndpoint = function (options) {
    if (options.endpoint) {
      return options.endpoint;
    }
    /** @type {string} */
    var transform = "api.fpjs.io";
    return (
      options.region &&
        "us" != options.region &&
        (transform = options.region + "." + transform),
      "https://" + transform
    );
  };
  var NotFunctionError = (function () {
    /**
     * @param {!Object} properties
     * @return {undefined}
     */
    function Model(properties) {
      /** @type {!Object} */
      this.properties = properties;
    }
    return (
      Object.defineProperty(Model.prototype, "client", {
        get: function () {
          return this.properties.client;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(Model.prototype, "autoSend", {
        get: function () {
          return this.properties.autoSend;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(Model.prototype, "loaded", {
        get: function () {
          return (result = this.properties.loaded) &&
            result.constructor &&
            result.call &&
            result.apply
            ? this.properties.loaded
            : function (controlChild) {};
          var result;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(Model.prototype, "region", {
        get: function () {
          return this.properties.region;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(Model.prototype, "endpoint", {
        get: function () {
          return this.properties.endpoint;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(Model.prototype, "cookieDomain", {
        get: function () {
          return this.properties.cookieDomain;
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(Model.prototype, "cookieKey", {
        get: function () {
          return this.properties.cookieKey;
        },
        enumerable: false,
        configurable: true,
      }),
      (Model.prototype.isValid = function () {
        return this.client && this.client.toString().length >= 8;
      }),
      Model
    );
  })();
  var self = (function () {
    var e = {};
    if (window.fpLayer && window.fpLayer.length) {
      /** @type {number} */
      var i = 0;
      for (; i < window.fpLayer.length; i++) {
        var theline = window.fpLayer[i];
        if ("config" === theline[0]) {
          var a = theline[1];
          var b = theline[2];
          e[a] = b;
        }
      }
    }
    return new NotFunctionError(e);
  })();
  var threads_element = mockObjectLoader.load(self);
  threads_element
    .then(function (control) {
      self.loaded(control);
      if (self.autoSend) {
        control.send();
      }
    })
    .catch(function (selector) {
      if (self.autoSend) {
        $("Configuration snippet is missing or invalid");
        $(selector);
      }
    });
  /** @type {string} */
  f.NotAvailable = "n/a";
  /** @type {string} */
  f.TimeoutError = "Timeout";
  /**
   * @param {!Object} e
   * @return {?}
   */
  f.send = function (e) {
    return (
      e &&
        e.debug &&
        $(
          "Using the global FP object is deprecated and will be removed in v3 of the agent."
        ),
      new Promise(function (saveNotifs, obtainGETData) {
        threads_element
          .then(function (r) {
            console.log(r);
            r.send(e)
              .then(function (notifications) {
                return saveNotifs(notifications);
              })
              .catch(function (val) {
                return obtainGETData(val);
              });
          })
          .catch(function (val) {
            return obtainGETData(val);
          });
      })
    );
  };
  Object.defineProperty(f, "__esModule", {
    value: true,
  });
});
