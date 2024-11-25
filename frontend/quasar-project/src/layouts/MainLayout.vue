<template>
  <q-layout view="lHh Lpr lFf" class="body">
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

        <q-toolbar-title class="header-center"> 
        <img src="./../assets/logo.png" class="logo">
        <div class="text-center">
          <div>The Infinite Improbability Library</div>
        </div>
        </q-toolbar-title>
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

<style>
.logo {
  width: auto;  /* Ensure the width is automatic based on the image */
  max-width: 150px;  /* Limit the maximum size of the logo */
  height: auto;  /* Maintain aspect ratio */
  margin-right: 1rem; /* Optional: Add some space between the logo and text */
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .logo {
    max-width: 100px;  /* Reduce the logo size on smaller screens */
  }
}

.text-center{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-center{
  display: flex;
  flex-direction: center;
  justify-content: center;
  gap: 2%;
  padding: 0.5%;
}

.body{
  background-color: #4F6B3B;
}
</style>