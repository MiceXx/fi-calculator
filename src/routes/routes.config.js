
import { Whatshot, Domain, AccountBalance } from '@material-ui/icons';
import CompoundCalculator from '../components/CompoundCalculator/CompoundCalculator.jsx';
import RentBuyCalculator from '../components/RentBuyCalculator/RentBuyCalculator.jsx';
import FireCalculator from '../components/FireCalculator/FireCalculator.jsx';

export const APP_ROUTES = [
    {
        path: '/fire',
        component: FireCalculator,
        icon: Whatshot,
        label: 'FIRE Calculator'
    },
    {
        path: '/compound',
        component: CompoundCalculator,
        icon: AccountBalance,
        label: 'Compound Growth Calculator'
    },
    {
        path: '/',
        component: RentBuyCalculator,
        icon: Domain,
        label: 'Rent or Buy?'
    },
];