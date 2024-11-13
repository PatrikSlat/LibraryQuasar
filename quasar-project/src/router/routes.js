const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/browseBooks', component: () => import('pages/BrowseBooks.vue') },
      { path: '/searchBooks', component: () => import("pages/SearchBooks.vue") },
      { path: '/aboutUs', component: () => import("pages/AboutUs.vue") },
      { path: '/locationPage', component: () => import("pages/LocationPage.vue") },
      { path: '/loginPage', component: () => import("pages/LoginPage.vue") },
      { path: '/registerPage', component: () => import("pages/RegisterPage.vue") },
    ]
  },
  // ERROR CATCHER 404 !!!
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
