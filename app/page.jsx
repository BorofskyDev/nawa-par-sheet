import MainLinkButton from '@/components/buttons/main-link-button/MainLinkButton'
import MainTitle from '@/components/headings/main-title/MainTitle'

export default function Home() {
  return (
    <main>
      <MainTitle />
      <ul>
        <li>
          <MainLinkButton href='/par-sheets'>PAR Sheets</MainLinkButton>
        </li>
        <li>
          <MainLinkButton href='/zones'>Zone Selection</MainLinkButton>
        </li>
      </ul>
    </main>
  )
}
