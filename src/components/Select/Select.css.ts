import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'

const select = style({
  border: 'none',
  fontWeight: 500,
  fontSize: 18,
  width: '100%',
  position: 'relative',
})

const selected = style({
  position: 'relative',
  padding: '15px 20px',
  boxShadow: `${vars.color.grey} 0px 0.8px 3px, ${vars.color.grey} 0px 6px 14px`,
  borderRadius: 10,
  border: 'none',
  background: vars.color.grey,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  outline: 'none',
  cursor: 'pointer',
  width: '100%',
  ':after': {
    marginLeft: 5,
    content: '',
    border: `solid ${vars.color.black}`,
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: 3,
    transform: 'rotate(45deg)',
  },
})

globalStyle(`${selected} > span`, {
  marginRight: 10,
})

const list = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  borderRadius: 10,
  padding: 0,
  margin: 0,
  listStyle: 'none',
  boxShadow: `${vars.color.grey} 0px 0.8px 3px, ${vars.color.grey} 0px 6px 14px`,
  background: vars.color.white,
  width: '100%',
})

const listItem = style({
  padding: '15px 20px',
  cursor: 'pointer',

  ':hover': {
    color: vars.color.purple,
  },
})

export { select, selected, list, listItem }
