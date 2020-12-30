import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ONBOARDING_IMAGE } from '../../../assets/images';
import { deduceCoverArtToUse } from '../../../util/songs';
import {I_GenreCategoriesProps, I_GenreCategoriesStyles} from "./interfaces"

const GenreCategories: React.FC<I_GenreCategoriesProps> = ({uniqueArtists}): JSX.Element => {

    const styles: I_GenreCategoriesStyles = getStyles();

    return (
        <ScrollView
            scrollEventThrottle={16}
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.innerContainer}>
                <View style={styles.exploreHeaders}>
                    <Text style={styles.headerLeftTxt}>Browse Artists</Text>
                    <TouchableOpacity style={styles.headerRightView}>
                        <Text style={styles.headerRightText}>View all {` >`}</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.outerCategoryContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {uniqueArtists.slice(0,5).map((item, index: number) => {
                        return (
                            <TouchableOpacity key={item.id} activeOpacity={0.7} style={{...styles.card, marginLeft: index === 0 ? 16:0}}>
                                <View style={styles.imageContainer}>
                                    <Image source={deduceCoverArtToUse(item.randomCover, ONBOARDING_IMAGE)} style={styles.image} />
                                </View>
                                <View style={styles.cardTitleView}>
                                    <Text style={styles.cardTitleText} numberOfLines={1}>
                                        {item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    </ScrollView>
    )
}

export default GenreCategories;

const getStyles = (): I_GenreCategoriesStyles => {
    return (
        StyleSheet.create<I_GenreCategoriesStyles>({
            container: {
              paddingTop: 20,
            },
            innerContainer: {
              flex: 1,
            },
            exploreHeaders: {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            headerLeftTxt: {
              fontSize: 18,
              fontWeight: '700',
              paddingHorizontal: 35,
            },
            headerRightView: {
              justifyContent: 'center',
              marginRight: 13,
            },
            headerRightText: {
              textDecorationLine: 'underline',
              paddingRight: 20
            },
            outerCategoryContainer: {
              height: 200,
              marginTop: 18,
              marginBottom: 18
            },
            card: {
                borderBottomRightRadius: 30,
                borderBottomLeftRadius: 30,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                borderColor: '#888',
                borderWidth: 0.5,
                marginRight: 16,
                height: 200,
                width: 160,
            },
            imageContainer: {
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                flex: 2,
            },
            image: {
                flex: 1,
                width: 150,
                height: 150,
                resizeMode: 'cover',
            },
            cardTitleView: {
                borderBottomRightRadius: 30,
                borderBottomLeftRadius: 30,
                backgroundColor: "#666",
                alignItems: "center",
                padding: 12,
            },
            cardTitleText: {
                fontWeight: "bold",
                fontSize: 18,
                color: "#fff"
            }
        })
    )
}