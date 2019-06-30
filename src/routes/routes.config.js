
import { Whatshot, Domain } from '@material-ui/icons';
import FireCalculator from '../components/FireCalculator/FireCalculator.jsx';
import RentBuyCalculator from '../components/RentBuyCalculator/RentBuyCalculator.jsx';

export const APP_ROUTES = [
    {
        path: '/fire',
        component: FireCalculator,
        icon: Whatshot,
        label: 'FIRE Calculator'
    },
    {
        path: '/rentorbuy',
        component: RentBuyCalculator,
        icon: Domain,
        label: 'Rent or Buy?'
    },
];