<template>
    <div>
        <form>
          <label>Username: </label>
          <input v-model="username" type="email" name="username" placeholder="username">
          <br><br>
          <label>Password: </label>
          <input v-model="password" type="password" name="password" value="">
          <br><br>
          <input type="submit" value="Entrar" @click=loginUser>
        </form>
        <p>{{message}}</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
    loginUser: function() {
      if (this.username.length > 0 && this.password.length > 0) {
          //console.log("logando usuário")
      }
    }
  }
}
</script>
