import Image from 'next/image'

export default function () {
  return (
    <>
      <Image
        src="/api/images/pexels-photo-16933824.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </>
  )
}
