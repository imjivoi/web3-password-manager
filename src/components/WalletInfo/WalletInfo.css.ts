import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'

const box = style({
  background: vars.color.grey,
  padding: vars.space.xlarge,
  borderRadius: 20,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 300,
})

globalStyle(`${box} > div`, {
  width: '50%',
})

const boxBalances = style({
  background: '#8338ecb3',
  padding: vars.space.medium,
  borderRadius: 20,
  minHeight: 180,
})

const balanceTitle = style({
  color: '#fff',
})

const balanceItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

globalStyle(`${balanceItem} + ${balanceItem}`, {
  marginTop: vars.space.xsmall,
})

globalStyle(`${balanceItem} > span`, {
  color: '#fff',
  fontWeight: 500,
  fontSize: 20,
})

const sum = style({
  fontSize: 48,
  fontWeight: 500,
  textAlign: 'left',
})

const address = style({
  fontSize: 20,
})

export { box, boxBalances, balanceItem, sum, address, balanceTitle }
