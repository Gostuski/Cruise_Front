import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import PhoneVerify from '../components/PhoneVerify'
import SignUpCard from '../components/SignUpCard'
import Profile from '../components/Profile'
import Settings from '../components/Settings'
import HomeSettings from '../components/Settings/HomeSettings'
import MailSettings from '../components/Settings/MailSettings'
import WorkSettings from '../components/Settings/WorkSettings'
import PhoneSettings from '../components/Settings/PhoneSettings'
import Shortcuts from '../components/Settings/Shortcuts'
import BillingInfo from '../components/Settings/BillingInfo'
import BecomeTerms from '../components/BecomeTerms'
import BecomeDriverInfo from '../components/BecomeDriverInfo'
import BecomePhotos from '../components/BecomePhotos'
import BecomeCarInfo from '../components/BecomeCarInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/signupVerify',
    name: 'phoneVerify',
    component: PhoneVerify
  },
  {
    path: '/signupCard',
    name: 'cardVerify',
    component: SignUpCard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/settings/phone',
    name: 'PhoneSettings',
    component: PhoneSettings
  },
  {
    path: '/settings/mail',
    component: MailSettings
  },
  {
    path: '/settings/work',
    component: WorkSettings
  },
  {
    path: '/settings/home',
    component: HomeSettings
  },
  {
    path: '/settings/shortcuts',
    component: Shortcuts
  },
  {
    path: '/profile/billing',
    component: BillingInfo
  },
  {
    path: '/becomeadriver/terms',
    component: BecomeTerms
  },
  {
    path: '/becomeadriver/driverinfo',
    component: BecomeDriverInfo
  },
  {
    path: '/becomeadriver/carinfo',
    component: BecomeCarInfo
  },
  {
    path: '/becomeadriver/photos',
    component: BecomePhotos
  }

]

const router = new VueRouter({
  routes
})

export default router
