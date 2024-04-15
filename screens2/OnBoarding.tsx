import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import AppButton from "../components/AppButton";
import SkipText from '../components/SkipText';
import SingUpText from '../components/SingUpText';
import colors from "../config/Colors";

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: require('./assets/slide1.png'),
      heading: 'Welcome',
      description: 'Find a best possible way to park',
    },
    {
      id: 2,
      image: require('./assets/slide2.png'),
      heading: 'Hollaaa',
      description: 'Find the best possible parking space nearby your desired destination',
    },
    {
      id: 3,
      image: require('./assets/slide3.png'),
      heading: 'Find parking',
      description: 'Find your perfect parking space wherever and whenever you need',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SkipText />
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          loop={false}
          showsPagination={true}
          onIndexChanged={(index) => setCurrentIndex(index)}
        >
          {slides.map((slide) => (
            <View key={slide.id} style={styles.slide}>
              <Image source={slide.image} style={styles.image} resizeMode="contain" />
              <View style={styles.content}>
                <Text style={styles.heading}>{slide.heading}</Text>
                <Text style={styles.description}>{slide.description}</Text>
              </View>
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.bottom}>
        <AppButton
        title="Login with Email"
        marginTop={50}
        iconName="email"
      ></AppButton>
        <AppButton
            title="Login with Phone"
            backgroundColor={colors.primary}
            color={colors.black}
            marginTop={20}
            iconName="phone"
        ></AppButton>
        <SingUpText />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    bottom:{
        paddingTop: 10,
        textAlign: 'center',
        alignItems: 'center'
    },
  scrollViewContent: {
    flexGrow: 1,
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  container: {
    flex: 0.5,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0
  },
  wrapper: {
    height: 300
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Onboarding;
