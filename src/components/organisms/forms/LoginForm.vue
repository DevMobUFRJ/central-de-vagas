<template>
  <form>
    <div class="field">
      <label class="label">E-mail</label>
      <div class="control">
        <input class="input" type="email" v-model="email" />
      </div>
    </div>
    <div class="field">
      <label class="label">Senha</label>
      <div class="control">
        <input class="input" type="password" v-model="password" />
      </div>
    </div>
    <div class="buttons">
      <a class="button is-text is-pulled-left" @click="recoverPassword">
        Esqueci a Senha
      </a>
      <a class="button is-warning is-fullwidth has-text-left" @click="auth">
        Entrar
      </a>
      <button
        class="button is-pulled-right is-warning is-fullwidth is-hidden-desktop"
        @click="goToSignup"
      >
        Cadastrar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    email: "",
    password: ""
  }),

  methods: {
    recoverPassword() {
      console.log("Esqueci a senha");
    },
    auth() {
      console.log("Making login: ", this.email, this.password);
    },
    goToSignup() {
      console.log("Go to signup");
    }
  }
};
</script>

<style></style>
