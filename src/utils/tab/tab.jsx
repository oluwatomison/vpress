import React, {useEffect} from 'react';
import styles from '../../styles/tab.module.css';

const CustomTab = (props) => {
  let {data, currentTab, setCurrentTab} = props;

  const isSticky = () => {
    const header = document.getElementById('tab-section');

    const sticky = header.offsetTop - 80;
    const scrollTop = window.scrollY;
    scrollTop > sticky
      ? header.classList.add(styles.sticky)
      : header.classList.remove(styles.sticky);
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  return (
    <div className={styles.tabs} id="tab-section">
      <div className="container flex flex-row">
        {data.map((item, index) => (
          <p
            onClick={() => {
              setCurrentTab(item.title);
            }}
            key={index}
            className={currentTab === item.title ? `${styles.active}` : ''}>
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};
export default CustomTab;
