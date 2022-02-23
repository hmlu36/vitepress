<template>
  <div>
    <DoughnutChart :chartData="testData" />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import axios from 'axios';

import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  data: () => ({
    records: [],
  }),
  components: { DoughnutChart },
  async setup() {
    const billData = async (billType) => {
      const url = `https://api.airtable.com/v0/${
        import.meta.env.VITE_APP_ID_BILL
      }/${typeof billType !== 'undefined' ? billType : 'Gas'}`;
      console.log(url);
      return await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY,
          'Content-Type': 'application/json',
        },
      });
    };

    console.log(
      JSON.stringify(
        (await billData()).data.records.map((entry) => entry.fields)
      )
    );

    const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED',
          ],
        },
      ],
    };

    return { testData , billData};
    onMounted(() => {});
  },
};
</script>
