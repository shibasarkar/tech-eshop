import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
export default fontLoad=()=>{
const [fontsLoaded] = useFonts({
        'NotoSansBlack': require('./files/NotoSans-Black.ttf'),
        'NotoSansBlackItalic': require('./files/NotoSans-BlackItalic.ttf'),
        'NotoSansBold': require('./files/NotoSans-Bold.ttf'),
        'NotoSansBoldItalic': require('./files/NotoSans-BoldItalic.ttf'),
        'NotoSansExtraBold': require('./files/NotoSans-ExtraBold.ttf'),
        'NotoSansExtraBoldItalic': require('./files/NotoSans-ExtraBoldItalic.ttf'),
        'NotoSansExtraLight': require('./files/NotoSans-ExtraLight.ttf'),
        'NotoSansExtraLightItalic': require('./files/NotoSans-ExtraLightItalic.ttf'),
        'NotoSansItalic': require('./files/NotoSans-Italic.ttf'),
        'NotoSansLight': require('./files/NotoSans-Light.ttf'),
        'NotoSansLightItalic': require('./files/NotoSans-LightItalic.ttf'),
        'NotoSansMedium': require('./files/NotoSans-Medium.ttf'),
        'NotoSansMediumItalic': require("./files/NotoSans-MediumItalic.ttf"),
        'NotoSansRegular': require("./files/NotoSans-MediumItalic.ttf"),
        'NotoSansSemiBold': require("./files/NotoSans-SemiBold.ttf"),
        'NotoSansSemiBoldItalic': require("./files/NotoSans-SemiBoldItalic.ttf"),
        'NotoSansThin': require("./files/NotoSans-Thin.ttf"),
        'NotoSansThinItalic': require("./files/NotoSans-ThinItalic.ttf")
    });
    
    return fontsLoaded;
    
}

// const type={
//     NotoSansBlack:"NotoSans-Black",
//     NotoSansBlackItalic:"NotoSans-BlackItalic",
//     NotoSansBold:"NotoSans-Bold",
//     NotoSansBoldItalic:"NotoSans-BoldItalic",
//     NotoSansExtraBold:"NotoSans-ExtraBold",
//     NotoSansExtraBoldItalic:"NotoSans-ExtraBoldItalic",
//     NotoSansExtraLight:"NotoSans-ExtraLight",
//     NotoSansExtraLightItalic:"NotoSans-ExtraLightItalic",
//     NotoSansItalic:"NotoSans-Italic",
//     NotoSansLight:"NotoSans-Light",
//     NotoSansLightItalic:"NotoSans-LightItalic",
//     NotoSansMedium:"NotoSans-Medium",
//     NotoSansMediumItalic:"NotoSans-MediumItalic",
//     NotoSansRegular:"NotoSans-MediumItalic",
//     NotoSansSemiBold:"NotoSans-SemiBold",
//     NotoSansSemiBoldItalic:"NotoSans-SemiBoldItalic",
//     NotoSansThin:"NotoSans-Thin",
//     NotoSansThinItalic:"NotoSans-ThinItalic"
// };

// export default {type}