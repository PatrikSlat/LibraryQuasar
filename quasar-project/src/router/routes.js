//PAGES IMPORTED TO CREATE ROUTES
import BrowseBooks from 'src/pages/BrowseBooks.vue'
import SearchBooks from 'src/pages/SearchBooks.vue'
import AboutUs from 'src/pages/AboutUs.vue'
import Location from 'src/pages/Location.vue'
import Login from 'src/pages/Login.vue'
import Register from 'src/pages/Register.vue'


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/', component: Home, name: 'home' },
      { path: '/browseBook', component: BrowseBooks, name: 'browseBooks' },
      { path: '/searchBook', component: SearchBooks, name: 'searchBooks' },
      { path: '/aboutUs', component: AboutUs, name: 'aboutUs' },
      { path: '/location', component: Location, name: 'location' },
      { path: '/login', component: Login, name: 'login' },
      { path: '/register', component: Register, name: 'register' },
    ]
  },

  // ERROR CATCHER 404 !!!
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
