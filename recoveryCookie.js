class SavedCookieSid {
  constructor() {
    this._cookieObj = {
      isAccess: this.checkCookie(),
      value: null,
    };
    this._localStorage = {
      isAccess: this.checkLocalStorage(),
      value: null,
    };
    this._sessionStorage = {
      isAccess: this.checkSessionStorage(),
      value: null,
    };
    this._indexDB = {
      isAccess: this.checkIndexDB(),
      value: null,
    };
    this.keys = ["_cookieObj", "_localStorage", "_sessionStorage", "_indexDB"];
  }

  checkLocalStorage() {
    return "localStorage" in window && !!window.localStorage;
  }
  checkCookie() {
    return "cookie" in document && !!document.cookie;
  }
  checkSessionStorage() {
    return "sessionStorage" in window && !!window.sessionStorage;
  }
  async checkIndexDB() {
    return await new Promise(function (resolve, reject) {
      if (!("indexedDB" in window && !!window.indexedDB)) return false;
      try {
        var idb_req = window.indexedDB.open("test");
        idb_req.onerror = function () {
          resolve(false);
        };
        idb_req.onsuccess = function () {
          resolve(true);
        };
      } catch (t) {
        resolve(false);
      }
    });
  }

  isKeyInLocalStorage(key) {
    return localStorage.getItem(key);
  }
  isKeyInCookie(key) {
    var match = document.cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));
    if (match) return match[2];
    return null;
  }

  isKeySessionStorage(key) {
    return sessionStorage.getItem(key);
  }
  returnValueByKeyOutIndexedDB(db, key) {
    var tmp = db.transaction([key], "readwrite");
    var store = tmp.objectStore(key);
    console.log(store);
  }
  isKeyIndexDB(key) {
    try {
      let oRequest = indexedDB.open("myDatabase");
      oRequest.onupgradeneeded = function () {
        let db = oRequest.result;
        db.createObjectStore("myStore", { keyPath: key });
      };
      oRequest.onsuccess = function () {
        let db = oRequest.result;
        let tx = db.transaction("myStore", "readonly");
        let st = tx.objectStore("myStore");
        let gRequest = st.get(key);
        gRequest.onsuccess = function () {
          return gRequest.result;
        };
        gRequest.onerror = function () {
          return null;
        };
      };
      oRequest.onerror = function () {
        return null;
      };
    } catch (e) {}
  }

  saveValueLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }
  saveValueCookie(key, value) {
    let options = {};
    const d = new Date();
    if (typeof expires == "number" && expires) {
      d.setTime(d.getTime() + 3600 * 1000 * 24 * 365 * expires);
      expires = options.expires = d;
    } else {
      d.setTime(d.getTime() + 3600 * 1000 * 24 * 365 * 5);
      options.expires = expires = d;
    }

    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = key + "=" + value;

    for (var propName in options) {
      updatedCookie += "; " + propName;

      var propValue = options[propName];

      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie + "; path=/;";
  }
  saveValueSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
  }
  saveValueIndexedDB(key, value) {
    try {
      let oRequest = indexedDB.open("myDatabase", 3);
      oRequest.onupgradeneeded = function () {
        let db = oRequest.result;
        db.createObjectStore("myStore", { keyPath: key });
      };
      oRequest.onsuccess = function () {
        let db = oRequest.result;
        let tx = db.transaction("myStore", "readwrite");
        let st = tx.objectStore("myStore");
        try {
          let sRequest = st.put(value);
          sRequest.onsucce0ss = function () {};
          sRequest.onerror = function () {};
        } catch (e) {}
      };
      oRequest.onerror = function () {};
    } catch (e) {}
  }

  getSidInStoreges() {
    if (this._cookieObj.value) return this._cookieObj.value;
    if (this._localStorage.value) return this._localStorage.value;
    if (this._sessionStorage.value) return this._sessionStorage.value;
    if (this._indexDB.value) return this._indexDB.value;

    return null;
  }

  init(sidName, funcGenerate) {
    this._cookieObj.value = this._cookieObj.isAccess
      ? this.isKeyInCookie(sidName)
      : null;
    this._localStorage.value = this._localStorage.isAccess
      ? this.isKeyInLocalStorage(sidName)
      : null;
    this._sessionStorage.value = this._sessionStorage
      ? this.isKeySessionStorage(sidName)
      : null;
    this._indexDB.isAccess.then((bool) => {
      if (bool) {
        this._indexDB.value = this.isKeyIndexDB(sidName);
      }
    });
    this._indexDB.value = this._indexDB.isAccess
      ? this.isKeySessionStorage(sidName)
      : null;
    if (
      !this._cookieObj.value &&
      !this._localStorage.value &&
      !this._sessionStorage.value &&
      !this._indexDB.value
    ) {
      return null;
    }
    var result = this.getSidInStoreges();
    if (result) {
      if (!this._cookieObj.value) {
        this.saveValueCookie(sidName, result);
      }
      if (!this._localStorage.value) {
        this.saveValueLocalStorage(sidName, result);
      }
      if (!this._sessionStorage.value) {
        this.saveValueSessionStorage(sidName, result);
      }
      if (!this._indexDB.value) {
        this.saveValueIndexedDB(sidName, result);
      }
    }

    return result;
  }
  savedAllObjects(sidName, result) {
    if (!this._cookieObj.value) {
      this.saveValueCookie(sidName, result);
    }
    if (!this._localStorage.value) {
      this.saveValueLocalStorage(sidName, result);
    }
    if (!this._sessionStorage.value) {
      this.saveValueSessionStorage(sidName, result);
    }
    if (!this._indexDB.value) {
      this.saveValueIndexedDB(sidName, result);
    }
  }
}

window.SavedCookieSid = SavedCookieSid;
