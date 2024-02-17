import Container from '../Container';
import CreateAccount from '../CreateAccount';
import CreateNewPassword from '../CreateNewPassword';
import ForgetPassword from '../ForgetPassword';
import LoginWithEmial from '../LoginWithEmail';
import Verification from '../Verification';
import VerificationPassword from '../VerificationPassword';
import Profile from '../Profile';
import ProfileMenu from '../ProfileMenu';
import PaymentMethod from '../ProfileMenuWindow/PaymentMethod';

export const publicRoutes = [
    {path: '/', component: Container, exact: true},
    {path: '/createaccount', component: CreateAccount, exact: true},
    {path: '/createnewpassword', component: CreateNewPassword, exact: true},
    {path: '/forgetpassword', component: ForgetPassword, exact: true},
    {path: '/login', component: LoginWithEmial, exact: true},
    {path: '/verification', component: Verification, exact: true},
    {path: '/verificationpassword', component: VerificationPassword, exact: true},
]

export const privateRoutes = [
    {path: '/profile', component: Profile, exact: true},
    {path: '/profilemenu/myprofile', component: ProfileMenu, exact: true},
    {path: '/profilemenu/paymentmethod', component: PaymentMethod, exact: true},

]