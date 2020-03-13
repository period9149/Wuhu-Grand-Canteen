import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
// import CourseList from '../views/courses/CourseList.vue'
// import CourseEdit from '../views/courses/CourseEdit.vue'
import ResourseCrud from '../views/ResourseCrud.vue'

Vue.use(VueRouter)

const routes :RouteConfig[] = [     
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/:resource/list', name: 'course-crud', component: ResourseCrud, props: true },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
