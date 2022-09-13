import {StyleSheet} from "react-native";
import { primaryColor, silver, white } from "../../constanat/colors";
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row'
    },
    leftside:{
        height:h('100%'),
        width:'75%',
        backgroundColor:white
    },
    rightside:{
        height:h('100%'),
        width:'25%',
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
    icon:{
        marginLeft:h('2%')
    },
    items:{
        height:h('7%'),
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
    },
    itemstext:{
        color:primaryColor,
        fontSize:18,
        marginLeft:h('1%')
    },
  });
