import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { BsFillVolumeDownFill } from 'react-icons/bs';

export const VolumeIcon = memo((props: IconBaseProps) => (
  <BsFillVolumeDownFill {...props} />
));
