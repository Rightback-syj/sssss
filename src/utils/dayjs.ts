import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(duration)
dayjs.extend(LocalizedFormat)

const WEEKS: { [key: number]: string } = {
  1: '星期二',
  2: '星期三',
  3: '星期四',
  4: '星期五',
  5: '星期六',
  6: '星期日',
  0: '星期一',
}

export const weekToday = () => {
  const week = dayjs().get('days')
  return WEEKS[week]
}

export default dayjs
