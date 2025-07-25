import React, { useState, ReactNode, MouseEvent, Dispatch, SetStateAction } from 'react';

type TabProps = {
  id?: string;
  label: string;
  children: ReactNode;
  className?: string; 
  icon?: string;
  iconActive?: string;
  type?: string;
};

const Tab = ({label, icon, children, type }: TabProps) => {
  return (
    <div className="hidden" role="tabpanel" aria-labelledby={label}>
      {!type && <img src={icon} alt={`${label} icon`} className="h-6 w-6 md:h-8 md:w-8" />}
      {label}
      {children}
    </div>
  );
};

type TabsProps = {
  children: ReactNode[];
  className?: string;
  type?: string;
  activeTab?: string;
  onTabChange?: Dispatch<SetStateAction<string>>;
};

const Tabs = ({ children, type }: TabsProps) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const foo = params.get('contact');
  const [activeTab, setActiveTab] = useState<string>(foo?(children[4] as React.ReactElement<TabProps>).props.label: (children[0] as React.ReactElement<TabProps>).props.label);

  const handleClick = (e: MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
      <div className="w-full overflow-x-auto">
        <div className={`${!type? 'flex-wrap': ''} flex justify-center mb-4 sm:mb-6 md:mb-8 py-[0.375em] bg-tab-bg bg-opacity-80 rounded-3xl mx-auto w-fit max-w-[95%] overflow-x-auto scrollbar-hide`}>
          {children.map((child) => {
            const tab = child as React.ReactElement<TabProps>;
            return (
              <button
                key={tab.props.label}
                className={`min-w-fit ${activeTab === tab.props.label 
                  ? 'rounded-3xl bg-[#98FFF9] text-[#03082F] mx-0.5 sm:mx-1 px-1 sm:px-2' 
                  : 'text-[#98FFF9] mx-0.5 sm:mx-1 px-1 sm:px-2 md:px-4'} font-medium whitespace-nowrap`}
                onClick={(e) => handleClick(e, tab.props.label)}
                aria-selected={activeTab === tab.props.label}
              >
                <div className="flex items-center justify-center">
                  {!type && (
                    <img
                      src={activeTab === tab.props.label ? tab.props.iconActive : tab.props.icon}
                      alt={`${tab.props.label} icon`}
                      className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                    />
                  )}
                  <span className="px-3 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm">{tab.props.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="w-full">
        {children.map((child) => {
          const tab = child as React.ReactElement<TabProps>;
          if (tab.props.label === activeTab) {
            return (
              <div key={tab.props.label} role="tabpanel" aria-labelledby={tab.props.label} className={tab.props.className}>
                {tab.props.children}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export { Tabs, Tab };
