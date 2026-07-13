import {
  Children,
  isValidElement,
  useState,
  type Dispatch,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type SetStateAction,
} from 'react'

type TabProps = {
  id?: string
  label: string
  children: ReactNode
  className?: string
  icon?: string
  iconActive?: string
  type?: string
}

const Tab = ({ label, icon, children, type }: TabProps) => (
  <div className="hidden" role="tabpanel" aria-labelledby={label}>
    {!type && (
      <img src={icon} alt={label + ' icon'} className="h-6 w-6 md:h-8 md:w-8" />
    )}
    {label}
    {children}
  </div>
)

type TabsProps = {
  children: ReactNode
  className?: string
  type?: string
  activeTab?: string
  onTabChange?: Dispatch<SetStateAction<string>>
}

const safeId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const Tabs = ({ children, type }: TabsProps) => {
  const tabs = Children.toArray(children).filter(
    (child): child is ReactElement<TabProps> => isValidElement<TabProps>(child)
  )
  const params = new URLSearchParams(
    typeof window === 'undefined' ? '' : window.location.search
  )
  const contactTab = params.has('contact')
    ? tabs.find(
        (tab) =>
          tab.props.id?.toLowerCase() === 'contact' ||
          tab.props.label.toLowerCase().includes('contact')
      )
    : undefined
  const [activeTab, setActiveTab] = useState(
    contactTab?.props.label ?? tabs[0]?.props.label ?? ''
  )

  const handleClick = (
    event: MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    event.preventDefault()
    setActiveTab(newActiveTab)
  }

  if (tabs.length === 0) return null

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <div className="w-full overflow-x-auto">
        <div
          role="tablist"
          className={
            (!type ? 'flex-wrap ' : '') +
            'scrollbar-hide mx-auto mb-4 flex w-fit max-w-[95%] justify-center overflow-x-auto rounded-3xl bg-tab-bg bg-opacity-80 py-[0.375em] sm:mb-6 md:mb-8'
          }
        >
          {tabs.map((tab) => {
            const tabId = 'tab-' + safeId(tab.props.id ?? tab.props.label)
            const panelId = 'panel-' + safeId(tab.props.id ?? tab.props.label)
            const selected = activeTab === tab.props.label

            return (
              <button
                key={tab.props.label}
                id={tabId}
                type="button"
                role="tab"
                className={
                  'min-w-fit whitespace-nowrap font-medium ' +
                  (selected
                    ? 'mx-0.5 rounded-3xl bg-[#98FFF9] px-1 text-[#03082F] sm:mx-1 sm:px-2'
                    : 'mx-0.5 px-1 text-[#98FFF9] sm:mx-1 sm:px-2 md:px-4')
                }
                onClick={(event) => handleClick(event, tab.props.label)}
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
              >
                <span className="flex items-center justify-center">
                  {!type && tab.props.icon && (
                    <img
                      src={
                        selected
                          ? (tab.props.iconActive ?? tab.props.icon)
                          : tab.props.icon
                      }
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                    />
                  )}
                  <span className="px-3 py-1 text-xs sm:py-2 sm:text-sm">
                    {tab.props.label}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="w-full">
        {tabs.map((tab) => {
          if (tab.props.label !== activeTab) return null

          const id = safeId(tab.props.id ?? tab.props.label)
          return (
            <div
              key={tab.props.label}
              id={'panel-' + id}
              role="tabpanel"
              aria-labelledby={'tab-' + id}
              className={tab.props.className}
            >
              {tab.props.children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Tabs, Tab }
