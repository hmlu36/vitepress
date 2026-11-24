<template>
  <div class="seat-page">
    <img class="seat-map" :src="`${baseUrl}4.24盧鄭府喜宴.jpg`" alt="婚宴座位圖" />
    <div class="seat-search">
      <input v-model="searchName" @keyup.enter="search" placeholder="輸入姓名搜尋桌位" />
      <button type="button" @click="search">搜尋</button>
      <span v-if="searchResult" class="search-result">{{ searchResult }}</span>
    </div>
    <div class="seat-grid">
      <section v-for="(people, table) in seats" :key="table" class="seat-table">
        <h3>{{ table.replace(/<br\s*\/?\s*>/gi, ' ') .replace(/&nbsp;/g, ' ') }}</h3>
        <div class="seat-people">
          <span v-for="(person, index) in people" :key="`${table}-${index}`">{{ person }}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchName: "",
      searchResult: "",
      baseUrl: import.meta.env.BASE_URL,
      seats: {
        "主桌<br/>&nbsp;12人": [
          "盧泓民",
          "鄭佳恩",
          "盧新發",
          "鄭信一",
          "盧麗女",
          "蕭淑珠",
          "盧黃素姻",
          "盧正壽",
          "蕭家勝",
          "蕭家欽",
          "蕭家輝",
          "六叔公",
        ],
        "1.復興國小1<br/>&nbsp;10人": [
          "杜雨霖",
          "陳玟君",
          "陳春利",
          "余宗勳",
          "廖彬村",
          "邱麗珠",
          "周萌姿",
          "李瑞香",
          "曾振升",
          "柯奉成",
        ],
        "2.男方親戚<br/>&nbsp;7人, 1嬰, 1素": [
          "盧昶羽",
          "盧正壽妻",
          "盧文玲",
          "張文彥",
          "親家母",
          "盧文萱",
          "蔡佳晃",
          "蔡鈞宇(嬰)",
          "親家母(素)",
        ],
        "3.女方三舅家<br/>&nbsp;8人, 2嬰": [
          "順聰1",
          "順聰2",
          "順聰3",
          "順聰4",
          "順聰5(嬰)",
          "順榮1",
          "順榮2",
          "順榮3(嬰)",
          "三舅媽",
          "全恩",
        ],
        "5.復興國小2<br/>&nbsp;10人, 1嬰, 1素": [
          "郭柏陞1",
          "郭柏陞2",
          "張喜凰1",
          "張喜凰2(嬰)",
          "沈素玲",
          "黃君怡1",
          "黃君怡2",
          "林俐妡",
          "林佳誼(素)",
          "林清安",
          "魏淑玲",
          "卓小真",
        ],
        "6.男方朋友<br/>男方教會&nbsp;11人": [
          "謝俊彥",
          "鍾傑安",
          "李昱勳",
          "許碩容",
          "張文宣",
          "林宏昇",
          "洪明智",
          "黃瓊玉",
          "呂宛蓉",
          "陳冠蓁",
          "楊景翔",
        ],
        "7.女方大舅家<br/>&nbsp;9人, 1嬰": [
          "雅文1",
          "雅文2",
          "雅文3",
          "雅文4",
          "雅文5(嬰)",
          "雅心",
          "翔文1",
          "翔文2",
          "大舅媽",
          "瑛泓",
        ],
        "8.女方朋友<br/>&nbsp;9人, 1嬰": [
          "王建勛1",
          "王建勛2",
          "王建勛3",
          "王建勛4(嬰)",
          "洪美連1",
          "洪美連2",
          "洪美連3",
          "林佳蓁1",
          "林佳蓁2",
          "林佳蓁3",
        ],
        "9.泰瑞公司<br/>&nbsp;10人": [
          "許正登",
          "魏經理",
          "麗月1",
          "麗月2",
          "秀美1",
          "秀美2",
          "淑芬1",
          "淑芬2",
          "小慧1",
          "小慧2",
        ],
        "10.蕭家長輩<br/>&nbsp;10人": [
          "三姑婆1",
          "三姑婆2",
          "五叔公1",
          "五叔公2",
          "五姑婆1",
          "五姑婆2",
          "六嬸婆",
          "二舅媽1",
          "二舅媽2",
          "葉舫",
        ],
        "11.中師團契與<br/>女方教會&nbsp;10人, 2嬰": [
          "丁奕瑄",
          "謝芳瑾",
          "何俞萱1",
          "何俞萱2",
          "陳境峰1",
          "陳境峰2",
          "張哲維1",
          "張哲維2",
          "郭進福1",
          "郭進福2",
          "郭進福3(嬰)",
          "郭進福4(嬰)",
        ],
        "12.女方家人<br/>&nbsp;10人": [
          "鄭仰恩1",
          "鄭仰恩2",
          "鄭仰恩3",
          "鄭仰恩4",
          "親家1",
          "親家2",
          "麗馨",
          "寶貴",
          "秀惠",
          "溪松",
        ],
        "13.女方娜玲家<br/>&nbsp;10人": [
          "娜玲1",
          "娜玲2",
          "信溢1",
          "信溢2",
          "信溢3",
          "信溢4",
          "信偉",
          "娜莉",
          "淑貞1",
          "淑貞2",
        ],
        "14.女方教會<br/>與朋友&nbsp;10人, 1嬰": [
          "駱建文1",
          "駱建文2",
          "曾煒婷",
          "林志豪",
          "黃美芳1",
          "黃美芳2",
          "王淳韻1",
          "王淳韻2",
          "王淳韻3",
          "王淳韻4",
          "王淳韻5(嬰)",
        ],
        "15.女方教會<br/>&nbsp;10人, 1嬰": [
          "孫千蕙1",
          "孫千蕙2",
          "宋昀臻",
          "黃盈慈",
          "雍雅嵐1",
          "雍雅嵐2",
          "雍雅嵐3",
          "雍雅嵐4(嬰)",
          "陳恩佩",
          "許君芳1",
          "許君芳2",
        ],
        "16.女方大姊家<br/>&nbsp;10人": [
          "碧霞",
          "碧香1",
          "碧香2",
          "碧音1",
          "碧音2",
          "瑞仁1",
          "瑞仁2",
          "瑞和",
          "淑娥1",
          "淑娥2",
        ],
      },
    };
  },
  methods: {
    search() {
      const query = this.searchName.trim();
      const match = Object.entries(this.seats).find(([, people]) =>
        people.some((person) => person.includes(query)),
      );
      this.searchResult = query
        ? match
          ? `「${query}」請至 ${match[0].replace(/<br\s*\/?\s*>/gi, ' ').replace(/&nbsp;/g, ' ')}`
          : `找不到「${query}」的座位資料`
        : '';
    },
  },
};
</script>

<style scoped>
.seat-page {
  width: 100%;
}

.seat-map {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
}

.seat-search {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.seat-search input {
  min-width: 14rem;
  padding: 0.6rem 0.8rem;
}

.seat-search button {
  padding: 0.6rem 1rem;
  border: 0;
  border-radius: 4px;
  background: #890025;
  color: white;
  cursor: pointer;
}

.search-result {
  color: #890025;
  font-weight: 700;
}

.seat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
}

.seat-table {
  overflow: hidden;
  border: 1px solid #aaa;
  text-align: center;
}

.seat-table h3 {
  margin: 0;
  padding: 0.75rem;
  background: #890025;
  color: #ecd7d0;
  font-size: 1rem;
  font-weight: 500;
}

.seat-people {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.seat-people span {
  padding: 0.5rem 0.25rem;
  border-top: 1px solid #ddd;
  color: #222;
}
</style>
