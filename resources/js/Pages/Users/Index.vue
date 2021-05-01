<template>
<div class="content-wrapper">
              <!-- <div class="row" id="proBanner">
                <div class="col-12">
                  <span class="d-flex align-items-center purchase-popup">
                    <p>Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
                    <a href="https://www.bootstrapdash.com/product/purple-bootstrap-admin-template?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" target="_blank" class="btn download-button purchase-button ml-auto">Upgrade To Pro</a>
                    <i class="mdi mdi-close" id="bannerClose"></i>
                  </span>
                </div>
              </div> -->
              <!-- <div class="page-header">
                <h3 class="page-title">
                  <span class="page-title-icon bg-gradient-primary text-white mr-2">
                    <i class="mdi mdi-account-multiple"></i>
                  </span> Users
                </h3>
                <nav aria-label="breadcrumb">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                      <span></span>Lists &nbsp; <i class="mdi mdi-format-list-numbered icon-sm text-primary align-middle"></i>
                    </li>
                  </ul>
                </nav>
              </div> -->
              <!-- <div> -->

                  <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                         <h3 class="page-title">
                        <span class="page-title-icon bg-gradient-primary text-white mr-2">
                            <i class="mdi mdi-account-multiple"></i>
                        </span> Users
                        </h3>
                    </h4>
                    <p class="card-description">  <code>Users List</code>
                    </p>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th> ID </th>
                          <th> Name </th>
                          <th> Email </th>
                          <th> action </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(user, i) in users" :key="user.id">
                          <td class="py-1">
                              {{ i+1 }}
                          </td>
                          <td>
                              {{ user.name }}
                          </td>
                          <td>
                              {{ user.email }}
                          </td>
                          <td>
                              <button type="button" class="btn btn-outline-success btn-sm">Success</button>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
</div>
</template>

<script>
import Inertia from '@inertiajs/inertia-vue';
export default {
    props: ['users'],
    beforeMount() {
        this.$inertia.on('start', () => NProgress.start())

    },
    mounted() {
       this.$inertia.on('finish', () => NProgress.done())


    }
}
</script>

<style>

</style>
