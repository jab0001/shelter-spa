<template>
  <div class="touch">
    <h2 class="touch__title">Get in touch</h2>
    <a class="touch__email" href="mailto:support@helpshelter.com"
      >support@helpshelter.com</a
    >
    <form class="touch__form">
      <label class="touch__label"
        >Name
        <p class="touch__error" v-if="!valid.name">This is a required field</p>
        <input
          ref="name"
          type="text"
          placeholder="Enter your first and last name"
          v-model="formModel.name"
          @blur="(event) => checkEmpty(event, 'name')"
          @click="(event) => resetValidation(event, 'name')"
          class="touch__input touch__input-name"
      /></label>

      <label class="touch__label"
        >Email
        <p class="touch__error" v-if="!valid.email">This is a required field</p>
        <p class="touch__error" v-if="isValidEmail === 'is-invalid'">
          input correct email
        </p>
        <input
          ref="email"
          type="email"
          placeholder="Enter your email"
          v-model="formModel.email"
          @blur="(event) => checkEmpty(event, 'email')"
          @click="(event) => resetValidation(event, 'email')"
          class="touch__input touch__input-email"
          :class="[isValidEmail]"
      /></label>

      <label class="touch__label touch__label-text"
        >Message
        <p class="touch__error" v-if="!valid.text">This is a required field</p>
        <textarea
          ref="text"
          placeholder="Write your message"
          required
          class="touch__input touch__input-text"
          v-model="formModel.text"
          @blur="(event) => checkEmpty(event, 'text')"
          @click="(event) => resetValidation(event, 'text')"
        />
      </label>
      <!-- <p class="touch__error" v-if="!valid.checkbox">
        This is a required field
      </p> -->
      <label
        :class="`touch__label touch__label-checkbox touch__label-checkbox--${!valid.checkbox}`"
      >
        <input
          ref="checkbox"
          v-model="notRobot"
          type="checkbox"
          class="touch__input-checkbox"
          @change="valid.checkbox = true"
        />I am not a robot</label
      >
    </form>
    <button class="touch__btn" type="button" @click.prevent="onSubmitHandler">
      Submit
    </button>
    <p style="color: green; margin-top: 20px; text-align: center;"> {{ success }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetTouchView",

  components: {},

  data() {
    return {
      formModel: {
        name: "",
        email: "",
        text: "",
      },
      valid: {
        name: true,
        email: true,
        text: true,
        checkbox: true,
      },
      success: '',

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

    async onSubmitHandler() {
      const data = {
        name: this.formModel.name,
        email: this.formModel.email,
        message: this.formModel.text,
      };

      this.isValid();

      if (!this.notRobot) {
        this.valid.checkbox = false;
      }

      if (this.isValid() && this.isValidEmail === "is-valid" && this.notRobot) {
        try {
          let res = await axios({
            method: "post",
            url: `https://backend.help-shelter.com/getintouch`,
            headers: {
              "Content-Type": "application/json",
            },
            data,
          });

          this.success = res.data.message;

          this.formModel = {
            name: "",
            email: "",
            text: "",
          };

          this.notRobot = false;

          /* return res; */
        } catch (error) {
          console.error("Failed to send form:", error);
        }
      } else {
        console.log("ERROR");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.touch {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 200px;

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

  &__title {
    font-family: "Onest";
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.04em;
    text-align: center;
  }

  &__email {
    margin: 0 auto;
    margin-top: 10px;
    display: block;
    font-family: "Onest";
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;

    color: #444;

    text-decoration: none;

    &:hover {
      color: #d1d457;
      text-decoration: underline;
    }
  }

  &__form {
    margin-top: 60px;

    display: flex;
    flex-direction: column;
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

    &-text {
      margin-bottom: 30px;
    }

    &-checkbox {
      flex-direction: row;

      font-size: 18px;
      line-height: 18px;

      letter-spacing: -0.01em;

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

    &-text {
      margin-top: 20px;
      min-height: 260px;
      padding: 20px 16px;

      border: 1px solid #272727;
      border-radius: 7px;

      &:hover {
        padding: 20px 16px;
      }

      &:focus {
        padding-left: 16px;
      }
    }

    &-checkbox {
      margin: 0;
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }

  &__btn {
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

    &__title {
      font-size: 26px;
      font-weight: 400;
      line-height: 31.2px;
      letter-spacing: -0.04em;
      text-align: center;
    }

    &__email {
      margin-top: 6px;

      font-size: 14px;
      font-weight: 400;
      line-height: 18.9px;
      text-align: center;
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

    &__input {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;

      &::placeholder {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
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
  }
}

.is-invalid {
  border-color: red;
}
</style>
