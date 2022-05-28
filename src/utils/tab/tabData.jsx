import Infopage from '../../views/infoPage/infoPage';
import Configurepage from '../../views/configurePage/configurePage';
import Reportpage from '../../views/reportPage/reportPage';
export const TabData = [
  {
    title: 'Info',
    key: 1,
    component: <Infopage />,
  },
  {
    title: 'Configure',
    key: 2,
    component: <Configurepage />,
  },
  {
    title: 'Reports',
    key: 3,
    component: <Reportpage />,
  },
];

// export const renderCurrentTab = (currentTab, tabs) => {
//   return tabs.map((tab) => {
//     if (currentTab === tab.title) return tab.component;
//   });
// };
