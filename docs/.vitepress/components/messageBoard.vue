<template>
  <div>
    <!--
    <b-carousel
      :interval="5000"
      img-width="88%"
      img-height="45%"
      style="text-shadow: 0.1px 0.1px 0.1px #333"
      background="rgba(255,255,255, 0.2)"
    >
      <template v-for="record in records">
        <b-carousel-slide img-blank>
          <div class="content">
            <div class="message">{{ record.想對我們說的話 }}</div>
            <div class="signature">{{ record.姓名 }}({{ record.與新人關係 }})</div>
          </div>
        </b-carousel-slide>
      </template>
    </b-carousel>
    -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    records: [],
  }),
  methods: {
    loadData() {
      axios
        .get(`https://api.airtable.com/v0/${import.meta.env.VITE_APP_ID_WEDDINGFORM}/WeddingForm`, {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_APP_KEY,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          let data = response.data.records;
          this.records = data
            .map((record) => record.fields)
            .filter((record) => !!record.想對我們說的話);
          //console.log(JSON.stringify(this.records));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.loadData();
    /*
    // 移除theme-default-content, 畫面寬的限制
    let defaultContent = document.getElementsByClassName("theme-default-content")[0];
    defaultContent.className = "";
    */
  },
};
</script>

<style scoped>
.content {
  color: #c69c56;
}

.message {
  text-align: left;
}

.signature {
  text-align: right;
}

@media (min-width: 320px) {
  .message {
    font-size: 32px;
  }

  .signature {
    font-size: 24px;
  }
}

@media (min-width: 640px) {
  .message {
    font-size: 36px;
  }

  .signature {
    font-size: 28px;
  }
}

@media (min-width: 1280px) {
  .message {
    font-size: 40px;
  }

  .signature {
    font-size: 32px;
  }
}

@media (min-width: 2560px) {
  .message {
    font-size: 48px;
  }

  .signature {
    font-size: 36px;
  }
}
</style>
