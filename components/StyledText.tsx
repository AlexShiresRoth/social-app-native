import * as React from 'react';

import { Text, TextProps } from './Themed';

export function RalewayText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: 'Raleway' }]} />;
}
