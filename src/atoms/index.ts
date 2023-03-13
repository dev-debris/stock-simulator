import {atom} from 'recoil';

const RECOIL_KEY = {
  candle: 'candleState',
};

export const candleState = atom<CandleType>({
  key: RECOIL_KEY.candle,
  default: 'minute',
});
