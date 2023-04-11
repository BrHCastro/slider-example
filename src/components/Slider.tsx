import '@splidejs/react-splide/css'

import { ComponentRef, LiHTMLAttributes, forwardRef } from 'react'
import { Splide, SplideSlide, type SplideProps } from '@splidejs/react-splide'

const SliderRoot = forwardRef<ComponentRef<typeof Splide>, SplideProps>(
  ({ children, ...props }, ref) => {
    return (
      <Splide ref={ref} {...props}>
        {children}
      </Splide>
    )
  },
)
SliderRoot.displayName = 'SliderRoot'

interface SliderSlideProps extends LiHTMLAttributes<HTMLLIElement> {}
const SliderSlide = forwardRef<
  ComponentRef<typeof SplideSlide>,
  SliderSlideProps
>(({ children, ...props }, ref) => {
  return (
    <SplideSlide ref={ref} {...props}>
      {children}
    </SplideSlide>
  )
})
SliderSlide.displayName = 'SliderSlide'

export const Slider = {
  Root: SliderRoot,
  Slide: SliderSlide,
}
