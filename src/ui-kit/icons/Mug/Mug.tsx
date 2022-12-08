import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdCoffee } from 'react-icons/md';

export const MugIcon = memo((props: IconBaseProps) => <MdCoffee {...props} />);
