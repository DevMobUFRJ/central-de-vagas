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
    <div class="field">
      <label class="label">Confirmar Senha</label>
      <div class="control">
        <input class="input" type="password" v-model="confirmationPassword" />
      </div>
    </div>
    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input" type="text" v-model="name" />
      </div>
    </div>
    <div class="field">
      <label class="label">Data de Nascimento</label>
      <div class="control">
        <input class="input" type="date" v-model="birthday" />
      </div>
    </div>
    <div class="field">
      <label class="label">Tipo de Usuário</label>
      <div class="control">
        <input class="input" type="text" v-model="profile" />
      </div>
    </div>
    <div class="field">
      <button class="button is-pulled-right is-hidden-touch" @click="signup">
        Salvar
      </button>
      <button class="button is-fullwidth is-hidden-desktop" @click="signup">
        Salvar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignupForm",
  data: () => ({
    email: "",
    password: "",
    confirmationPassword: "",
    name: "",
    birthday: "",
    profile: ""
  }),
  methods: {
    signup() {
      console.log("signup");
    }
  }
};
</script>

<style lang="scss"></style>
