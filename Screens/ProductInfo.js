import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, Animated, ToastAndroid } from "react-native";
import { COLORS, Items } from "../Constants/Colors";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Width = Dimensions.get('window').width;
export default ProductInfo = ({ route, navigation }) => {
	const { ProductId } = route.params;
	const [product, setProduct] = useState({});
	const scrollX = new Animated.Value(0);
	let position = Animated.divide(scrollX, Width)


	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getDataFromDB();
		})
		return unsubscribe;
	}, [navigation])

	//get product data by productId 
	const getDataFromDB = async () => {
		for (let index = 0; index < Items.length; index++) {
			if (Items[index].id == ProductId) {
				setProduct(Items[index])
				return;
			}

		}
	}

	// add to Cart
	const addToCart = async (id) => {
		let itemArray = await AsyncStorage.getItem('cartItems');
		try {
			itemArray = JSON.parse(itemArray)
		} catch (error) {
			console.log("Error", error);
			itemArray=null
		}

		let array = [];

		if (Array.isArray(itemArray) && itemArray.length > 0) {
			array = itemArray;
		}

		array.push(id)

		try {
			await AsyncStorage.setItem('cartItems', JSON.stringify(array))
			ToastAndroid.show("Item Added Successfuly to Cart", ToastAndroid.SHORT)
			navigation.navigate('Home')
		} catch (error) {
			ToastAndroid.show("Somethig goes Wrong!",ToastAndroid.SHORT)
			return error
			
		}
	}

	//product Horizontal Scroll product cart
	const renderProduct = ({ item, index }) => {
		return (
			<View style={Styles.imageContainer}>
				<Image source={item} style={Styles.imageStyle} />
			</View>
		)
	}
	return (
		<View style={Styles.maincontainer}>
			<ScrollView>
				<View style={Styles.subContainer}>
					<View style={{
						width: '100%', flexDirection: 'row',
						justifyContent: 'space-between',
						paddingTop: 16,
						paddingLeft: 16,

					}}>
						<TouchableOpacity onPress={() => navigation.goBack('Home')}>
							<Entypo name='chevron-left' style={{
								fontSize: 18,
								color: COLORS.Primary,
								padding: 12,
								backgroundColor: COLORS.Background,
								borderRadius: 10,

							}} />
						</TouchableOpacity>
					</View>
					<FlatList data={product.productImageList ? product.productImageList : null}
						horizontal
						renderItem={renderProduct}
						showsHorizontalScrollIndicator={false}
						decelerationRate={0.8}
						snapToInterval={Width}
						bounces={false}
						onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
							{ useNativeDriver: false },


						)}
					/>
					<View style={{
						width: '100%',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: 16,
						marginTop: 32,

					}}>
						{
							product.productImageList ?
								product.productImageList.map((data, index) => {
									let opacity = position.interpolate({
										inputRange: [index - 1, index, index + 1],
										outputRange: [0.2, 1, 0.2],
										extrapolate: 'clamp'

									})
									return (
										<Animated.View
											key={index}
											style={{
												width: '16%',
												height: 2.4,
												backgroundColor: '#000000',
												opacity,
												marginHorizontal: 4,
												borderRadius: 100
											}}>

										</Animated.View>
									)
								}) : null
						}
					</View>
				</View>
				<View style={{
					paddingHorizontal: 16,
					marginTop: 6,

				}}>
					<View style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 14
					}}>
						<Entypo name="shopping-cart" style={{
							fontSize: 18,
							color: 'blue',
							marginRight: 6,

						}} />
						<Text style={{
							fontSize: 12,
							color: 'black'
						}}>
							Shopping
						</Text>
					</View>
					<View style={{
						flexDirection: 'row',
						marginVertical: 4,
						alignItems: 'center',
						justifyContent: 'space-between',


					}}>
						<Text style={{
							fontSize: 24,
							fontWeight: '600',
							letterSpacing: 0.5,
							marginVertical: 4,
							color: 'black',
							maxWidth: '84%',

						}}>{product.productName}
						</Text>
						<Ionicons name="link-outline" style={{
							fontSize: 24,
							color: 'blue',
							backgroundColor: 'blue' + 10,
							padding: 8,
							borderRadius: 100
						}} />
					</View>
					<Text style={{
						fontSize: 12,
						color: 'black',
						fontWeight: '400',
						letterSpacing: 1,
						opacity: 0.5,
						lineHeight: 20,
						maxWidth: '85%',
						maxHeight: 44,
						marginBottom: 18,

					}}>
						{product.description}
					</Text>
					<View style={{
						flexDirection: "row",
						alignItems: 'center',
						justifyContent: 'space-between',
						marginVertical: 14,
						borderBottomColor: COLORS.Background,
						borderBottomWidth: 1,
						paddingBottom: 20,
					}}>
						<View style={{
							flexDirection: 'row',
							width: '80%',
							alignItems: 'center',

						}}>
							<View style={{
								color: 'blue',
								backgroundColor: COLORS.Red,
								justifyContent: 'center',
								alignItems: "center",
								padding: 12,
								borderRadius: 100,
								marginRight: 10,

							}}>
								<Entypo name="location-pin" style={{
									fontSize: 16,
									color: 'blue',

								}} />
							</View>
							<Text>
								Rustavli Ave 57,{"\n"}17-001, Batume
							</Text>
						</View>
						<Entypo name="chevron-right" style={{
							fontSize: 22,
							color: COLORS.Primary,

						}} />
					</View>
					<View style={{
						paddingHorizontal: 16
					}}>
						<Text style={{
							fontSize: 18,
							fontWeight: '500',
							maxWidth: '85%',
							color: 'black',
							marginBottom: 4,

						}}>
							&#8377;{product.productPrice}.00
						</Text>
						<Text>
							Tax Rate 2%~ &#8377;{product.productPrice / 20}(&#8377;{
								product.productPrice + product.productPrice / 20
							})
						</Text>
					</View>
				</View>
			</ScrollView>
			<View style={{
				position: 'absolute',
				bottom: 10,
				height: '8%',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',

			}}>
				<TouchableOpacity
					onPress={() => { product.isAvailable ? addToCart(product.id) : null }}
					style={{
						width: "86%",
						height: '90%',
						backgroundColor: 'blue',
						borderRadius: 20,
						justifyContent: 'center',
						alignItems: 'center',

					}}>
					<Text style={{
						fontSize: 12,
						fontWeight: '500',
						letterSpacing: 1,
						color: 'white',
						textTransform: 'uppercase',

					}}>
						{product.isAvailable ? "Add to Cart" : "Not Available"}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
const Styles = StyleSheet.create({
	maincontainer: {
		width: '100%',
		height: '100%',
		backgroundColor: COLORS.Background,
		position: 'relative',

	},
	subContainer: {
		width: '100%', backgroundColor: COLORS.Container, borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20, position: 'relative',
		justifyContent: 'center', alignItems: 'center',
		marginBottom: 4,

	},
	imageStyle: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	imageContainer: {
		width: Width,
		height: 240,
		alignItems: 'center',
		justifyContent: 'center',


	}
})