import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'

const dropdown = style({
  position: 'relative',
  zIndex: 100,
  width: 'fit-content',
})
const dropdownSelected = style({
  border: 'none',
  background: 'none',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'currentcolor',
  width: 'fit-content',
})
const dropdownList = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  borderRadius: 10,
  background: toRgba(vars.theme.textPrimary),
  color: toRgba(vars.theme.textSecondary),
  minWidth: 'fit-content',
})

const dropdownListItem = style({
  cursor: 'pointer',
  padding: '10px',
  fontWeight: 500,
})

globalStyle(`${dropdownList} > ul`, {
  listStyle: 'none',
  padding: 0,
  margin: 0,
})

export { dropdown, dropdownSelected, dropdownList, dropdownListItem }
