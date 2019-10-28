import moment from 'moment';

export const toDate = time => {
  return moment(time.sec * 1e3 + time.nsec / 1e6).format('YYYY/MM/DD HH:mm:ss');
};

export function sub(left, right) {
  const durationNanos = left.nsec - right.nsec;
  const subTime = left.sec - right.sec - durationNanos / 1e9;
  return Math.abs(subTime);
}
