<template>
    <div>
        <form>
          <label>Username: </label>
          <input v-model="message" type="email" name="username" placeholder="username">
          <br><br>
          <label>Password: </label>
          <input type="password" name="password" value="">
          <br><br>
          <input type="submit" value="Entrar">
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            message: ''
        }
    }
}
</script>
