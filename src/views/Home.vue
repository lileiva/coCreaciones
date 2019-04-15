<template>
  <div class="home">
    <AdminTableUsers msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import AdminTableUsers from '../components/AdminTableUsers.vue'

export default {
  name: 'Home',
  components: {
    AdminTableUsers,
  },
}
</script>
