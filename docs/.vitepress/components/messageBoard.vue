<template>
  <div class="message-board" aria-live="polite">
    <p v-if="loading" class="status">正在載入留言…</p>
    <p v-else-if="errorMessage" class="status error">{{ errorMessage }}</p>
    <p v-else-if="records.length === 0" class="status">目前還沒有留言。</p>

    <section v-else class="marquee" aria-roledescription="carousel" aria-live="polite">
      <Transition name="message" mode="out-in">
        <article :key="activeRecord.id" class="message-card">
          <p class="message">{{ activeRecord.想對我們說的話 }}</p>
          <p class="signature">
            {{ activeRecord.姓名 }}<span v-if="activeRecord.與新人關係">（{{ activeRecord.與新人關係 }}）</span>
          </p>
        </article>
      </Transition>
      <div v-if="records.length > 1" class="controls">
        <button type="button" aria-label="上一則留言" @click="showPrevious">‹</button>
        <span>{{ currentIndex + 1 }} / {{ records.length }}</span>
        <button type="button" aria-label="下一則留言" @click="showNext">›</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({ records: [], currentIndex: 0, loading: true, errorMessage: '', rotationTimer: null }),
  computed: {
    activeRecord() {
      return this.records[this.currentIndex];
    },
  },
  methods: {
    showNext() {
      this.currentIndex = (this.currentIndex + 1) % this.records.length;
    },
    showPrevious() {
      this.currentIndex = (this.currentIndex - 1 + this.records.length) % this.records.length;
    },
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
    this.loadData().then(() => {
      if (this.records.length > 1) {
        this.rotationTimer = window.setInterval(this.showNext, 5000);
      }
    });
    /*
    // 移除theme-default-content, 畫面寬的限制
    let defaultContent = document.getElementsByClassName("theme-default-content")[0];
    defaultContent.className = "";
    */
  },
  beforeUnmount() {
    window.clearInterval(this.rotationTimer);
  },
};
</script>

<style scoped>
.message-board {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

.marquee {
  position: relative;
  min-height: 190px;
  display: grid;
  align-content: center;
  padding-bottom: 2.5rem;
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

.controls {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #765a2b;
}

.controls button {
  width: 2rem;
  height: 2rem;
  border: 1px solid #c69c56;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  color: #765a2b;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
}

.message-enter-active,
.message-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.message-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.message-leave-to {
  opacity: 0;
  transform: translateY(-12px);
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
