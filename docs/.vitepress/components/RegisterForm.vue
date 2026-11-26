<template>
  <Form @submit.preventDefault="onSubmit">
    <div class="card">
      <div class="card-image">
        <img
          src="https://image.freepik.com/free-vector/cute-bride-groom-cartoon-wedding-invitation-card_21630-737.jpg"
        />
        <span class="card-title">
          Save the date
          <br />Join us to celebrate.
        </span>
      </div>
      <div class="card-content left-align">
        <h5>泓民 & 佳恩 婚禮</h5>
        <strong
          >⛪地點：徠·歸仁飯店<br />
          (台南市歸仁區中山路三段455號) </strong
        ><br />
        <strong>📅日期：2021/04/24(六)</strong><br />
        <strong>⏰時間：上午10:30(10點可入場) ~ 中午12:00</strong><br />
        <strong>🧡午宴：中午12:00 ~ 下午02:00</strong><br />
      </div>
      <div class="card-content left-align">
        <div class="row">
          <h5>您的大名? (真實姓+名)</h5>
          <div class="input-field col s12">
            <Field
              name="fullName"
              as="input"
              type="text"
              rules="required"
              v-model="registerForm.fullName"
            />
            <label for="fullName">您的回答</label>
            <ErrorMessage name="fullName" class="error" />
          </div>
        </div>

        <div class="row">
          <h5>您的聯絡電話?</h5>
          <div class="input-field col s12">
            <Field
              name="phoneNumber"
              as="input"
              type="text"
              v-model="registerForm.phoneNumber"
            />
            <label for="phoneNumber">您的回答</label>
            <ErrorMessage name="phoneNumber" class="error" />
          </div>
        </div>
        <div class="row">
          <h5>您和新人的關係是?</h5>
          <div class="radio--group p-l-5">
            <p>
              <label>
                <Field
                  name="relation"
                  as="input"
                  type="radio"
                  rules="required"
                  value="男方親友"
                  v-model="registerForm.relation"
                />
                <span>男方親友</span>
              </label>
            </p>
            <p>
              <label>
                <Field
                  name="relation"
                  as="input"
                  type="radio"
                  rules="required"
                  value="女方親友"
                  v-model="registerForm.relation"
                />
                <span>女方親友</span>
              </label>
            </p>
          </div>
          <ErrorMessage name="relation" class="error" />
        </div>
        <div class="row">
          <h5>是否願意與參加婚禮？</h5>
          <div class="radio--group p-l-5">
            <p>
              <label>
                <Field
                  name="attendWedding"
                  as="input"
                  type="radio"
                  rules="required"
                  value="這是一定要的！"
                  v-model="registerForm.attendWedding"
                  @click="registerForm.attendEvent = true"
                />
                <span>這是一定要的！</span>
              </label>
            </p>
            <p>
              <label>
                <Field
                  name="attendWedding"
                  as="input"
                  type="radio"
                  rules="required"
                  value="時間上來不及參加"
                  v-model="registerForm.attendWedding"
                  @click="registerForm.attendEvent = true"
                />
                <span>時間上來不及參加</span>
              </label>
            </p>
            <p>
              <label>
                <Field
                  name="attendWedding"
                  as="input"
                  type="radio"
                  rules="required"
                  value="參加婚宴就好"
                  v-model="registerForm.attendWedding"
                  @click="registerForm.attendEvent = true"
                />
                <span>參加婚宴就好</span>
              </label>
            </p>
            <p>
              <label>
                <Field
                  name="attendWedding"
                  as="input"
                  type="radio"
                  rules="required"
                  value="無法出席，祝你們幸福滿滿"
                  v-model="registerForm.attendWedding"
                  @click="registerForm.attendEvent = false"
                />
                <span>無法出席，祝你們幸福滿滿</span>
              </label>
            </p>
            <ErrorMessage name="attendWedding" class="error" />
          </div>
        </div>
        <div
          v-if="
            ['這是一定要的！', '時間上來不及參加', '參加婚宴就好'].includes(
              registerForm.attendWedding
            )
          "
        >
          <div class="row">
            <h5>是否願意與參加午宴？</h5>
            <div class="radio--group p-l-5">
              <div class="switch">
                <label>
                  否
                  <input type="checkbox" v-model="registerForm.attendEvent" />
                  <span class="lever"></span>
                  是
                </label>
              </div>
            </div>
          </div>
          <div v-show="registerForm.attendEvent">
            <div class="row">
              <h5>當天出席人數</h5>
              <div>
                <Field
                  name="attendPeople"
                  as="select"
                  v-model="registerForm.attendPeople"
                  rules="required|chainRequired:@registerForm.attendEvent"
                >
                  <option value="1">1 人</option>
                  <option value="2">2 人</option>
                  <option value="3">3 人</option>
                  <option value="4">4 人</option>
                  <option value="5">5 人</option>
                  <option value="6">6 人</option>
                  <option value="7">7 人</option>
                  <option value="8">8 人</option>
                </Field>
              </div>
              <ErrorMessage name="attendPeople" class="error" />
            </div>
            <div class="row">
              <h5>是否需要準備兒童座椅?</h5>
              <div class="radio--group p-l-5">
                <Field name="child" as="select" v-model="registerForm.child">
                  <option value="不需要" selected>不需要</option>
                  <option value="1">1 張</option>
                  <option value="2">2 張</option>
                  <option value="3">3 張</option>
                </Field>
              </div>
              <ErrorMessage name="attendPeople" class="error" />
            </div>
            <div class="row">
              <h5>是否需要安排素食餐點？</h5>
              <div class="radio--group p-l-5">
                <div class="switch">
                  <label>
                    否
                    <input type="checkbox" v-model="registerForm.vegetarian" />
                    <span class="lever"></span>
                    是
                  </label>
                </div>
              </div>
              <div v-if="registerForm.vegetarian">
                <h5>素食餐點人數</h5>
                <div class="radio--group p-l-5">
                  <Field
                    name="vegetarianNumber"
                    as="select"
                    v-model="registerForm.vegetarianNumber"
                  >
                    <option value="1">1 人</option>
                    <option value="2">2 人</option>
                    <option value="3">3 人</option>
                    <option value="4">4 人</option>
                    <option value="5">5 人</option>
                    <option value="6">6 人</option>
                    <option value="7">7 人</option>
                    <option value="8">8 人</option>
                  </Field>
                </div>
              </div>
            </div>
            <div class="row">
              <h5>備註</h5>
              <div class="input-field col s12">
                <textarea
                  id="remark"
                  class="materialize-textarea wordcount"
                  v-model="registerForm.remark"
                  data-length="120"
                ></textarea>
                <label for="remark">有關午宴備註說明</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row send--invited">
          <h5>喜帖寄送方式</h5>
          <div class="radio--group p-l-5">
            <p>
              <label>
                <Field
                  name="inviteType"
                  as="input"
                  type="radio"
                  value="請寄給我喜帖 ~ 讓我珍藏"
                  v-model="registerForm.inviteType"
                  rules="required"
                />
                <span>請寄給我喜帖 ~ 讓我珍藏</span>
              </label>
            </p>
            <p>
              <label>
                <Field
                  name="inviteType"
                  as="input"
                  type="radio"
                  value="愛護地球，請寄給我電子喜帖"
                  v-model="registerForm.inviteType"
                  rules="required"
                />
                <span>愛護地球，請寄給我電子喜帖</span>
              </label>
            </p>
            <p>
              <label>
                <Field
                  name="inviteType"
                  as="input"
                  type="radio"
                  value="愛護地球，可以不用電子或紙本喜帖"
                  v-model="registerForm.inviteType"
                  rules="required"
                />
                <span>愛護地球，紙本跟電子喜帖可以都不用</span>
              </label>
            </p>
            <ErrorMessage name="inviteType" class="error" />
          </div>
          <div
            class="input-field col s12"
            v-if="registerForm.inviteType == '請寄給我喜帖 ~ 讓我珍藏'"
          >
            <Field
              name="inviteAddress"
              as="input"
              type="text"
              v-model="registerForm.inviteAddress"
            />
            <label for="inviteAddress">喜帖收件地址 (含郵遞區號)</label>
            <ErrorMessage name="inviteAddress" class="error" />
          </div>
          <div
            class="input-field col s12"
            v-if="registerForm.inviteType == '愛護地球，請寄給我電子喜帖'"
          >
            <Field
              name="inviteEmailAddress"
              as="input"
              type="email"
              v-model="registerForm.inviteEmailAddress"
            />
            <label for="inviteEmailAddress">喜帖收件電子地址</label>
            <ErrorMessage name="inviteEmailAddress" class="error" />
          </div>
        </div>
        <div class="row">
          <h5>想對我們說的話 ❤️</h5>
          <blockquote style="border-left: 5px solid #26a69a">
            當天會將您的祝福放在大螢幕上哦~
          </blockquote>
          <div class="input-field col s12">
            <textarea
              id="message"
              class="materialize-textarea wordcount"
              v-model="registerForm.message"
              data-length="120"
            ></textarea>
            <label for="message">您的悄悄話</label>
          </div>
        </div>
        <div class="card-action center-align">
          <button class="btn waves-effect waves-light" type="submit">
            送出
          </button>
        </div>
      </div>
    </div>
  </Form>

  <div class="blockUI" style="display: none">
    <div class="loading">
      <img src="https://i.gifer.com/YCZH.gif" />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, onBeforeMount } from 'vue';
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate';
import Swal from 'sweetalert2';

defineRule('required', (value) => {
  if (!value) {
    return '此欄位必填';
  }
  return true;
});

defineRule('chainRequired', (value, [other]) => {
  if (other && !value) {
    return '此欄位必填';
  }
  return true;
});

defineRule('email', (value) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return '電子郵件無效';
  }
  return true;
});

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup(props, context) {
    let registerForm = reactive({});
    const airTableName = 'WeddingForm';
    const baseUrl = import.meta.env.BASE_URL;

    const onSubmit = () => {
      const appId = import.meta.env.VITE_APP_ID_WEDDINGFORM || import.meta.env.VITE_APP_ID;
      const token = import.meta.env.VITE_AIRTABLE_TOKEN || import.meta.env.VITE_APP_KEY;

      let data = {
        fields: {
          姓名: registerForm.fullName,
          連絡電話: registerForm.phoneNumber,
          與新人關係: registerForm.relation,
          是否願意參加婚禮: registerForm.attendWedding,
          是否願意參加午宴:
            registerForm.attendWedding === '無法出席，祝你們幸福滿滿'
              ? ''
              : registerForm.attendEvent
              ? '是'
              : '否',
          當天出席人數: registerForm.attendPeople,
          是否需準備兒童座椅: registerForm.child,
          是否需要安排素食餐點:
            registerForm.vegetarian === undefined
              ? ''
              : registerForm.vegetarian
              ? '是'
              : '否',
          素食人數: registerForm.vegetarianNumber,
          其他備註: registerForm.remark,
          喜帖寄送方式: registerForm.inviteType,
          地址: registerForm.inviteAddress,
          電子郵件: registerForm.inviteEmailAddress,
          想對我們說的話: registerForm.message,
        },
      };

      const blockUI = document.querySelector('.blockUI');
      if (blockUI) blockUI.setAttribute('style', 'display:inline');

      fetch(
        `https://api.airtable.com/v0/${appId}/${airTableName}`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
        .then(async (response) => {
          if (!response.ok) throw new Error(`Airtable request failed: ${response.status}`);
          return response.json();
        })
        .then((response) => {
          if (blockUI) blockUI.setAttribute('style', 'display:none');
          const recordId = response?.id || response?.data?.id;
          if (recordId) {
            Swal.fire({
              icon: 'success',
              title: '儲存成功',
              html: '感謝您的填寫<br/>若需要更改資料，再麻煩提前說哦！',
              willClose: () => {
                window.location.reload();
              },
            });
          }
        })
        .catch(() => {
          if (blockUI) blockUI.setAttribute('style', 'display:none');
          Swal.fire({
            icon: 'error',
            title: '儲存失敗',
            text: '請洽管理員！',
          });
        });
    };
    onBeforeMount(() => {
      if (typeof document === 'undefined') return;

      const icon = document.createElement('link');
      icon.setAttribute('rel', 'icon');
      icon.setAttribute('href', `${baseUrl}images/Wedding-Rings.ico`);
      document.head.appendChild(icon);
    });
    onMounted(() => {
      // Character counter handled via HTML maxlength/data-length
    });
    return {
      onSubmit,
      registerForm,
    };
  },
};
</script>
<style scoped>
@import "../../public/css/materialize.min.css";

select {
  display: inherit;
}
#lineForm {
  padding: 5px 1rem;
}
.card {
  max-width: 512px;
  margin: 0.5em auto;
}
button {
  background-color: #4285f4;
}
.p-l-5 {
  padding: 5px;
}
.input-field {
  margin-top: 10px;
}
.radio--group p {
  padding: 5px 0;
}
.error {
  color: #f44336;
}

.blockUI {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 999;
}

.loading {
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
