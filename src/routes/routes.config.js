
import { Whatshot, Domain, AccountBalance } from '@material-ui/icons';
import CompoundCalculator from '../components/CompoundCalculator/CompoundCalculator';
import RentBuyCalculator from '../components/RentBuyCalculator/RentBuyCalculator';
import FireCalculator from '../components/FireCalculator/FireCalculator';

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
        path: '/rentorbuy',
        component: RentBuyCalculator,
        icon: Domain,
        label: 'Rent or Buy?'
    },
];