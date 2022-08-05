import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";


export default function PopUp ({ name, description, imageUrl }) {
    return (
      <View style={ styles.featuredCommunitiesCard }>
        <View style={ styles.featuredCommunityStoryContainer }>
          <Image style={ styles.featuredCommunityLogo } source={imageUrl} />
        </View>

        <View style= { styles.featuredCommunityTextContainer }>
          <Text style={ styles.communityHeaderText }>{ name }</Text>
          <Text style={ styles.communityText }>{description}</Text>
        </View>
        <View style= { styles.schedule }>
          <Text style={ styles.eventText }>Event Date: Augest 13th, 5:00PM - 7:00PM</Text>
        </View>
        <View style= { styles.boldQuote }>
          <Text style={ styles.eventText }>"Save trees, save nature. Plant a tree today;</Text>
          <Text style = {{fontSize: 12}}>  it will help us breath tommorrow"</Text>
        </View>
        <View style= { styles.link }>
          <Text style={ styles.eventOrg }>LA Neighborhood Land Trust</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  featuredCommunitiesCard: {
    alignContent: 'center',
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "eeeeee",
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 5,
  },
  featuredCommunityStoryContainer: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    borderRadius: 50,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  featuredCommunityLogo: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  featuredCommunityTextContainer: {
    marginLeft: 15,
  },
  communityHeaderText: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  eventText: {
    fontWeight: "600",
    fontSize: 11,
    marginTop: 5,
    marginBottom: 5,
  },
  communityText: {
    fontSize: 13,
  },
  boldQuote:{
    alignContent: 'center',
    fontWeight: "600",
    fontSize: 10,
    marginTop: 80,
    marginLeft: -248,
    marginBottom: 5,
  },
  link:{
    
    marginTop: 140,
    marginLeft: -110,
    marginBottom: 5,
  },
  eventOrg:{
    fontSize: 8,
    textAlign: 'right',
    fontWeight: "400",
    color: 'blue'
  },
  featuredCommunityJoinContainer: {
    position: "absolute",
    top: 26,
    right: 15,
    backgroundColor: "#eceef0",
    borderRadius: 15,
    width: 50,
    height: 30,
  },
  schedule: {
    textAlign: "center",
    fontWeight: "400",
    marginTop: 55,
    fontSize: 12,
    marginLeft: -200,
  },
  featuredCommunityJoinText: {
    textAlign: "center",
    fontWeight: "800",
    marginTop: 7,
    fontSize: 12
  }
});