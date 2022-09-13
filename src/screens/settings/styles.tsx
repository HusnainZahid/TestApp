import {StyleSheet} from "react-native";
import { primaryColor, silver, white } from "../../constanat/colors";
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:white,
    },
    header:{
        height:h('8%'),
        width:'100%',
        borderBottomWidth:h('.1%'),
        borderColor:silver,
        flexDirection:'row',
        alignItems:'center',
    },
    headertext:{
        color:primaryColor,
        fontSize:18,
        fontWeight:'bold'
    },
    headericon:{
        marginLeft:h('2%')
    }
  });
