import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdMoreVert } from 'react-icons/md';

export const MoreIcon = memo((props: IconBaseProps) => <MdMoreVert {...props} />);
