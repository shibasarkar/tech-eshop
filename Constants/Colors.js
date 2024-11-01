export const COLORS={
    Primary:'#FF9494',
    Secondary:'#FFD1D1',
    Background:'#FFF5E4',
    Container:'#FFE3E1',
    Green:'#00FF00',
    Red:'#FF0000'
}
export const Items = [
    {
      id: 1,
      category: 'product',
      productName: 'MI Super Bass Bluetooth Wireless Headphones',
      productPrice: 1799,
      discount:10,
      discountType:"flat",
      description:
        'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
      isOff: true,
      offPercentage: 10,
      productImage: require('../assets/images/products/Mi1.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/products/Mi1.png'),
        require('../assets/images/products/Mi2.png'),
        require('../assets/images/products/Mi3.png'),
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'boAt Rockerz 450 Bluetooth Headphone',
      productPrice: 1499,
      discount:10,
      discountType:"percentage",
      description:
        'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
      isOff: false,
      productImage: require('../assets/images/products/boat1.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/products/boat1.png'),
        require('../assets/images/products/boat2.png'),
        require('../assets/images/products/boat3.png'),
      ],
    },
    {
      id: 3,
      category: 'accessory',
      productName: 'boAt Airdopes 441',
      productPrice: 1999,
      discount:10,
      discountType:"flat",
      description:
        'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
      isOff: true,
      offPercentage: 18,
      productImage: require('../assets/images/accessories/boatairpods1.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/accessories/boatairpods1.png'),
        require('../assets/images/accessories/boatairpods2.png'),
        require('../assets/images/accessories/boatairpods3.png'),
      ],
    },
    {
      id: 4,
      category: 'accessory',
      productName: 'boAt Bassheads 242',
      productPrice: 399,
      discount:10,
      discountType:"percentage",
      description:
        'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
      isOff: false,
      productImage: require('../assets/images/accessories/boatbassheads1.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/accessories/boatbassheads1.png'),
        require('../assets/images/accessories/boatbassheads2.png'),
        require('../assets/images/accessories/boatbassheads3.png'),
      ],
    },
    {
      id: 5,
      category: 'accessory',
      productName: 'boAt Rockerz 255 Pro+',
      productPrice: 1499,
      discount:10,
      discountType:"flat",
      description:
        'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
      isOff: false,
      productImage: require('../assets/images/accessories/boatrockerz1.png'),
      isAvailable: false,
      productImageList: [
        require('../assets/images/accessories/boatrockerz1.png'),
        require('../assets/images/accessories/boatrockerz2.png'),
        require('../assets/images/accessories/boatrockerz3.png'),
      ],
    },
    {
      id: 6,
      category: 'accessory',
      productName: 'Boult Audio AirBass Propods TWS',
      productPrice: 1299,
      discount:10,
      discountType:"percentage",
      description:
        'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
      isOff: false,
      productImage: require('../assets/images/accessories/boultairbass1.png'),
      isAvailable: true,
      productImageList: [
        require('../assets/images/accessories/boultairbass1.png'),
        require('../assets/images/accessories/boultairbass2.png'),
        require('../assets/images/accessories/boultairbass3.png'),
      ],
    },
  ];
export default {COLORS,Items};