import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//const AlbumDetails = ({ albumProps: { title, artist, thumbnail_image} }) => {
const AlbumDetail = ({ albumProps }) => {
  const { title, artist, thumbnail_image, url } = albumProps;

  const {
    thumbnailStyle, textContentStyle,
    thumbnailContainerStyle, titleTextStyle
  } = styles;    //Destructing

  return (
    <Card>
      <CardSection>

        <View
        style={thumbnailContainerStyle}
        >
          <Image
          style={thumbnailStyle}
          source={{ uri: thumbnail_image }}
          />

        </View>

        <View
        style={textContentStyle}
        >
          <Text style={titleTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>

      <CardSection>
        <Image
        style={styles.artworkStyle}
        source={{ uri: albumProps.image }}
        />
      </CardSection>

      <CardSection>
        <Button
          onPressedProp={() => {
            console.log(title);
            Linking.openURL(url);
            }
          }
        >
         Buy {title}
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  artworkStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetail;
