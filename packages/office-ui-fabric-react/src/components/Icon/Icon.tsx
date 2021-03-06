/* tslint:disable */
import * as React from 'react';
import styles from './Icon.scss'
/* tslint:enable */
import { IIconProps } from './Icon.Props';
import { IconType } from './IconType';
import { Image } from '../Image/Image';
import {
  css,
  getNativeProps,
  htmlElementProperties
} from '../../Utilities';

export const Icon: (props: IIconProps) => JSX.Element = (props: IIconProps) => {
  let customIcon = props.iconName === 'None';

  if (props.iconType === IconType.Image) {
    let containerClassName = css('ms-Icon', 'ms-Icon-imageContainer', styles.imageContainer, props.className);

    return (
      <div className={ containerClassName } >
        <Image { ...props.imageProps as any } />
      </div>
    );
  } else {
    let className = css('ms-Icon', customIcon ? '' : ('ms-Icon--' + props.iconName), props.className);

    return <i { ...getNativeProps(props, htmlElementProperties) } className={ className } />;
  }
};