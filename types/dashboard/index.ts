/* Dashboard Metric */
type DashboardMetric = {
    icon: string;
    title: string;
    value: string | number;
    percentage?: string;
    isIncrease?: boolean;
}


/*recent Orders*/
type recentOrderType = {
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
/* Transaction Type */
type TransactionType = {
    id: number;
    date: string;
    description: string;
    amount: string;
    status: string;
  };
  
  /* Report Type */
type ReportType = {
    id: number;
    title: string;
    date: string;
    type: string;
    summary: string;
  };
  

  /* User Type */
type UserType = {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar: string;
  };
export type {  recentOrderType, productsCards , DashboardMetric , TransactionType , ReportType , UserType  }