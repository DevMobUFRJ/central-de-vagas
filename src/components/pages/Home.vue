<template>
  <div class="columns">
    <section class="column left is-hidden-touch">
      <h1 class="title">
        Central de <br />
        Vagas
      </h1>
      <article>
        <p>
          Suspendisse a massa hendrerit, accumsan eros vitae, facilisis eros.
          Fusce sed ultrices urna, pulvinar porta dolor. Sed nec varius mauris.
          Proin aliquet ante in purus pretium, et efficitur dolor interdum.
          Integer placerat bibendum lectus porta semper. Pellentesque sit amet
          justo nec est tempor convallis. Nunc posuere quis dolor sit amet
          rhoncus. Suspendisse hendrerit sodales dolor, eget elementum libero
          facilisis nec. Cras rutrum arcu arcu, ac blandit erat auctor sit amet.
          Cras in mauris ut dui interdum aliquam ut nec ex. Nunc ornare neque
          quam, id tempus neque vehicula in. Proin dictum, sapien sed suscipit
          dignissim, nibh dui aliquam erat, venenatis facilisis ante metus a
          sem. sem. Vestibulum efficitur purus condimentum neque viverra dictum.
          Curabitur in efficitur neque, lobortis sagittis dolor. Praesent
          accumsan orci eros, imperdiet gravida quam ultricies ac. Proin ac diam
          ante.
        </p>
      </article>
    </section>
    <div class="column right">
      <Tabs
        :tabs="tabs"
        :wrapper-class="'tabs is-centered is-large is-hidden-touch'"
        :current-tab="currentTab"
        :tab-class="'default-tabs__item'"
        :tab-active-class="'is-active'"
        @onClick="handleClick"
      />
      <div class="current">
        <LoginForm v-if="currentTab === 'login'" />
        <SignupForm v-if="currentTab === 'signup'" />
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "../organisms/Tab";
import LoginForm from "../organisms/forms/LoginForm";
import SignupForm from "../organisms/forms/SignupForm";

const TABS = [
  {
    title: "Login",
    value: "login"
  },
  {
    title: "Cadastro",
    value: "signup"
  }
];
export default {
  components: {
    Tabs,
    LoginForm,
    SignupForm
  },
  name: "Login",
  // props: {
  //   email: { type: String, default: "" },
  //   password: { type: String, default: "" },
  //   confirmationPassword: { type: String, default: "" },
  //   auth: Promise
  // },
  data: () => ({
    tabs: TABS,
    currentTab: "login"
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>

<style scoped lang="scss">
.right {
  background-color: #faeee0;
  padding: 1em;
}
.left {
  background-color: #890e4f;
  height: 100vh;
  padding: 3em;
  h1,
  p {
    color: #fcfdfd;
  }
}
</style>
