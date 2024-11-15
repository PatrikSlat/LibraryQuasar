<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          The Infinite Improbability Library
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Quick MENU !
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          target="_self"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Home',
    caption: 'Home Page',
    icon: 'home',
    link: '#/'
  },
  {
    title: 'Browse books',
    caption: 'Browse all Books',
    icon: 'book',
    link: '#/browseBooks'
  },
  {
    title: 'Search Books',
    caption: 'Search for books',
    icon: 'search',
    link: '#/searchBooks'
  },
  {
    title: 'About us',
    caption: 'About The Infinite Improbability Library',
    icon: 'info',
    link: '#/aboutUs'
  },
  {
    title: 'Find Us',
    caption: 'Our location HQ',
    icon: 'location_on',
    link: '#/locationPage'
  },
  {
    title: 'Login',
    caption: 'Log into your account',
    icon: 'login',
    link: '#/loginPage'
  },
  {
    title: 'Register',
    caption: 'Create a Library Account!',
    icon: 'person_add',
    link: '#/registerPage'
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
