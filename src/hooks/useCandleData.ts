import {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {candleState} from '@/atoms';
import {useDayCandleQuery, useMinuteCandleQuery, useMonthCandleQuery, useWeekCandleQuery} from './queries';

const useCandleData = () => {
  const [candleType] = useRecoilState(candleState);

  const [data, setData] = useState<CandleResponse[]>([]);
  const {refetch: refetchMinute} = useMinuteCandleQuery({} as MinuteCandleRequest);
  const {refetch: refetchDay} = useDayCandleQuery({} as DayCandleRequest);
  const {refetch: refetchWeek} = useWeekCandleQuery({} as WeekCandleRequest);
  const {refetch: refetchMonth} = useMonthCandleQuery({} as MonthCandleRequest);

  useEffect(() => {
    const refetchData = () => {
      switch (candleType) {
        case 'minute':
          return refetchMinute();
        case 'day':
          return refetchDay();
        case 'week':
          return refetchWeek();
        case 'month':
          return refetchMonth();
      }
    };
    refetchData().then(({data}) => {
      setData(data);
    });
  }, [candleType, refetchDay, refetchMinute, refetchMonth, refetchWeek]);

  return data;
};

export default useCandleData;
