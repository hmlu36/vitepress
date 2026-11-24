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
  width: min(94vw, 1600px);
  min-height: 82vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1rem, 4vw, 4rem);
}

.marquee {
  position: relative;
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;
}

.message-card {
  width: 100%;
  box-sizing: border-box;
  padding: clamp(2rem, 6vw, 6rem);
  border: 1px solid rgba(198, 156, 86, 0.45);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  color: #765a2b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.message {
  margin: 0;
  text-align: left;
  font-size: clamp(2rem, 5vw, 5rem);
  line-height: 1.6;
  white-space: pre-wrap;
}

.signature {
  margin: clamp(1.5rem, 4vw, 3rem) 0 0;
  text-align: right;
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 3rem);
}

.status {
  padding: 2rem 1rem;
  text-align: center;
  color: #765a2b;
}

.controls {
  position: absolute;
  right: 1rem;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;
  color: #765a2b;
}

.controls button {
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid #c69c56;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  color: #765a2b;
  cursor: pointer;
  font-size: 2rem;
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

</style>
