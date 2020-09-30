import React, { FC, ReactNode } from 'react';
import VizSensor from 'react-visibility-sensor';

const Visibility: FC<{
  children: ReactNode;
  shouldTrigger: boolean;
  cb: Function;
}> = ({ children, shouldTrigger, cb }) => (
  <VizSensor
    onChange={isVisible => {
      if (isVisible && shouldTrigger) {
        cb();
      }
    }}
  >
    {children}
  </VizSensor>
);

export default Visibility;
