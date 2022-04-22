// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const ParkingIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                d="M9.902 20v-5.245h3.52c3.284 0 5.578-2.173 5.578-5.344C19 6.184 16.784 4 13.546 4H7v16h2.902zm2.867-7.617H9.902V6.394h2.879c2.091 0 3.272 1.053 3.272 3.016 0 1.907-1.214 2.972-3.284 2.972z"
                fill="currentColor"
            />
        </svg>
    );
};

ParkingIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ParkingIcon;