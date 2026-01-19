
export interface WalletStats {
  commission: number;
  totalOrders: number;
  incomplete: number;
  all: number;
  completed: number;
}

export interface WalletBalance {
  earnedCommission: string;
  frozenAmount: string;
  completedOrdersCount: number;
  availableAmount: string;
}
