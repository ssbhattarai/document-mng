<template>
      <div class="container-scroller">

        <navbar></navbar>
        <div class="container-fluid page-body-wrapper">
            <sidebar></sidebar>
          <div class="main-panel">
              <slot></slot>
            <footerbar></footerbar>
          </div>
        </div>
      </div>
</template>

<script>
import Navbar from './Nav';
import Footerbar from  './Footerbar';
import Sidebar from './Sidebar';
export default {
    components: {
        Navbar,
        Footerbar,
        Sidebar
    }
}
</script>

<style>

</style>
