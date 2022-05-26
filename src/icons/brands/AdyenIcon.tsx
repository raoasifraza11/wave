// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const AdyenIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                d="M18 2H2.5v4.997h10C13.5 7 14 7.5 14 8.5V17h-2.5c-1 0-1.5-.5-1.5-1.5v-6l-3.99-.005A4.005 4.005 0 002 13.5V18c0 2.214 1.786 4 4 4h15.987V6c0-2.214-1.773-4-3.987-4z"
                fill="#0ABF52"
            />
        </svg>
    );
};

AdyenIcon.defaultProps = {};
export default AdyenIcon;