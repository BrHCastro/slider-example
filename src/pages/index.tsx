/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { Slider } from '~/components/Slider'
import { PartnersInterface, PartnersType } from '~/interfaces/PartnersInterface'
import { fetchAPI } from '~/lib/axios'

interface HomeProps {
  partners: PartnersType[]
}

export default function Home({ partners }: HomeProps) {
  const [isVisible, setIsVisible] = useState(false)

  function getIsOverlayClass(e: any) {
    setIsVisible(e.root.classList.contains('is-overflow'))
  }

  return (
    <main className="bg-zinc-50 text-zinc-900 w-full h-screen flex flex-col justify-center">
      <div className="px-8 py-12 bg-zinc-300">
        <Slider.Root
          onResize={getIsOverlayClass}
          onMounted={getIsOverlayClass}
          className="splideContainer"
          options={{
            height: 64,
            easing: 'linear',
            arrows: isVisible,
            pagination: false,
            autoWidth: true,
            autoHeight: true,
            perMove: 3,
          }}
        >
          {partners.map((partner) => {
            return (
              <Slider.Slide key={partner.id} className="!h-9">
                <Image
                  className="w-auto h-9"
                  src={partner.image}
                  alt=""
                  width={100}
                  height={80}
                  quality={100}
                  priority
                />
              </Slider.Slide>
            )
          })}
        </Slider.Root>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const partners = await fetchAPI<PartnersInterface>({
    path: 'partner',
  })

  return {
    props: {
      partners: partners.data,
    },
  }
}
