import { type ImageProps, getImageProps } from 'next/image'

/**
 * https://nextjs.org/docs/app/api-reference/components/image#background-css
 */
export function getCssImage(props: Omit<ImageProps, 'alt'>) {
  const {
    props: { srcSet },
  } = getImageProps({ ...props, alt: '' })
  return getBackgroundImage(srcSet)
}

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map(str => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}
