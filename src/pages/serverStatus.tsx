import { Suspense, lazy, useState } from 'react'
import refresh from '@/assets/icons/refresh.svg'
import up from '@/assets/icons/uparrow.svg'
import down from '@/assets/icons/downarrrow.svg'

const Header = lazy(() => import('@/components/Header/Header'))
const Footer = lazy(() => import('@/components/Footer/Footer'))

function server() {
  const initialState = [
    { id: 1, isDropdownOpen: false, imageSrc: up },
    { id: 2, isDropdownOpen: false, imageSrc: up },
    { id: 3, isDropdownOpen: false, imageSrc: up },
  ]

  const [servers, setServers] = useState(initialState)

  const handleClick = (id: number) => {
    setServers((prevState) =>
      prevState.map((server) =>
        server.id === id
          ? {
              ...server,
              isDropdownOpen: !server.isDropdownOpen,
              imageSrc: server.isDropdownOpen ? up : down,
            }
          : server
      )
    )
  }

  return (
    <>
      <div className="flex h-full w-full flex-col text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <main className="scroll-smooth">
          <section className="relative bg-bgpatch1 bg-contain bg-no-repeat md:bg-bgpatch">
            <div className="video-bg-gradient absolute inset-0 h-full w-full"></div>

            <div className="m-4 flex h-[300px] flex-col justify-center space-y-5 text-center md:px-10">
              <h1 className="mx-auto flex max-w-xl flex-wrap font-serif text-4xl md:text-5xl">
                SERVER STATUS
              </h1>
              <div className="block h-px w-full bg-gradient-to-r from-transparent via-[#556DE0] to-transparent" />
            </div>

            <div className="flex flex-row justify-center gap-[20px]">
              {servers.map((server) => (
                <div
                  key={server.id}
                  className="z-10 flex h-full w-[25.5em] flex-col gap-[30px] rounded-[30px] bg-[#11113A] p-[20px] lg:p-10"
                >
                  <div className="flex flex-col items-center gap-[8px]">
                    <h3 className="font-serif text-lg font-bold drop-shadow-lg">
                      {server.id === 1
                        ? 'LOBBY SERVER'
                        : server.id === 2
                          ? 'GAME SERVER'
                          : 'MARKETPLACE SERVER'}
                    </h3>
                    <div className="flex flex-row items-center justify-center">
                      <p className="text-xl font-normal">Status:</p>
                      <span
                        className={`mx-2 rounded-2xl ${server.id === 1 ? 'bg-[#B22B49]' : server.id === 2 ? 'bg-[#C59C3A]' : 'bg-[#5EB16A]'} p-[6px]`}
                      >
                        {server.id === 1
                          ? 'Down'
                          : server.id === 2
                            ? 'Issues'
                            : 'Operational'}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[16px] rounded-[16px] bg-[#0C0C29] px-[30px] pb-[30px] pt-[20px]">
                    <div className="flex flex-row gap-[13em]">
                      <div className="text-lg font-normal text-[#98FFF9]">
                        Info
                      </div>
                      <button className="rounded-[5px] bg-[#212761] p-1">
                        <img src={refresh} alt="Refresh" />
                      </button>
                    </div>
                    <div className="block h-px w-[18em] bg-gradient-to-r from-[#556DE0] via-[#556DE0] to-transparent" />
                    <div>
                      <ul>
                        <li>Uptime:</li>
                        <li>Avg. Response Time:</li>
                        <li>Last Checked:</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[16px] rounded-[16px] bg-[#0C0C29] px-[30px] pb-[30px] pt-[20px]">
                    <div className="flex flex-row gap-[10em]">
                      <div className="text-lg font-normal text-[#98FFF9]">
                        View Logs
                      </div>
                      <button
                        className="rounded-[5px] bg-[#212761] p-1"
                        onClick={() => handleClick(server.id)}
                      >
                        <img src={server.imageSrc} alt="Toggle" />
                      </button>
                    </div>
                    <div className="block h-px w-[18em] bg-gradient-to-r from-[#556DE0] via-[#556DE0] to-transparent" />

                    {server.isDropdownOpen && (
                      <div className="mt-4">
                        
                        <ul>
                          <li>
                            10:05:23 Error | Failed to connect to the database
                          </li>
                          <li>09:55:12 Warning | High latency detected.</li>
                          <li>
                            09:50:00 Information | Server started successfully.
                          </li>
                          <li>09:45:45 Error | User authentication failed.</li>
                          <li>
                            09:40:30 Critical | Server down due to unknown issue
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

export default server
