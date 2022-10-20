import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdCheckCircle } from 'react-icons/md';

export const GoodIcon = memo((props: IconBaseProps) => <MdCheckCircle {...props} />);
