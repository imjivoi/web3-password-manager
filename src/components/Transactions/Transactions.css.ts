import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'

const transactionItem = style({
  borderRadius: 20,
  background: toRgba(vars.color.grey),
  padding: '20px 40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

globalStyle(`${transactionItem} + ${transactionItem}`, {
  marginTop: vars.space.xsmall,
})

globalStyle(`${transactionItem} > div > div:first-child`, {
  fontWeight: 500,
  marginBottom: 6,
  color: toRgba(vars.color.purple),
})

export { transactionItem }
