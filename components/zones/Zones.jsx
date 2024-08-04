import useZoneTasks from '@/libs/hooks/useZoneTasks'

export default function ZonesAppComponent({ Component, pageProps }) {
  useZoneTasks()

  return <Component {...pageProps} />
}
