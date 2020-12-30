import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import {I_GenreCategoriesProps, I_GenreCategoriesStyles} from "./interfaces"

const categories = (() => {
    const placeholderImage: ImageSourcePropType = require("./../../../assets/images/onboarding.png");
    return (new Array(5).fill(null)).map((_, index) => {
        return (
            {
                id: `${index+1}`,
                genre: `Genre ${index+1}`,
                cover: placeholderImage
            }
        )
    })
})()

const GenreCategories: React.FC<I_GenreCategoriesProps> = (): JSX.Element => {

    const placeholderImage: ImageSourcePropType = require("./../../../assets/images/onboarding.png");
    const styles: I_GenreCategoriesStyles = getStyles();

    return (
        <ScrollView
            scrollEventThrottle={16}
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.innerContainer}>
                <View style={styles.exploreHeaders}>
                    <Text style={styles.headerLeftTxt}>Browse Categories</Text>
                    <TouchableOpacity style={styles.headerRightView}>
                        <Text style={styles.headerRightText}>View all {` >`}</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.outerCategoryContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {categories.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} activeOpacity={0.7} style={{...styles.card, marginLeft: index === 0 ? 16:0}}>
                                <View style={styles.imageContainer}>
                                    <Image source={placeholderImage} style={styles.image} />
                                </View>
                                <View style={styles.cardTitleView}>
                                    <Text style={styles.cardTitleText}>
                                        {item.genre}
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