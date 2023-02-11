import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLORS, Items } from "../../Constants/Colors";


export default MyCart = ({ navigation }) => {
	const [product, setProduct] = useState();
	const [total, setTotal] = useState(null);


	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getDataFromDB();
		})
		return unsubscribe;
	}, [navigation])


	//get data from local DB by ID
	const getDataFromDB = async () => {
		let items = await AsyncStorage.getItem('cartItems');
		items = JSON.parse(items);
		let productData = [];
		if (items) {
			Items.forEach((data) => {
				if (items.includes(data.id)) {
					productData.push(data)
					return
				}
			})
			setProduct(productData)
			setTotal(productData)
		} else {
			setProduct(false)
			setTotal(false)
		}
	}

	const getTotal = (productData) => {
		let total = 0;
		for (let index = 0; index < productData.length; index++) {
			let productPrice = productData[index].productPrice;
			total = total + productPrice;

		}
		setTotal(total)
	}


	const renderProduct = (data, index) => {
		return (
			<TouchableOpacity key={index} style={{
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
								(~ &#8377;{
									data.productPrice = data.productPrice / 20
								})

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
								padding: 4,
								paddingRight: 20,
								borderWidth: 1,
								borderColor: COLORS.Container,
								opacity: 0.5,


							}}>
								<MaterialCommunityIcons name="plus" style={{
									fontSize: 16,
									color:'black',

								}} />
							</View>
						</View>
						<TouchableOpacity>

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
			backgroundColor:COLORS.Background,

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
					 <TouchableOpacity onPress={()=>{navigation.goBack()}}>
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
						product ? product.map(renderProduct) : null
					}
				</View>
			</ScrollView>
		</View>
	)
}