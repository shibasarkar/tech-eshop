import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, Items } from '../../Constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default Home = ({ navigation }) => {
	const [product, setProduct] = useState([]);
	const [accessory, setAccessory] = useState([]);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getDataFromDB();
		})
		return unsubscribe;
	}, [navigation])


	//get Data From DB

	const getDataFromDB = () => {
		let productList = []
		let accessoryList = []
		for (let index = 0; index < Items.length; index++) {
			if (Items[index].category == "product") {
				productList.push(Items[index])
			} else if (Items[index].category == "accessory") {
				accessoryList.push(Items[index])
			}

		}
		setProduct(productList);
		setAccessory(accessoryList);
	}

	// create an product reusable card

	const ProductCard = ({ data }) => {
		return (
			<TouchableOpacity style={{ width: '48%', marginVertical: 14 }} onPress={() => { navigation.navigate("ProductInfo", { ProductId: data.id }) }}>
				<View style={Styles.productCard}>
					{
						data.isOff ? (
							<View style={Styles.CardImg}>
								<Text style={{ fontSize: 14, color: COLORS.Primary, fontWeight: 'bold', letterSpacing: 1 }}>{data.offPercentage}%</Text>
							</View>
						) : null}
					<Image source={data.productImage} style={Styles.productImg} />
				</View>
				<Text style={Styles.productName}>{data.productName}</Text>
				{data.category == 'accessory' ? data.isAvailable ? (
					<View style={Styles.circleIconContainer}>
						<FontAwesome name="circle" style={Styles.circleIcon} />
						<Text style={[Styles.circleIcon, { marginRight: 0 }]}>Available </Text>
					</View>
				) : (<View style={Styles.circleIconContainer}>
					<FontAwesome name="circle" style={[Styles.circleIcon, { color: COLORS.Red }]} />
					<Text style={[Styles.circleIcon, { marginRight: 0, color: COLORS.Red }]}>Unavailable </Text>
				</View>) : null}
				<Text>&#8377;{data.productPrice}</Text>


			</TouchableOpacity >
		)
	}
	return (
		<View>
			<SafeAreaView />
			<View style={{ backgroundColor: COLORS.Background }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={Styles.menuBar}>
						<TouchableOpacity>
							<Entypo name='shopping-bag' style={Styles.shoppingBag} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{navigation.navigate('MyCart')}}>
							<MaterialCommunityIcons name='cart' style={Styles.shoppingBag} />
						</TouchableOpacity>
					</View>
					<View style={Styles.headerText}>
						<Text style={Styles.title}> Hi-Fi Shop &amp; Service </Text>
						<Text style={[Styles.title, { fontSize: 14, fontWeight: '400', lineHeight: 24 }]}> Audio Shop on Rustaveli Ave 57
							{'\n'} This Shop offers both products and services
						</Text>
					</View>
					<View style={{ padding: 16, }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<View style={Styles.product}>
								<Text style={Styles.productTitle}>Products</Text>
								<Text style={[Styles.productTitle, { fontSize: 14, fontWeight: '400', opacity: 0.5, marginLeft: 10 }]}>41</Text>
							</View>
							<Text style={Styles.subtext}>See All</Text>
						</View>

						<View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: 'space-around' }}>
							{
								product.map((data) => {
									return (
										<ProductCard data={data} key={data.id} />
									)
								})
							}
						</View>
					</View>

					<View style={{ padding: 16, }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<View style={Styles.product}>
								<Text style={Styles.productTitle}>Accessories</Text>
								<Text style={[Styles.productTitle, { fontSize: 14, fontWeight: '400', opacity: 0.5, marginLeft: 10 }]}>78</Text>
							</View>
							<Text style={Styles.subtext}>See All</Text>
						</View>

						<View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: 'space-around' }}>
							{
								accessory.map((data) => {
									return (
										<ProductCard data={data} key={data.id} />
									)
								})
							}
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	)
}
const Styles = StyleSheet.create({
	menuBar: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 16
	},
	headerText: {
		marginBottom: 10,
		padding: 16
	},
	title: {
		fontSize: 26,
		fontWeight: '500',
		letterSpacing: 1,
		marginBottom: 10,
		color: COLORS.Primary
	},
	shoppingBag: {
		fontSize: 18,
		color: COLORS.Primary,
		padding: 12,
		borderRadius: 10,
		backgroundColor: COLORS.Container
	},
	product: {
		flexDirection: 'row',
		alignItems: 'center'

	},
	productTitle: {
		fontSize: 18,
		letterSpacing: 1,
		fontWeight: '500',
		color: COLORS.Primary
	},
	productList: {

	},
	subtext: {
		fontSize: 14,
		color: COLORS.Primary,
		fontWeight: '400'
	},
	productImg: {
		width: '80%',
		height: '80%',
		resizeMode: 'contain'
	},
	productCard: {
		width: '100%',
		height: 100,
		borderRadius: 10,
		backgroundColor: COLORS.Secondary,
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 8
	},
	CardImg: {
		position: 'absolute',
		width: '20%',
		height: '24%',
		backgroundColor: COLORS.Background,
		top: 0,
		left: 0,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',

	},
	productName: {
		fontSize: 12,
		fontWeight: '600',
		color: COLORS.Primary,
		marginBottom: 2,

	},
	circleIcon: {
		fontSize: 12,
		marginRight: 6,
		color: COLORS.Green
	},
	circleIconContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	}

})