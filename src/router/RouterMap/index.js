import app from './modules/app'
import manage from './modules/manage'
export default [
  {
    path: '/',
    redirect: '/manage',
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  ...app,
  ...manage,
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '*', redirect: '/404', hidden: true }
]
