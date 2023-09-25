

import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Feed from '@/components/Feed'
import LiveContest from '@/components/Feed';

export const metadata = {
    title: "Shuffle",
    description: "Keep track on running coding contest on different platforms",
  };

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
        {/* <div className="main">
          <div className="gradient" />
        </div> */}
        <main className="app bg-orange-300">
          {/* <Nav/> */}
          {/* {children} */}
          <LiveContest/>
        </main>

    </body>
  </html>
  )
}

export default RootLayout