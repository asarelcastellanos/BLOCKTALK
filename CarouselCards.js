/* 
layout: Defines the way the items are rendered. The options include default, stack, and Tinder
layoutCardOffset: Used to increase or decrease the default card offset in both the stack and Tinder layouts
ref: Creates a reference to an instance of the carousel
data: An array of items to loop on
renderItem: Takes an item from the data and renders it into the list
sliderWidth: Width in pixels of the carousel
itemWidth: Width in pixels of the carousel item
useScrollView: Uses a ScrollView component instead of a Flatlist component for performance reasons
onSnapToItem: Snaps to a carousel item programmatically

*/

import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  // SLIDER_HEIGHT,
  ITEM_WIDTH,
} from "./CarouselCardItem";
import data from "./data";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        // sliderHeight={SLIDER_HEIGHT}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;
