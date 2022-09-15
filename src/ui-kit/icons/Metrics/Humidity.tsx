import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { WiHumidity } from 'react-icons/wi';

export const HumidityIcon = memo((props: IconBaseProps) => (
  <WiHumidity {...props} />
));
