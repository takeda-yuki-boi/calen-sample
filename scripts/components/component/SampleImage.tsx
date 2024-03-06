//アイコン等の画像を表示するコンポーネント
import { Component } from 'react';
import { Image as ExpoImage } from 'expo-image';
import { Props, State } from '../interface/SampleImageInterface';

export default class SampleImage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ExpoImage style={this.props.style} source={this.props.source} contentFit="cover" cachePolicy={'memory-disk'} />
    );
  }
}
