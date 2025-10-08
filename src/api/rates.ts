// Mock API for exchange rates

export interface ExchangeRate {
  currency: string;
  code: string;
  buy: number;
  sell: number;
  change: number;
  flag: string;
  lastUpdate: Date;
}

// Mock exchange rates data
const mockRates: ExchangeRate[] = [
  {
    currency: 'Dólar USD',
    code: 'USD',
    buy: 4.10,
    sell: 4.15,
    change: 0.5,
    flag: '🇺🇸',
    lastUpdate: new Date()
  },
  {
    currency: 'Euro',
    code: 'EUR',
    buy: 4.45,
    sell: 4.52,
    change: -0.3,
    flag: '🇪🇺',
    lastUpdate: new Date()
  },
  {
    currency: 'Peso Argentino',
    code: 'ARS',
    buy: 0.0045,
    sell: 0.0048,
    change: 1.2,
    flag: '🇦🇷',
    lastUpdate: new Date()
  },
  {
    currency: 'Real Brasileño',
    code: 'BRL',
    buy: 0.82,
    sell: 0.85,
    change: 0.1,
    flag: '🇧🇷',
    lastUpdate: new Date()
  },
  {
    currency: 'Peso Chileno',
    code: 'CLP',
    buy: 0.0042,
    sell: 0.0045,
    change: -0.2,
    flag: '🇨🇱',
    lastUpdate: new Date()
  },
  {
    currency: 'Peso Colombiano',
    code: 'COP',
    buy: 0.00095,
    sell: 0.00098,
    change: 0.3,
    flag: '🇨🇴',
    lastUpdate: new Date()
  },
  {
    currency: 'Peso Mexicano',
    code: 'MXN',
    buy: 0.22,
    sell: 0.23,
    change: 0.8,
    flag: '🇲🇽',
    lastUpdate: new Date()
  },
  {
    currency: 'Libra Esterlina',
    code: 'GBP',
    buy: 5.10,
    sell: 5.20,
    change: -0.1,
    flag: '🇬🇧',
    lastUpdate: new Date()
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Get all exchange rates
export const getExchangeRates = async (): Promise<ExchangeRate[]> => {
  await delay(800); // Simulate network delay

  // Add some random variation to make it more realistic
  const rates = mockRates.map(rate => ({
    ...rate,
    buy: rate.buy * (1 + (Math.random() - 0.5) * 0.01),
    sell: rate.sell * (1 + (Math.random() - 0.5) * 0.01),
    change: rate.change + (Math.random() - 0.5) * 0.5,
    lastUpdate: new Date()
  }));

  return rates;
};

// Get specific exchange rate
export const getExchangeRate = async (code: string): Promise<ExchangeRate | null> => {
  await delay(500);

  const rate = mockRates.find(r => r.code === code);
  if (!rate) return null;

  return {
    ...rate,
    buy: rate.buy * (1 + (Math.random() - 0.5) * 0.01),
    sell: rate.sell * (1 + (Math.random() - 0.5) * 0.01),
    change: rate.change + (Math.random() - 0.5) * 0.5,
    lastUpdate: new Date()
  };
};

// Calculate exchange
export const calculateExchange = async (
  fromCode: string,
  toCode: string,
  amount: number
): Promise<{ result: number; fee: number; total: number } | null> => {
  await delay(600);

  const fromRate = mockRates.find(r => r.code === fromCode);
  const toRate = mockRates.find(r => r.code === toCode);

  if (!fromRate || !toRate) return null;

  // Simulate exchange calculation
  const baseAmount = amount * fromRate.sell;
  const result = baseAmount / toRate.buy;
  const fee = result * 0.02; // 2% fee

  return {
    result: result - fee,
    fee,
    total: result
  };
};

// Subscribe to rate updates (WebSocket simulation)
export const subscribeToRates = (
  callback: (rates: ExchangeRate[]) => void,
  interval: number = 30000
): () => void => {
  const intervalId = setInterval(async () => {
    const rates = await getExchangeRates();
    callback(rates);
  }, interval);

  // Return unsubscribe function
  return () => clearInterval(intervalId);
};