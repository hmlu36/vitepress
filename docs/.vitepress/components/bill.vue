<template>
  <label
    ><input
      type="radio"
      name="billType-radio"
      value="Gas"
      v-model="billType"
      @change="getBillData"
    />瓦斯</label
  >&emsp;
  <label
    ><input
      type="radio"
      name="billType-radio"
      value="Water"
      v-model="billType"
      @change="getBillData"
    />水費</label
  >&emsp;
  <label
    ><input
      type="radio"
      name="billType-radio"
      value="Electricity"
      v-model="billType"
      @change="getBillData"
    />電費</label
  >
  <br />
  <div>
    <!-- 使用動態組件 :is 來加載 HighchartsVue -->
    <component :is="HighchartsVue" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
import axios from 'axios';


// 動態導入 HighchartsVue
const HighchartsVue = defineAsyncComponent(() => import('highcharts-vue'));

const billData = ref([]);
const billType = ref('Gas');

const getBillData = async () => {
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_APP_ID_BILL}/${billType.value}?maxRecords=100&view=data`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + import.meta.env.VITE_AIRTALBE_API_KEY,
        'Content-Type': 'application/json',
      },
    });
    billData.value = response.data.records
      .map((entry) => entry.fields)
      .sort((a, b) => a.年月.localeCompare(b.年月));
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  getBillData();
});

const chartOptions = computed(() => ({
  chart: {
    type: 'line',
  },
  title: {
    text: '年月',
  },
  xAxis: {
    categories: billData.value.map((entry) => entry.年月),
  },
  yAxis: {
    title: {
      text: '費用',
      align: 'high',
      offset: 0,
      rotation: 0,
      y: -10,
    },
  },
  series: [
    {
      name: '帳單資訊',
      data: billData.value.map((entry) => Number(entry.費用)),
    },
  ],
}));

</script>
