//アイコンやアイコンの設定を返却するclass
import React, { Component } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Props, State } from '../interface/SampleIconInterface';
import SampleImage from './SampleImage';
import SampleIconType from '../../enum/SampleIconType';
import SampleIconSizeType from '../../enum/SampleIconSizeType';

export default class SampleIcon extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    getSize(): number {
        switch (this.props.sizeType) {
          case SampleIconSizeType.XSmall:
            return 14;
          case SampleIconSizeType.Small:
            return 20;
          case SampleIconSizeType.Medium:
            return 24;
          case SampleIconSizeType.Large:
            return 28;
          case SampleIconSizeType.None:
          default:
            return 24;
        }
    }

    getImageSourcePropType(): ImageSourcePropType {
        switch(this.props.type) {
            case SampleIconType.Timeline:
                return require('../../../resources/icon_images/timeline.png');
            case SampleIconType.Post:
                return require('../../../resources/icon_images/post.png');
            case SampleIconType.Picture:
                return require('../../../resources/icon_images/picture.png');
            case SampleIconType.Hamburger:
                return require('../../../resources/icon_images/hamburger.png');
            default:
                return require('../../../resources/icon_images/timeline.png');
        }
    }

    render(): React.ReactNode {
        let imageSourcePropType = this.getImageSourcePropType();
        let size = this.getSize();

        return <SampleImage style={[{ width: size, height: size }, this.props.style]} source={imageSourcePropType} />;
  }
}