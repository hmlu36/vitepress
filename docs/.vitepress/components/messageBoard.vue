<template>
  <div class="message-board" aria-live="polite">
    <p v-if="loading" class="status">正在載入留言…</p>
    <p v-else-if="errorMessage" class="status error">{{ errorMessage }}</p>
    <p v-else-if="records.length === 0" class="status">目前還沒有留言。</p>

    <ul v-else class="message-list">
      <li v-for="record in records" :key="record.id" class="message-card">
        <p class="message">{{ record.想對我們說的話 }}</p>
        <p class="signature">
          {{ record.姓名 }}<span v-if="record.與新人關係">（{{ record.與新人關係 }}）</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({ records: [], loading: true, errorMessage: '' }),
  methods: {
    async loadData() {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${import.meta.env.VITE_APP_ID_WEDDINGFORM}/WeddingForm`,
          {
          headers: {
              Authorization: 'Bearer ' + import.meta.env.VITE_AIRTABLE_TOKEN,
              'Content-Type': 'application/json',
            },
          },
        );
        if (!response.ok) throw new Error(`Airtable request failed: ${response.status}`);

        const data = await response.json();
        this.records = data.records
          .filter((record) => record.fields.想對我們說的話)
          .map((record) => ({ id: record.id, ...record.fields }));
      } catch (error) {
        console.error('無法載入留言：', error);
        this.errorMessage = '留言載入失敗，請稍後再試。';
      } finally {
        this.loading = false;
      }
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
.message-board {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

.message-list {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.message-card {
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(198, 156, 86, 0.45);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  color: #765a2b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.message {
  margin: 0;
  text-align: left;
  line-height: 1.8;
  white-space: pre-wrap;
}

.signature {
  margin: 0.75rem 0 0;
  text-align: right;
  font-weight: 600;
}

.status {
  padding: 2rem 1rem;
  text-align: center;
  color: #765a2b;
}

.error {
  color: #b42318;
}

@media (min-width: 640px) {
  .message {
    font-size: 1.25rem;
  }
}
</style>
