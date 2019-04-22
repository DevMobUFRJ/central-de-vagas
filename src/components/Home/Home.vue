<!--
    Home é a página que todos os usuários não logados podem acessar, nela pode haver outros "components" além do login,
    mas por enquanto só pensei nissos.
-->
<template>
    <div>
        <h3 v-if="path === '/'">Você está na Main Page!</h3>
        <h4 v-if="isMorning">Good morning!</h4>
        <h4 v-if="isAfternoon">Good afternoon!</h4>
        <h4 v-if="isEvening">Good evening!</h4>

        <login/>
    </div>
</template>

<script>

    import Login from '../Login/Login'
    // get the current hour
    var hour = new Date().getHours()

    export default {
        components: {
            'login':Login
        },
        data () {
            return {
                path: location.pathname,
                isMorning: hour < 12,
                isAfternoon: hour >= 12 && hour < 18,
                isEvening: hour >= 18
            }
        }
    }
</script>
