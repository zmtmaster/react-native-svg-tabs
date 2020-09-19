import React from 'react';
import { View } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const width = 50;
const height = 50;

function CenterLogo() {
  const mask = (
    <View
      style={{
        width,
        height,
        borderRadius: width / 2,
        backgroundColor: 'red',
      }}
    />
  );

  return (
    <MaskedView style={{ width, height }} maskElement={mask}>
      <View style={{ width, height, backgroundColor: '#fff' }}>
        <LinearGradient
          colors={['#8ac8ff', '#758eee', '#738aee']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.55, 0.93, 0.97]}>
          <View style={{ width, height: 28 }} />
        </LinearGradient>
        <View
          style={{
            height: 20,
            width,
            marginTop: 2,
            backgroundColor: '#070762',
          }}
        />
      </View>
    </MaskedView>
  );
}

export default CenterLogo;
