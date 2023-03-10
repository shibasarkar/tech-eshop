import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, ToastAndroid } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLORS, Items } from "../../Constants/Colors";


export default MyCart = ({ navigation }) => {
	const [products, setProduct] = useState();
	const [total, setTotal] = useState(10);


	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getDataFromDB();
		})
		return unsubscribe;
	}, [])


	//get data from local DB by ID
	const getDataFromDB = async () => {
		let items = await AsyncStorage.getItem('cartItems');
		try {

			items = JSON.parse(items);
		} catch (error) {
			console.log("Error", error);
		}
		let productData = [];

		if (Array.isArray(items) && items.length > 0) {
			Items.forEach((product) => {
				if (items.includes(product.id)) {
					productData.push({ ...product })
				}
			})
			setProduct(productData)
			getTotal(productData)
			// setTotal(productData)
		} else {
			setProduct([])
			setTotal(0)
			ToastAndroid.show("No Item in the Cart!", ToastAndroid.SHORT)
			navigation.navigate('Home')
		}
	}

	const getTotal = (productData) => {
		let total = 0;
		for (let index = 0; index < productData.length; index++) {
			let productPrice = productData[index].productPrice;
			total = total + Number(productPrice);
		}
		setTotal(total)
	}

	// //Remove Selected Item from Cart

	// const removeItemFromCart = async (id) => {
	// 	let itemArray = await AsyncStorage.getItem('cartItems');
	// 	itemArray = JSON.parse(itemArray);
	// 	if (itemArray) {
	// 		let array = itemArray;
	// 		for (let index = 0; index < array.length; index++) {
	// 			if (array[index] == id) {
	// 				array.splice(index, 1);
	// 			}
	// 			await AsyncStorage.setItem('cartItems', JSON.stringify(array))
	// 			getDataFromDB();
	// 		}
	// 	}
	// }

	// //checkout 

	// const checkOut = async () => {
	// 	try {
	// 		await AsyncStorage.removeItem('cartItems')
	// 	} catch (error) {
	// 		return error;
	// 	}
	// 	ToastAndroid.show('Item will be Delivary Soon! ', ToastAndroid.SHORT)
	// 	navigation.navigate('Home')
	// }

	const renderProduct = (data, index) => {
		return (
			<TouchableOpacity
				onPress={() => { navigation.navigate("ProductInfo", { ProductId: data.id }) }}
				key={index}
				style={{
					width: '100%',
					height: 100,
					marginVertical: 6,
					flexDirection: 'row',
					alignItems: 'center',

				}}>
				<View style={{
					width: '30%',
					height: 100,
					padding: 14,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: COLORS.Container,
					borderRadius: 10,
					marginRight: 22,

				}}>
					<Image source={data.productImage} style={{
						width: '100%',
						height: '100%',
						resizeMode: 'contain',

					}} />
				</View>
				<View style={{
					flex: 1,
					height: '100%',
					justifyContent: 'space-around',

				}}>
					<View>
						<Text style={{
							fontSize: 14,
							maxWidth: '100%',
							color: 'black',
							fontWeight: '600',
							letterSpacing: 1,

						}}>{data.productName}</Text>
						<View style={{
							marginTop: 4,
							flexDirection: "row",
							alignItems: 'center',
							opacity: 0.6,

						}}>
							<Text style={{
								fontSize: 14,
								fontWeight: '400',
								maxWidth: '85%',
								marginRight: 4,

							}}>&#8377;{data.productPrice}</Text>
							<Text>
								(~ {data.discountType === "flat" ? <Text>&#8377;</Text> : ""}{data.discount}{data.discountType === "percentage" ? "%" : ""} )

							</Text>
						</View>
					</View>
					<View style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',

					}}>
						<View style={{
							flexDirection: 'row',
							alignItems: 'center',

						}}>
							<View style={{
								borderRadius: 100,
								padding: 4,
								paddingRight: 20,
								borderWidth: 1,
								borderColor: COLORS.Container,
								opacity: 0.5,


							}}>
								<MaterialCommunityIcons name="minus" style={{
									fontSize: 16,
									color: 'black',

								}} />
							</View>
							<Text>
								1
							</Text>
							<View style={{
								borderRadius: 100,
								marginLeft: 20,
								padding: 4,
								borderWidth: 1,
								borderColor: COLORS.Container,
								opacity: 0.5,


							}}>
								<MaterialCommunityIcons name="plus" style={{
									fontSize: 16,
									color: 'black',

								}} />
							</View>
						</View>
						<TouchableOpacity onPress={() => { removeItemFromCart(data.id) }}>
							<MaterialCommunityIcons name="delete-outline" style={{
								fontSize: 16,
								color: 'Black',
								backgroundColor: COLORS.Background,
								padding: 8,
								borderRadius: 100,

							}} />
						</TouchableOpacity>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<View style={{
			width: '100%',
			height: '100%',
			backgroundColor: COLORS.Background,
			position: 'relative',

		}}>
			<ScrollView>
				<View style={{
					width: '100%',
					flexDirection: 'row',
					paddingTop: 16,
					paddingHorizontal: 16,
					justifyContent: 'space-between',
					alignItems: 'center',


				}}>
					<TouchableOpacity onPress={() => { navigation.goBack() }}>
						<MaterialCommunityIcons name="chevron-left" style={{
							fontSize: 18,
							color: COLORS.Primary,
							padding: 12,
							backgroundColor: COLORS.Container,
							borderRadius: 10
						}} />
					</TouchableOpacity>
					<Text style={{
						fontSize: 14,
						color: 'black',
						fontWeight: '400',

					}}>Order details</Text>
					<View>

					</View>
				</View>
				<Text style={{
					fontSize: 20,
					color: 'black',
					fontWeight: '400',
					letterSpacing: 1,
					paddingTop: 20,
					paddingLeft: 16,
					marginBottom: 10,
				}}>
					My Cart
				</Text>
				<View style={{
					paddingHorizontal: 16,

				}}>
					{
						products && products.length ? products.map(renderProduct) : null
					}
				</View>
				<View>
					<View style={{
						paddingHorizontal: 16,
						marginVertical: 10,

					}}>
						<Text style={{
							fontSize: 16,
							color: 'black',
							fontWeight: '500',
							letterSpacing: 1,
							marginBottom: 20
						}}>Delivary Location
						</Text>
						<View>
							<View style={{
								flexDirection: 'row',
								width: '80%',
								alignItems: 'center',
							}}>
								<View style={{
									color: 'blue',
									backgroundColor: COLORS.Background,
									alignItems: 'center',
									justifyContent: 'center',
									padding: 12,
									borderRadius: 10,
									marginRight: 18,


								}}>
									<MaterialCommunityIcons name="truck-delivery-outline" style={{
										fontSize: 18,
										color: 'blue',

									}} />
								</View>
								<View style={{
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between'
								}}>
									<Text style={{
										fontSize: 14,
										color: 'black',
										fontWeight: '500',

									}}>2 Petre Melikishvili St.</Text>
									<Text style={{
										fontSize: 12,
										color: 'black',
										fontWeight: '400',
										lineHeight: 20,
										opacity: 0.5,

									}}>0162 Tibilis</Text>
								</View>
								<MaterialCommunityIcons
									name="chevron-right" style={{
										fontSize: 22,
										color: 'Black'
									}} />
							</View>

						</View>
					</View>

					<View style={{
						paddingHorizontal: 16,
						marginVertical: 10,

					}}>
						<Text style={{
							fontSize: 16,
							color: 'black',
							fontWeight: '500',
							letterSpacing: 1,
							marginBottom: 20
						}}>Payment Method
						</Text>
						<View>
							<View style={{
								flexDirection: 'row',
								width: '80%',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}>
								<View style={{
									color: 'blue',
									backgroundColor: COLORS.Background,
									alignItems: 'center',
									justifyContent: 'center',
									padding: 12,
									borderRadius: 10,
									marginRight: 18,


								}}>
									<Text style={{
										fontSize: 10,
										fontWeight: '900',
										color: 'blue',
										letterSpacing: 1,

									}}>
										VISA
									</Text>
								</View>
								<View style={{
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between'
								}}>
									<Text style={{
										fontSize: 14,
										color: 'black',
										fontWeight: '500',

									}}>Visa Classic</Text>
									<Text style={{
										fontSize: 12,
										color: 'black',
										fontWeight: '400',
										lineHeight: 20,
										opacity: 0.5,

									}}>****-9092</Text>

								</View>
								<MaterialCommunityIcons
									name="chevron-right" style={{
										fontSize: 22,
										color: 'Black'
									}} />
							</View>

						</View>
					</View>
					<View style={{
						paddingHorizontal: 16,
						marginTop: 40,
						marginBottom: 80,

					}}>
						<Text style={{
							fontSize: 16,
							color: 'black',
							fontWeight: '500',
							letterSpacing: 1,
							marginBottom: 20
						}}>
							Order Info
						</Text>
						<View style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							marginBottom: 8,


						}}>
							<Text style={{
								fontSize: 12,
								fontWeight: '400',
								maxWidth: '80%',
								color: 'black',
								opacity: 0.5,

							}}>Subtotal</Text>
							<Text style={{
								fontSize: 12,
								fontWeight: '400',
								color: 'black',
								opacity: 0.8,
							}}>&#8377;{total}.00</Text>

						</View>
						<View style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							marginBottom: 22,

						}}>
							<Text style={{
								fontSize: 12,
								fontWeight: '400',
								maxWidth: '80%',
								color: 'black',
								opacity: 0.5,

							}}>Shipping Tax</Text>
							<Text style={{
								fontSize: 12,
								fontWeight: '400',
								color: 'black',
								opacity: 0.8,
							}}>&#8377;{(total / 20)}</Text>

						</View>
						<View style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',

						}}>
							<Text style={{
								fontSize: 12,
								fontWeight: '400',
								maxWidth: '80%',
								color: 'black',
								opacity: 0.5,

							}}>Total</Text>
							<Text style={{
								fontSize: 18,
								fontWeight: '500',
								color: 'black',
							}}>&#8377;{(total + total / 2)}</Text>

						</View>
					</View>
				</View>
			</ScrollView>

			<View style={{
				bottom: 10,
				height: '8%',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',


			}}>
				<TouchableOpacity
					onPress={() => { total != 0 ? checkOut() : null }}
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
						CHECKOUT &#8377;{total + total / 2}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}