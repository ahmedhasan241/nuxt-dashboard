import {
    LayoutDashboardIcon,
    ShoppingCartIcon,
    UsersIcon,
    BuildingStoreIcon,
    ReceiptIcon,
    FileTextIcon,
    LoginIcon,
    UserPlusIcon,
} from 'vue-tabler-icons';


export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    {
        title: 'Orders',
        icon: ShoppingCartIcon,
        to: '/orders'
    },
    {
        title: 'Users',
        icon: UsersIcon,
        to: '/users'
    },
    {
        title: 'Items',
        icon: BuildingStoreIcon,
        to: '/items'
    },
    {
        title: 'Transactions',
        icon: ReceiptIcon,
        to: '/transactions'
    },
    {
        title: 'Reports',
        icon: FileTextIcon,
        to: '/reports'
    },

    { header: 'Auth' },
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/auth/login'
    },
    {
        title: 'Register',
        icon: UserPlusIcon,
        to: '/auth/register'
    }
];
export default sidebarItem;
