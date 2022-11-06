import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { ImNewspaper } from 'react-icons/im';

export const NewsIcon = memo((props: IconBaseProps) => <ImNewspaper {...props} />);
