<template>
  <layout>
      <admin v-if="user.is_admin"></admin>
      <user v-else></user>
  </layout>
</template>

<script>
import Layout from '../Layouts/Layout';
import Admin from './Admin';
import User from './User';

export default {
    components: {
        Layout,
        Admin,
        User
    },
     computed: {
      user() {
        return this.$page.props.auth.user
      }
    }
}
</script>

<style>

</style>
