<template>
  <div class="columns">
    <section class="column left">
      <h1 class="title" style="color: white">
        Central de <br />
        Vagas
      </h1>
      <article class="">
        <p style="color: white">
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
      <div class="tabs is-centered is-large">
        <ul>
          <li>
            <a
              v-on:click="activeTab = 1"
              v-bind:class="[activeTab === 1 ? 'is-active' : '']"
              >Login</a
            >
          </li>
          <li>
            <a
              v-on:click="activeTab = 2"
              v-bind:class="[activeTab === 2 ? 'is-active' : '']"
              >Cadastro</a
            >
          </li>
        </ul>
      </div>
      <div class="tab-content" v-if="activeTab === 1">
        <div class="field">
          <label class="label">E-mail</label>
          <div class="control">
            <input class="input" type="email" />
          </div>
        </div>
        <div class="field">
          <label class="label">Senha</label>
          <div class="control">
            <input class="input" type="password" />
          </div>
        </div>
        <div class="field">
          <button class="button is-text">Esqueci a Senha</button>
        </div>
        <div class="field">
          <button class="button is-pulled-right is-warning">Entrar</button>
        </div>
      </div>
      <div class="tab-content" v-if="activeTab === 2">
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
            <input class="input" type="password"  v-model="confirmationPassword"/>
          </div>
        </div>
        <div class="field">
          <button class="button is-pulled-right" v-on:click="createUser">Próximo</button>
        </div>
        <div>
          <p class="error-cadastro-preenchimento-label" v-if="errors.length">
            <b>Por favor, preencha os seguintes campos:</b>
            <ul>
              <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      email: null,
      password: null,
      confirmationPassword: null,
      errors: [],
      auth: Promise,
      activeTab: 1
    }
  },
  methods: {
    createUser: function(event) {
      // verify if user has inputed the fields
      // TODO: add aditional validation like size, etc.
      this.errors = [];

      if (!this.email)
        this.errors.push("E-mail está faltando!")

      if (!this.password)
        this.errors.push("Senha está faltando!")

      if (!this.confirmationPassword)
        this.errors.push("Confirmação da senha está faltando!")

      if (this.confirmationPassword !== this.password)
        this.errors.push("As senhas não estão iguais!")

      if (!this.errors.length)
        return true;

      // cria usuário
      console.log("usuário criado!")

    }
  }
};
</script>

<style scoped lang="scss">
.columns {
  height: 100vh;
}
.right {
  background-color: #faeee0;
  padding: 1em;
  .tab-content {
    padding: 3em;
  }
}
.left {
  background-color: #890e4f;
  padding: 3em;
  p {
    color: #fcfdfd;
  }
}
.is-active {
  background-color: #fff;
}
input {
  border: none;
  border-bottom: 1px solid #757575;
  background-color: none;
}
input:focus {
  outline: none;
}

.error-cadastro-preenchimento-label {
  color: red;
}

</style>
