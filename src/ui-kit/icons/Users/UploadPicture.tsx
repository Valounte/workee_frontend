import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { HiCamera } from 'react-icons/hi';

export const UploadPictureIcon = memo((props: IconBaseProps) => (
  <HiCamera {...props} />
));
