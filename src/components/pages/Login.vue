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
      <TabsWithActiveLine
        :tabs="tabs"
        :current-tab="currentTab"
        :wrapper-class="'default-tabs'"
        :tab-class="'default-tabs__item'"
        :tab-active-class="'default-tabs__item_active'"
        :line-class="'default-tabs__active-line'"
        @onClick="handleClick"
      />
      <div class="current">
        <div v-if="currentTab === 'login'">
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
            <button class="button is-text">Esqueci a Senha</button>
          </div>
          <div class="field">
            <button class="button is-pulled-right is-warning" @click="login">Entrar</button>
          </div>
          <div>
            <p class="error-cadastro-preenchimento-label" v-if="errors.length">
              <b>Os seguintes erros foram encontrados:</b>
              <ul>
                <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
              </ul>
            </p>
          </div>
        </div>
        <div v-if="currentTab === 'signup'">
          <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
              <input class="input" type="email" v-model="email" />
            </div>
          </div>
          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input class="input" type="password" v-model="password"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Confirmar Senha</label>
            <div class="control">
              <input class="input" type="password" v-model="confirmationPassword" />
            </div>
          </div>
          <div class="field">
            <button class="button is-pulled-right" @click="createUser">Próximo</button>
          </div>
          <div>
            <p class="error-cadastro-preenchimento-label" v-if="errors.length">
              <b>Os seguintes erros foram encontrados:</b>
              <ul>
                <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TabsWithActiveLine from "../organisms/Tab";
import firebase from 'firebase';

const Tabs = [
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
    TabsWithActiveLine
  },
  name: "Login",
  data: () => ({
    tabs: Tabs,
    currentTab: "login",
    email: null,
    password: null,
    confirmationPassword: null,
    errors: [],
    auth: Promise,
    activeTab: 1
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
      // clean the errors list
      this.errors = [];
    },
    createUser: function(event) {
      // verify if user has inputed the fields
      // TODO: add aditional validation like size, etc.
      this.verifyInputErrors(event,null);

      // cria usuário
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          user => {
            console.log('usuário' + user.email + ' criado');
            this.router.replace('/')
          },
          error => {
            this.verifyInputErrors(event, error);
            console.log(error);
          }
      );
    },
    login: function(event) {
      
      this.verifyInputErrors(event,null);
      // loga usuário
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          user => {
            console.log('usuário logado');
            this.router.replace('/Feed');
          },
          error => {
            this.verifyInputErrors(event, error);
            console.log(error);
          }
      );
    },
    verifyInputErrors: function(event, error) {
      
      console.log(event);

      this.errors = [];

      if (!this.email)
        this.errors.push("E-mail está faltando!");

      if (!this.password)
        this.errors.push("Senha está faltando!");

      if (!this.confirmationPassword && this.currentTab.localeCompare("signup") === 0)
        this.errors.push("Confirmação da senha está faltando!");

      if (this.confirmationPassword !== this.password  && this.currentTab.localeCompare("signup") === 0)
        this.errors.push("As senhas não estão iguais!");

      // case a error was passed
      if (error !== null) {
        // verify errors returned by firebase api
        if (error.message.localeCompare("The email address is badly formatted.") === 0)
          this.errors.push("E-mail mal formatado!");
        if (error.message.localeCompare("The password is invalid or the user does not have a password.") === 0
        || error.message.localeCompare("There is no user record corresponding to this identifier. The user may have been deleted.") === 0)
          this.errors.push("Usuário ou senha inválida!");
        if (error.message.localeCompare("The email address is already in use by another account.") === 0)
          this.errors.push("E-mail já cadastrado!");
        if (error.message.localeCompare("Password should be at least 6 characters") === 0)
          this.errors.push("A senha deveria ter pelo menos 6 caracteres!");
      }

      if (!this.errors.length)
        return true;
      else
        return false;

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
.default-tabs {
  position: relative;
  margin: 0 auto;
  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: black;
    }
    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
.content {
  margin-top: 30px;
  font-size: 20px;
}

.error-cadastro-preenchimento-label {
   color: red;
 }

</style>
