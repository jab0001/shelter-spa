<template>
  <div class="new-topic">
    <div class="new-topic__bread">
      <router-link to="/" class="new-topic__bread-start"> Home </router-link>
      <span class="new-topic__bread-arrow">→</span>
      <router-link to="/blogs" class="new-topic__bread-start">
        Blog</router-link
      >
      <span class="new-topic__bread-arrow">→</span>
      <a href="#" class="new-topic__bread-end"> Your Story</a>
    </div>

    <h2 class="new-topic__title">Your Story</h2>
    <form class="new-topic__form">
      <div class="new-topic__left">
        <h3 class="new-topic__left-title">Write your topic</h3>
        <div class="new-topic__content">
          <p class="new-topic__date">
            {{
              new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            }}
          </p>
          <input
            ref="textTitle"
            type="text"
            placeholder="Title of your topic..."
            v-model="formModel.textTitle"
            @blur="(event) => checkEmpty(event, 'textTitle')"
            @click="(event) => resetValidation(event, 'textTitle')"
            class="new-topic__input new-topic__input-textTitle"
          />
          <textarea
            ref="textAll"
            type="text"
            placeholder="Start your topic..."
            v-model="formModel.textAll"
            @blur="(event) => checkEmpty(event, 'textAll')"
            @click="(event) => resetValidation(event, 'textAll')"
            class="new-topic__input new-topic__input-textAll"
          >
          </textarea>
        </div>
      </div>
      <div class="new-topic__right">
        <h3 class="new-topic__right-title">Additional information</h3>
        <label class="new-topic__label"
          >Name
          <p class="new-topic__error" v-if="!valid.name">
            This is a required field
          </p>
          <input
            ref="name"
            type="text"
            placeholder="Enter your first and last name"
            v-model="formModel.name"
            @blur="(event) => checkEmpty(event, 'name')"
            @click="(event) => resetValidation(event, 'name')"
            class="new-topic__input new-topic__input-name"
        /></label>
        <label class="new-topic__label"
          >Email
          <p class="new-topic__error" v-if="!valid.email">
            This is a required field
          </p>
          <p class="new-topic__error" v-if="isValidEmail === 'is-invalid'">
            input correct email
          </p>
          <input
            ref="email"
            type="email"
            placeholder="Enter your email"
            v-model="formModel.email"
            @blur="(event) => checkEmpty(event, 'email')"
            @click="(event) => resetValidation(event, 'email')"
            class="new-topic__input new-topic__input-email"
            :class="[isValidEmail]"
        /></label>
        <label class="new-topic__label"
          >Category of your topic
          <select
            id="language"
            class="new-topic__input new-topic__input-select"
            v-model="formModel.type"
          >
            <option value="Story" selected>Story</option>
            <option value="All">All</option>
            <option value="Articles">Articles</option>
            <option value="Idea">Idea</option>
            <option value="Help">Help</option>
          </select></label
        >
        <label class="new-topic__label"
          >Topic keywords
          <input
            type="text"
            placeholder="Enter key topics and words for your topic"
            v-model="formModel.keywords"
            class="new-topic__input new-topic__input-keyword"
        /></label>
        <label
          :class="`new-topic__label new-topic__label-checkbox new-topic__label-checkbox--${!valid.checkbox}`"
        >
          <input
            ref="checkbox"
            v-model="notRobot"
            type="checkbox"
            class="new-topic__input-checkbox"
            @change="valid.checkbox = true"
          />Copyright: Request confirmation of the author's rights t&nbsp;the
          content and that it has not been published elsewhere.</label
        >
        <button
          class="new-topic__btn"
          type="button"
          @click.prevent="onSubmitHandler"
        >
          Publish
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewTopicView",

  components: {},

  data() {
    return {
      formModel: {
        name: "",
        email: "",
        type: "All",
        keywords: "",
        textTitle: "",
        textAll: "",
      },
      valid: {
        name: true,
        email: true,
        text: true,
        checkbox: true,
      },

      notRobot: false,
      // eslint-disable-next-line
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  computed: {
    isValidEmail() {
      return this.formModel.email === ""
        ? ""
        : this.reg.test(this.formModel.email)
        ? "is-valid"
        : "is-invalid";
    },
  },

  methods: {
    checkEmpty(event, input) {
      event.target.value === "" ? event.target.classList.add("is-invalid") : "";
      event.target.value === ""
        ? (this.valid[input] = false)
        : (this.valid[input] = true);
    },

    resetValidation(event, input) {
      event.target.classList.remove("is-invalid");
      this.valid[input] = true;
    },

    isValid() {
      return Object.keys(this.$refs)
        .map((ref) => {
          if (this.$refs[ref].value === "") {
            this.$refs[ref].classList.add("is-invalid");
            this.valid[ref] = false;
          }
          return this.$refs[ref].value;
        })
        .every((el) => el);
    },

    onSubmitHandler() {
      const data = {
        name: this.formModel.name,
        email: this.formModel.email,
        text: this.formModel.text,
      };

      this.isValid();

      if (!this.notRobot) {
        this.valid.checkbox = false;
      }

      if (this.isValid() && this.isValidEmail === "is-valid" && this.notRobot) {
        console.log("SUCCESS", data);
      } else {
        console.log("ERROR");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.new-topic {
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 200px;

  &__date {
    padding: 40px 40px 0 40px;

    font-family: "Onest";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: right;

    color: #444;
  }

  &__error {
    margin: 0;
    margin-top: 10px;
    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;

    color: red;
  }

  &__bread {
    &-start,
    &-end {
      font-family: "Onest";
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;

      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &-start {
      color: #444;
    }

    &-arrow {
      font-family: "Onest";
      font-size: 20px;
      margin: 0 16px;
    }

    &-end {
      color: #bbbe31;
    }
  }

  &__title {
    margin-top: 80px;

    font-family: "Onest";
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.04em;
    text-align: left;
  }

  &__form {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 880px;
    background: #fff;
    border: 1px solid #272727;
    border-radius: 9px;
  }

  &__left {
    &-title {
      margin-left: 7px;
      margin-bottom: 60px;

      font-family: "Onest";
      font-size: 26px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: -0.04em;
      text-align: left;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    max-width: 500px;

    &-title {
      margin-bottom: 62px;
      font-family: "Onest";
      font-size: 26px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: -0.04em;
      text-align: left;
    }
  }

  &__label {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    font-family: "Onest";
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.04em;
    text-align: left;

    &-checkbox {
      flex-direction: row;

      font-size: 18px;
      line-height: 27px;

      letter-spacing: -0.01em;

      color: #444;

      &--true {
        color: red;
      }
    }
  }

  &__input {
    padding: 0;
    margin: 0;
    margin-top: 12px;
    min-height: 40px;

    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;

    box-sizing: border-box;
    border: none;

    outline: none;

    background: inherit;

    &:focus {
      border-radius: 7px;
      box-shadow: 10px 5px 5px #d1d457;
      border: 1px solid #272727;
      padding-left: 8px;
    }

    &::placeholder {
      font-family: "Onest";
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;
      text-align: left;

      color: #b1aea9;
    }

    border-bottom: 1px solid #272727;

    &-checkbox {
      margin: 0;
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }

    &-textTitle {
      border: none;
      text-align: center;

      font-family: "Onest";
      font-size: 26px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: -0.04em;

      &::placeholder {
        font-family: "Onest";
        font-size: 26px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: -0.04em;
        text-align: center;
      }

      &:focus {
        box-shadow: none;
        border: none;
        padding: 0 40px;
      }
    }

    &-textAll {
      border: none;
      height: 100%;
      padding: 20px 40px;

      &::placeholder {
        font-family: "Onest";
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
      }

      &:focus {
        box-shadow: none;
        border: none;
        padding: 20px 40px;
      }
    }
  }

  &__btn {
    max-width: 168px;
    margin: 0 auto;
    margin-top: 10px;
    max-height: 66px;
    padding: 20px 50px;

    font-family: "Onest";
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;

    border: 1.5px solid #272727;
    border-radius: 33.5px;

    background: inherit;

    color: #272727;

    cursor: pointer;

    &:hover {
      background: radial-gradient(#f3c98f, #fff);
    }
  }

  @media (max-width: 900px) {
    margin-top: 60px;
    padding: 0 16px;
    margin-bottom: 100px;

    &__input {
      &-textTitle {
        font-size: 18px;

        &::placeholder {
          font-family: "Onest";
          font-size: 18px;
          font-weight: 400;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: center;
        }
      }

      &-textAll {
        padding: 5px 10px;

        &::placeholder {
          font-family: "Onest";
          font-size: 15px;
          font-weight: 400;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: center;
        }
      }
    }

    &__bread {
      &-start,
      &-end,
      &-arrow {
        font-size: 14px;
        font-weight: 400;
        line-height: 18.9px;
        text-align: left;
      }

      &-arrow {
        margin: 0 10px;
      }
    }

    &__title {
      margin-top: 20px;
      font-size: 26px;
      font-weight: 400;
      line-height: 31.2px;
      letter-spacing: -0.04em;
    }

    &__form {
      margin-top: 30px;
      flex-direction: column;
    }

    &__content {
      width: initial;
      height: 200px;

      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &__left {
      &-title {
        font-size: 24px;
        font-weight: 400;
        line-height: 31.2px;
        letter-spacing: -0.04em;
        margin-left: 0;
        margin-bottom: 10px;
      }
    }

    &__btn {
      padding: 10px 29px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20.4px;
      margin: 0 auto;
      display: block;
    }

    &__date {
      padding: 10px 10px 0 10px;
      font-size: 14px;
    }

    &__label {
      font-size: 18px;
      font-weight: 500;
      line-height: 21.6px;
      letter-spacing: -0.04em;
      text-align: left;

      &-checkbox {
        font-size: 14px;
        font-weight: 400;
        line-height: 18.9px;
        text-align: left;
      }
    }

    &__right {
      &-title {
        font-size: 24px;
        font-weight: 400;
        line-height: 31.2px;
        letter-spacing: -0.04em;
        margin-left: 0;
        margin-bottom: 20px;
        margin-top: 30px;
      }
    }
  }
}

.is-invalid {
  border-color: red;

  &::placeholder {
    color: red;
  }
}
</style>
