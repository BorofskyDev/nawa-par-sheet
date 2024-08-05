import MainLinkButton from '@/components/buttons/main-link-button/MainLinkButton'
import MainTitle from '@/components/headings/main-title/MainTitle'

export default function Home() {
  return (
    <main>
      <MainTitle />
      <ul className='grid-center'>
        <li className='red-theme'>
          <MainLinkButton href='/par-sheets'>PAR Sheets</MainLinkButton>
        </li>
        <li className='green-theme'>
          <MainLinkButton href='/zones'>Zone Selection</MainLinkButton>
        </li>
      </ul>
    </main>
  )
}
