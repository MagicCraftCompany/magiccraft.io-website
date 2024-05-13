import React, { useState, ReactNode, MouseEvent } from 'react';

type TabProps = {
  label: string;
  children: ReactNode;
  className?: string; 
  icon: string;
  iconActive: string;
};

const Tab = ({ label ,icon}: TabProps) => {
  return (
    <div className="hidden" role="tabpanel" aria-labelledby={label}>
      <img src={icon} alt={`${label} icon`} />
      {label}
    </div>
  );
};

type TabsProps = {
  children: ReactNode[];
  className?: string; 
};

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>((children[0] as React.ReactElement<TabProps>).props.label);

  const handleClick = (e: MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className=" mx-auto">
      <div className="flex flex-wrap p-1 bg-[#03082F] rounded-3xl ">
        {children.map(child => {
          const tab = child as React.ReactElement<TabProps>;
          return (
            <button
              key={tab.props.label}
              className={` md:w-auto ${activeTab === tab.props.label ? 'rounded-3xl  bg-[#98FFF9] text-[#03082F] mx-2 px-4 ' : ''} flex-1 text-[#98FFF9]-700 font-medium  mx-2 px-4 whitespace-nowrap`}
              onClick={e => handleClick(e, tab.props.label)}
              aria-selected={activeTab === tab.props.label}
            >
               <div className="flex items-center">
           
              <img src={activeTab === tab.props.label ? tab.props.iconActive : tab.props.icon} alt={`${tab.props.label} icon`}  />
             
              <span className='p-4'>{tab.props.label}</span>
            </div>
            </button>
          );
        })}
      </div>
      <div className="py-4">
        {children.map(child => {
          const tab = child as React.ReactElement<TabProps>;
          if (tab.props.label === activeTab) {
            return (
              <div key={tab.props.label} role="tabpanel" aria-labelledby={tab.props.label}>
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
