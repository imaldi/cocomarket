import dayjs from 'dayjs'

export const DD_MMMM_YYYY = (date: string) => {
  return dayjs(date).format('DD MMMM YYYY')
}
