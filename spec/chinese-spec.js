describe("Chinese", function() {
  var ch;

  beforeEach(function() {
    ch = new Chinese();
  });

  it("should init data", function() {
    expect(Object.keys(Chinese.prototype.dictionary).length).toBeGreaterThan(10000);
  });

  describe("English translations", function() {

    it("can return English translation", function() {
      var result = ch.toEnglish('你好');
      expect(result).toEqual('Hello!/Hi!/How are you?');
    });

    it("returns nil for not found", function() {
      var result = ch.toEnglish('老子你好');
      expect(result).toBeNull();
    });

  });

  describe("Pinyin conversion", function() {

    it("can convert with tones", function() {
      var result = ch.toPinyin('为什么');
      expect(result).toEqual('wei4shen2me5');
    });

    it("second word", function() {
      var result = ch.toPinyin('走红');
      expect(result).toEqual('zou3hong2');
    });

    it("can convert traditional", function() {
      var result = ch.toPinyin('简单');
      expect(result).toEqual('jian3dan1');
    });

    it("can convert with surrounding english", function() {
      var result = ch.toPinyin('no! 为什么！');
      expect(result).toEqual('no! wei4shen2me5！');
    });

    it("can convert sentence of hanzi", function() {
      var result = ch.toPinyin('你好， 我是康昱辰。');
      expect(result).toEqual('ni3hao3， wo3shi4kang1yu4chen2。');
    });

  });

  describe("Matching entries", function() {

    it("should find all matching entries", function() {
      var results = ch.getMatchingEntries('着');
      expect(results.length).toEqual(4);
    });

  });

  describe("Simplified/traditional conversions", function() {

    it("can convert from simplified to traditional", function() {
      var result = ch.toTraditional('拉萨');
      expect(result).toEqual('拉薩');
    });

    it("can convert traditional to traditional", function() {
      var result = ch.toTraditional('拉薩');
      expect(result).toEqual('拉薩');
    });

    it("can convert traditional to simplified", function() {
      var result = ch.toSimplified('拉薩');
      expect(result).toEqual('拉萨');
    });

    it("cannot convert non-exact words to simplified", function() {
      var result = ch.toSimplified('拉萨喜欢');
      expect(result).toBeNull();
    });
  });

  describe("determine beginning word", function() {

    it("can determine beginning word", function() {
      expect(ch.determineBeginningWord('喜欢')).toEqual(2);
      expect(ch.determineBeginningWord('喜欢什么')).toEqual(2);
      expect(ch.determineBeginningWord('我喜欢')).toEqual(1);
      expect(ch.determineBeginningWord('变')).toEqual(1);
      expect(ch.determineBeginningWord('变成男人')).toEqual(2);
    });

  });

});