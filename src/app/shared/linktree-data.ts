export interface DiscountCode {
  shop: string;
  code: string;
  discount: string;
  url: string;
}

export const DISCOUNT_CODES: DiscountCode[] = [
  { shop: 'Uniqso', code: 'pinchy', discount: '10% off', url: 'https://www.uniqso.com/?ref=pinchy' },
  {
    shop: 'PinkyParadise',
    code: 'pinchy10',
    discount: '10% off',
    url: 'https://www.pinkyparadise.com/pinchyy',
  },
  {
    shop: 'ohmykitty',
    code: 'PINCHY',
    discount: '5% off',
    url: 'https://ohmykitty4u.com/pinchy',
  },
  {
    shop: 'Wild',
    code: 'PINCHY',
    discount: 'for a discount',
    url: 'https://shopwildrefill.com/PINCHY',
  },
];
