<template>
  <label>
    <input
      type="radio"
      name="billType-radio"
      value="Gas"
      v-model="billType"
      @click="getBillData($event)"
    />瓦斯</label
  >&emsp;
  <label>
    <input
      type="radio"
      name="billType-radio"
      value="Water"
      v-model="billType"
      @click="getBillData($event)"
    />水費</label
  >&emsp;
  <label>
    <input
      type="radio"
      name="billType-radio"
      value="Electricity"
      v-model="billType"
      @click="getBillData($event)"
    />電費</label
  >
  <br />
  <highcharts
    :constructor-type="'chart'"
    :options="chartOptions"
  ></highcharts>
</template>

<script>
import { defineComponent } from 'vue';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';

export default defineComponent({
  name: 'Bill',
  components: {
    highcharts: HighchartsVue.component
  },
  data() {
    return {
      billType: '',
      chartOptions: {
        // 定義你的圖表選項
      }
    };
  },
  methods: {
    getBillData(event) {
      // 實現獲取賬單數據的邏輯
    }
  }
});
</script>