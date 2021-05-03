<template>
<layout>
<div class="content-wrapper">
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
</layout>
</template>

<script>
import Layout from '../Layouts/Layout';

import { Inertia } from '@inertiajs/inertia'

export default {
    metaInfo: {
      title: 'Users List',
      titleTemplate: '%s - Document Management',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    props: ['users'],
   components: {
       Layout
   },
   beforeMount () {

       Inertia.on('start', () => NProgress.start())
   },
   mounted() {


        Inertia.on('finish', (event) => {
            NProgress.done()
        })
   }
}
</script>

<style>

</style>
