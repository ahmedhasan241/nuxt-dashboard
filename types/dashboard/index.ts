/* Dashboard Metric */
type DashboardMetric = {
    icon: string;
    title: string;
    value: string | number;
    percentage?: string;
    isIncrease?: boolean;
}


/*product performance*/
type productPerformanceType = {
    id: number;
    image: string;
    name: string;
    qty: number;
    orderDate: string;
    amount: string;
    status: string;
    statusColor: string;
};

/*Products card types*/
type productsCards = {
    title: string;
    link: string;
    photo: string;
    salesPrice: number;
    price: number;
    rating: number;
};

export type {  productPerformanceType, productsCards , DashboardMetric }