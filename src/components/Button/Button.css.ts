import { createVar, keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/root.css'
import { pxToRem } from '../../utils/px-to-rem'
import { resetBtn } from '../../styles/reset.css'

const buttonPadding = createVar()
export default recipe({
  base: [
    resetBtn,
    {
      position: 'relative',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .3s',
      padding: `0 ${buttonPadding}`,
      userSelect: 'none',
      ':active': {
        opacity: 0.7,
      },
      ':hover': {
        opacity: 0.8,
      },
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  ],
  variants: {
    variant: {
      primary: {
        background: `linear-gradient(90deg,${vars.color.blue},${vars.color.purple})  `,
        color: vars.color.grey,
        // boxShadow: `${vars.color.blueLight2} 0px 0.8px 3px, ${vars.color.blueLight2} 0px 4px 14px`,
        selectors: {},
      },
      secondary: {
        color: vars.theme.colorPrimary,
        background: vars.theme.colorSecondary,
        // boxShadow: `${vars.color.greyLight4} 0px 0.8px 3px, ${vars.color.greyLight4} 0px 4px 14px`,
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
      '2xsmall': {
        fontSize: pxToRem(12),
        vars: {
          [buttonPadding]: pxToRem(15),
        },
        height: pxToRem(30),
      },
      xsmall: {
        fontSize: pxToRem(14),
        vars: {
          [buttonPadding]: pxToRem(20),
        },
        height: pxToRem(35),
      },
      small: {
        fontSize: pxToRem(15),
        vars: {
          [buttonPadding]: pxToRem(30),
        },
        height: pxToRem(45),
      },
      medium: {
        fontSize: pxToRem(17),
        vars: {
          [buttonPadding]: pxToRem(40),
        },
        height: pxToRem(60),
      },
      large: {
        fontSize: pxToRem(18),
        vars: {
          [buttonPadding]: pxToRem(65),
        },
        height: pxToRem(65),
      },
    },
    isIcon: {
      true: {
        background: 'transparent !important',
        boxShadow: 'none',
        padding: 0,
        height: 'auto',
      },
    },
    text: {
      true: {
        background: 'transparent',
        boxShadow: 'none',
        color: vars.theme.textColorPrimary,
        textDecoration: 'underline',
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
    variant: 'primary',
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
