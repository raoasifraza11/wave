// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const CalendarIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M7 2v3h10V2h2v3h1a2 2 0 012 2v15H2V7a2 2 0 012-2h1V2h2zm12.777 8H4.222v9.875h15.556L19.777 10z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

CalendarIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default CalendarIcon;