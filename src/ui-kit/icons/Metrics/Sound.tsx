import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { BsFillVolumeDownFill } from 'react-icons/bs';

export const SoundIcon = memo((props: IconBaseProps) => (
  <BsFillVolumeDownFill {...props} />
));
