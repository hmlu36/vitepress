<template>
  <label
    ><input
      type="radio"
      name="billType-radio"
      value="Gas"
      v-model="billType"
      @click="getBillData($event)"
    />瓦斯</label
  >
  <label
    ><input
      type="radio"
      name="billType-radio"
      value="Water"
      v-model="billType"
      @click="getBillData($event)"
    />水費</label
  >
  <label
    ><input
      type="radio"
      name="billType-radio"
      value="Electricity"
      v-model="billType"
      @click="getBillData($event)"
    />電費</label
  >
  <br />
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
  />
</template>

<script>
import VueHighcharts from 'vue3-highcharts';
export default {
  name: 'VueHighcharts',
};
</script>

<script setup>
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';

const billData = ref([]);
const billType = ref('Gas');

const getBillData = async (event) => {
  const dataType = event == undefined ? 'Gas' : event.target.value;
  console.log(dataType);
  billType.value = dataType;

  const url = `https://api.airtable.com/v0/${
    import.meta.env.VITE_APP_ID_BILL
  }/${dataType}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY,
        'Content-Type': 'application/json',
      },
    });
    billData.value = response.data.records.map((entry) => entry.fields);
    console.log(JSON.stringify(billData.value.map((entry) => entry.年月)));
  } catch (e) {
    console.log(e);
  }
};

onMounted(async () => {
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
    categories: billData.value
      .map((entry) => entry.年月)
      .sort((a, b) => a.localeCompare(b)),
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
