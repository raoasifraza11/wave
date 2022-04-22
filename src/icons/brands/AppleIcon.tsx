// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const AppleIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                d="M19.93 8.822c-1.192-1.744-3.055-1.94-3.701-1.99-1.665-.098-3.08.934-3.874.934-.796 0-2.013-.885-3.33-.86-1.713.024-3.303.982-4.172 2.506-1.788 3.049-.472 7.571 1.267 10.054.845 1.229 1.862 2.581 3.204 2.533 1.267-.05 1.763-.812 3.304-.812 1.539 0 1.986.812 3.328.787 1.39-.024 2.26-1.229 3.105-2.459.969-1.4 1.365-2.752 1.39-2.826-.025-.025-2.682-1.033-2.707-4.056-.025-2.532 2.087-3.736 2.186-3.81zM15.196 5.205c.697-.863 1.17-2.021 1.046-3.205-1.021.05-2.267.666-2.988 1.53-.648.74-1.221 1.946-1.072 3.08 1.146.099 2.291-.566 3.014-1.405z"
                fill="#000"
            />
        </svg>
    );
};

AppleIcon.defaultProps = {};
export default AppleIcon;