<template>
  <label
    ><input
      type="radio"
      name="billType-radio"
      value="Gas"
      v-model="billType"
      @click="getBillData($event)"
    />瓦斯</label
  >&emsp;
  <label
    ><input
      type="radio"
      name="billType-radio"
      value="Water"
      v-model="billType"
      @click="getBillData($event)"
    />水費</label
  >&emsp;
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
  components: {
    VueHighcharts,
  },
};
</script>

<script setup>
import { onMounted, computed, ref } from 'vue';

const billData = ref([]);
const billType = ref('Gas');

const getBillData = async (event) => {
  const dataType = event == undefined ? 'Gas' : event.target.value;
  console.log(dataType);
  billType.value = dataType;

  const appId = import.meta.env.VITE_APP_ID_BILL || import.meta.env.VITE_APP_ID;
  const token = import.meta.env.VITE_AIRTABLE_TOKEN || import.meta.env.VITE_APP_KEY;
  const url = `https://api.airtable.com/v0/${appId}/${dataType}?maxRecords=100&view=data`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) throw new Error(`Airtable request failed: ${response.status}`);
    const result = await response.json();
    billData.value = result.records
      .map((entry) => entry.fields)
      .sort((a, b) => a.年月.localeCompare(b.年月));
    console.log(JSON.stringify(billData.value));
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
