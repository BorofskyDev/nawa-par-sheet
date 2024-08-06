import PageNotice from '@/components/headings/page-notice/PageNotice'

import LinkContainer from '@/components/layout/link-container/LinkContainer'
import Navbar from '@/components/layout/nav/Navbar'
import { GiInfinity } from 'react-icons/gi'



export const metadata = {
  title: 'The PAR Sheet!',
  description:
    'A PAR sheet for expiration dates for items going frozen to ambient',
}

export default function ParSheetLayout({ children }) {
  return (
    
      <div >
        
          
          <PageNotice>
            <GiInfinity />
            {''} = Stack as much as possible
          </PageNotice>
          {children}
          <LinkContainer />
      </div>
   
  )
}
