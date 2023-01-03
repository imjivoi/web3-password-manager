import { createVar, keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/root.css'

const buttonHoverColor = createVar()
export default recipe({
  base: {
    position: 'relative',
    outline: 'none',
    border: `none`,
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .3s',
    ':active': {
      opacity: 0.6,
    },
    ':hover': {
      background: buttonHoverColor,
    },
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
  variants: {
    color: {
      primary: {
        background: vars.color.blue,
        color: vars.color.grey,
        // boxShadow: `${vars.color.blueLight2} 0px 0.8px 3px, ${vars.color.blueLight2} 0px 4px 14px`,
        vars: {
          [buttonHoverColor]: vars.color.blueLight1,
        },

        selectors: {},
      },
      secondary: {
        color: vars.color.blue,
        background: vars.color.grey,
        // boxShadow: `${vars.color.greyLight4} 0px 0.8px 3px, ${vars.color.greyLight4} 0px 4px 14px`,
        vars: {
          [buttonHoverColor]: vars.color.greyLight1,
        },
      },
    },
    width: {
      full: {
        width: '100%',
      },
      auto: {
        width: 'auto',
      },
    },
    size: {
      small: {
        fontSize: 15,
        padding: '0 30px',
        height: '45px',
      },
      medium: {
        fontSize: 17,
        padding: '0 40px',
        height: '60px',
      },
      large: {
        fontSize: 18,
        padding: '0 50px',
        height: '65px',
      },
    },
    hasIcon: {
      true: {
        background: 'transparent',
        boxShadow: 'none',
      },
    },
    text: {
      true: {
        background: 'transparent',
        boxShadow: 'none',
        color: vars.color.black,
        padding: 0,
      },
    },
    border: {
      pill: {
        borderRadius: '30px',
      },
      round: {
        borderRadius: 10,
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    width: 'auto',
    size: 'medium',
    border: 'pill',
  },
})

const animatedgradient = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
})

export const buttonGradientBorder = style({
  '::after': {
    opacity: 0,
    content: '',
    position: 'absolute',
    top: 'calc(-1 * 2)',
    left: 'calc(-1 * 2)',
    height: 'calc(100% + 2* 2)',
    width: 'calc(100% + 2* 2)',
    background:
      'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
    borderRadius: 'calc(2 * 2)',
    zIndex: '-1',
    animation: `${animatedgradient} 3s ease alternate infinite`,
    backgroundSize: '300% 300%',
  },
})
