var FingerCaltat = require("./fingerCaltat");

describe("Test finger lib", function () {
  beforeAll(function () {
    Object.defineProperty(window, "webkitRequestFileSystem", {
      writable: true,
      value: true,
    });
  });
  it("FingerCaltat defined", function () {
    expect(new FingerCaltat()).toBeDefined();
  });
  it("The method checkIsWebkitRequestFileSystem checks whether the file system is available from the browser", function () {
    var fc = new FingerCaltat();

    expect(fc.checkIsWebkitRequestFileSystem()).toBe(true);
  });
  describe("The method getVersionChrome return version chrome browser and if he not chrom then UserAgent", function () {
    it("The method getVersionChrome return is UserAgent is not Google Chrome", function () {
      var fc = new FingerCaltat();

      expect(function () {
        fc.getVersionChrome();
      }).toThrow();
    });
    it("The method getVersionChrome return version chrome version", function () {
      var fc = new FingerCaltat();
      Object.defineProperty(navigator, "userAgent", {
        writable: true,
        value:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
      });

      var result = fc.getVersionChrome();

      expect(result).toBe(83);
    });
  });
  describe("Test isUsingStorage", function () {
    it("The method isUsingStorage return false", function () {
      var fc = new FingerCaltat();
      fc.isUsingStorage().then(function (bool) {
        expect(bool).toBe(false);
      });
    });
    // TODO: Test for return true
  });
  it("The method transformKObject implementation forEach and return copy array", function () {
    var fc = new FingerCaltat();

    var arr = [
      {
        key: "k1",
        value: "1",
      },
      {
        key: "k2",
        value: "1",
      },
      {
        key: "k3",
        value: "1",
      },
      {
        key: "k4",
        value: "1",
      },
      {
        key: "k5",
        value: "1",
      },
      {
        key: "k6",
        value: "1",
      },
      {
        key: "k7",
        value: "1",
      },
      {
        key: "k8",
        value: "1",
      },
      {
        key: "k9",
        value: "1",
      },
      {
        key: "k10",
        value: "1",
      },
      {
        key: "k11",
        value: "1",
      },
      {
        key: "k12",
        value: "1",
      },
      {
        key: "k13",
        value: "1",
      },
      {
        key: "k14",
        value: "1",
      },
      {
        key: "k15",
        value: "1",
      },
      {
        key: "k16",
        default: [],
        value: "1",
      },
      {
        key: "k17",
        value: "1",
      },
      {
        key: "k18",
        value: "1",
      },
      {
        key: "k19",
        value: "1",
      },
      {
        key: "k20",
        value: "1",
      },
      {
        key: "k21",
        value: "1",
      },
      {
        key: "k22",
        value: "1",
      },
      {
        key: "k23",
        value: "1",
      },
      {
        key: "k24",
        value: "1",
      },
      {
        key: "k25",
        value: "1",
      },
      {
        key: "k26",
        value: "1",
      },
      {
        key: "k27",
        value: "1",
      },
      {
        key: "k28",
        value: "1",
      },
      {
        key: "k29",
        value: "1",
      },
      {
        key: "k30",
        value: "1",
      },
      {
        key: "k31",
        value: "1",
      },
      {
        key: "k32",
        value: "1",
      },
      {
        key: "k33",
        value: "1",
      },
    ];

    var exampleArr = {
      k1: "1",
      k2: "1",
      k3: "1",
      k4: "1",
      k5: "1",
      k6: "1",
      k7: "1",
      k8: "1",
      k9: "1",
      k10: "1",
      k11: "1",
      k12: "1",
      k13: "1",
      k14: "1",
      k15: "1",
      k16: "1",
      k17: "1",
      k18: "1",
      k19: "1",
      k20: "1",
      k21: "1",
      k22: "1",
      k23: "1",
      k24: "1",
      k25: "1",
      k26: "1",
      k27: "1",
      k28: "1",
      k29: "1",
      k30: "1",
      k31: "1",
      k32: "1",
      k33: "1",
    };

    const mocksArr = {};

    fc.transformKObject(arr, function (item) {
      mocksArr[item.key] = item.value;
    });

    expect(mocksArr).toEqual(exampleArr);
  });
  it("The method maps return empty array", function () {
    var fc = new FingerCaltat();
    var n = null;

    var result = fc.maps(n, function () {});

    expect(result).toEqual([]);
  });
  it("The method сomparingTwoArrayse return -1", function () {
    var fc = new FingerCaltat();
    var arrOne = [];
    var arrTwo = [];

    var result = fc.сomparingTwoArrayse(arrOne, arrTwo);

    expect(result).toBe(-1);
  });
  it("The method сomparingTwoArrayse return 37", function () {
    var fc = new FingerCaltat();
    var arrayUint8 = [
      137,
      80,
      78,
      71,
      13,
      10,
      26,
      10,
      0,
      0,
      0,
      13,
      73,
      72,
      68,
      82,
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      4,
      8,
      6,
      0,
      0,
      0,
      169,
      241,
      158,
      126,
      0,
      0,
      0,
      15,
      73,
      68,
      65,
      84,
      24,
      87,
      99,
      100,
      64,
      3,
      140,
      164,
      11,
      0,
      0,
      0,
      238,
      0,
      5,
      45,
      166,
      3,
      196,
      0,
      0,
      0,
      0,
      73,
      69,
      78,
      68,
      174,
      66,
      96,
      130,
    ];
    var arrTwo = [73, 68, 65, 84, 24];

    var result = fc.сomparingTwoArrayse(arrayUint8, arrTwo);

    expect(result).toBe(37);
  });
  it("The method сomparingTwoArrayse return 64", function () {
    var fc = new FingerCaltat();
    var arrayUint8 = [
      137,
      80,
      78,
      71,
      13,
      10,
      26,
      10,
      0,
      0,
      0,
      13,
      73,
      72,
      68,
      82,
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      4,
      8,
      6,
      0,
      0,
      0,
      169,
      241,
      158,
      126,
      0,
      0,
      0,
      15,
      73,
      68,
      65,
      84,
      24,
      87,
      99,
      100,
      64,
      3,
      140,
      164,
      11,
      0,
      0,
      0,
      238,
      0,
      5,
      45,
      166,
      3,
      196,
      0,
      0,
      0,
      0,
      73,
      69,
      78,
      68,
      174,
      66,
      96,
      130,
    ];
    var arrTwo = [73, 69, 78, 68];

    var result = fc.сomparingTwoArrayse(arrayUint8, arrTwo);

    expect(result).toBe(64);
  });
  it("The method getCookieValue return omnomnomn the key hi", function () {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value: "fake=1;hi=omnomnomn",
    });
    var fc = new FingerCaltat();
    var key = "hi";

    var result = fc.getCookieValue(key);

    expect(result).toBe("omnomnomn");
  });
  it("The method saveCookieAndLocalStorage save localStorage and save cookie", function () {
    var mockFn = { setItem: jest.fn() };
    var fc = new FingerCaltat();

    fc.saveCookieAndLocalStorage(
      mockFn,
      "dwadasdas",
      "http://google.com",
      "_id"
    );

    expect(mockFn.setItem).toBeCalled();
  });
  it("The method getLocaleStorageItem called func", function () {
    var mockFn = { getItem: jest.fn() };
    var fc = new FingerCaltat();

    fc.getLocaleStorageItem(mockFn, "h1");

    expect(mockFn.getItem).toBeCalled();
  });
  it("The method getLocaleStorageItem return value", function () {
    var mockFn = {
      getItem: function () {
        return "mocked";
      },
    };
    var fc = new FingerCaltat();

    var result = fc.getLocaleStorageItem(mockFn);

    expect(result).toBe("mocked");
  });
});
