import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import { Maybe } from '../../types/types';
import { CaretDown } from '../../utils/icons';
import styles from '../../public/styles/Navbar.module.scss';
import useDimensions from '../../CustomHooks/useDimensions';

const Dialog = dynamic(import('../Dialog'))

const browseList = ['Home', 'Movies', 'New & Popular', 'My List'];

export default function Menu() {
  const { isMobile, isTablet } = useDimensions();
  const menuRef = useRef<Maybe<HTMLDivElement>>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onMenu = (): void => {
    setIsVisible(true);
  };
  const onClose = (): void => {
    setIsVisible(false);
  };

  const caretAnimation = {
    animate: isVisible ? 'up' : 'down',
    variants: {
      up: {
        rotate: 180
      },
      down: {
        rotate: 0
      }
    },
    transition: { duration: 0.25 }
  };

  return (
    <>
      <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='' width={90} height={30} className={styles.nfLogo} />
      {isTablet || isMobile ? (
        <>
          <div className={styles.browse}>
            <div className={styles.options} onMouseOver={onMenu}>
              browse
            </div>
            <motion.div {...caretAnimation}>
              <CaretDown />
            </motion.div>
          </div>
          <Dialog dialogRef={menuRef} onClose={onClose} classname={styles.menu} visible={isVisible}>
            {browseList.map((item, index) => (
              <div key={index} className={styles.options}>
                {item}
              </div>
            ))}
          </Dialog>
        </>
      ) : (
        browseList.map((item, index) => (
          <div key={index} className={styles.options}>
            {item}
          </div>
        ))
      )}
    </>
  );
}
