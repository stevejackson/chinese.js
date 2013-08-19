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
  // def test_speed
  //   entries = words = ["果断", "过度", "过渡", "过奖", "过滤", "过失", "过问", "过瘾", "过于", "嗨", "海拔",
  //     "海滨", "含糊", "寒暄", "含义", "罕见", "捍卫", "航空", "行列", "航天", "航行", "豪迈", "毫米",
  //     "毫无", "耗费", "好客", "号召", "呵", "和蔼", "合并", "合成", "合乎", "合伙", "和解", "和睦", "和气",
  //     "合身", "合算", "和谐", "嘿", "痕迹", "狠心", "恨不得", "哼", "哄", "烘", "轰动", "红包", "宏观",
  //     "洪水", "宏伟", "喉咙", "吼", "后代", "后顾之忧", "后勤", "候选", "忽略", "呼啸", "呼吁", "胡乱",
  //     "湖泊", "互联网", "华丽", "华侨", "化肥", "划分", "画蛇添足", "化石", "话筒", "化验", "化妆", "怀孕",
  //     "欢乐", "环节", "还原", "缓和", "患者", "荒凉", "慌忙", "荒谬", "荒唐", "黄昏", "恍然大悟", "辉煌",
  //     "挥霍", "回报", "回避", "回顾", "回收", "悔恨", "毁灭", "汇报", "贿赂", "会晤", "昏迷", "浑身", "混合",
  //     "混乱", "混淆", "混浊", "活该", "活力", "火箭", "火焰", "火药", "货币", "或许", "基地", "机动", "饥饿",
  //     "激发", "机构", "机关", "基金", "激励", "机灵", "机密", "激情", "讥笑", "机械", "基因", "机遇", "机智",
  //     "即便", "级别", "疾病", "嫉妒", "极端", "急功近利", "籍贯", "即将", "急剧", "急切", "集团", "极限",
  //     "吉祥", "急于求成", "及早", "急躁", "给予", "继承", "季度", "忌讳", "计较", "寂静", "季军", "技能",
  //     "技巧", "寄托", "继往开来", "迹象", "记性", "纪要", "记载", "家常", "加工", "家伙", "加剧", "家属",
  //     "空虚", "孔", "恐吓", "恐惧", "空白", "空隙", "口气", "口腔", "口头", "口音", "枯竭", "枯燥", "苦尽甘来"]

  //   Hanzi.load_data

  //   time = Benchmark.realtime {
  //     entries.each do |word|
  //       Hanzi.matching_entries(word)
  //     end
  //   }

  //   assert time < 0.01, "Lookups took #{time}s, should be less than 0.01s"
  // end

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