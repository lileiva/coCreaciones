<template>
  <div class="home">
    <div class="userTable">
      <AdminTableUsers msg="Welcome to Your Vue.js App" />
    </div>
    <br>
    <div class="adminTable">
      <AdminTableOrganizations msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import AdminTableUsers from '../components/tables/AdminTableUsers.vue'
import AdminTableOrganizations from '../components/tables/AdminTableOrganizations.vue'

export default {
  name: 'Home',
  components: {
    AdminTableUsers,
    AdminTableOrganizations,
  },
}
</script>
