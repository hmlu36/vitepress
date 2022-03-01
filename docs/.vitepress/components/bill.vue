<template>
  <label><input type="radio" name="billType" value="Gas" v-model="billType" @click="getBillData" />瓦斯</label>
  <label><input type="radio" name="billType" value="Water" v-model="billType" @click="getBillData"/>水費</label>
  <label><input type="radio" name="billType" value="Electricity" v-model="billType" @click="getBillData"/>電費</label>
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
import { onMounted, computed, ref } from "vue";
import axios from "axios";

import VueHighcharts from "vue3-highcharts";

export default {
  data: () => ({
    records: [],
  }),
  components: {
    VueHighcharts,
  },
  setup() {
    const billData = ref([]);
    const billType = ref("Gas");
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_APP_ID_BILL}/${
      billType.value
    }`;
    const getBillData = async () => {
      console.log(billType.value);
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_APP_KEY,
            "Content-Type": "application/json",
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

    const seriesData = ref([25, 39, 30, 15]);
    const categories = ref(["Jun", "Jul", "Aug", "Sept"]);

    const chartOptions = computed(() => ({
      chart: {
        type: "line",
      },
      title: {
        text: "年月",
      },
      xAxis: {
        categories: billData.value
          .map((entry) => entry.年月)
          .sort((a, b) => a.localeCompare(b)),
      },
      yAxis: {
        title: {
          text: "費用",
        },
      },
      series: [
        {
          name: "帳單資訊",
          data: billData.value.map((entry) => Number(entry.費用)),
        },
      ],
    }));

    return { chartOptions, getBillData, billType };
  },
};
</script>
