import {StyleSheet} from "react-native";
import { primaryColor, white } from "../../constanat/colors";
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:white,
    },
    login:{
        height:h('20%'),
        width:'100%',
        justifyContent:'flex-end'
    },
    logintext:{
        color:primaryColor,
        marginLeft:h('5%'),
        fontSize:30,
        fontWeight:'bold'
    },
    input:{
        height:h('6%'),
        width:'80%',
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:h('1%'),
        borderRadius:h('1%'),
        borderWidth:h('.1%'),
        justifyContent:'center'
    },
    inputtext:{
        color:primaryColor,
        marginLeft:h('5%'),
        fontSize:15,
        marginTop:h('3%'),
        fontWeight:'500'        
    },
    inputstyle:{
        paddingLeft:h('2%'),
        color:primaryColor
    },
    button:{
        height:h('6.6%'),
        width:'80%',
        alignSelf:'center',
        backgroundColor:primaryColor,
        borderRadius:h('10%'),
        marginTop:h('4%'),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    buttontext:{
        color:'#fff',
        marginLeft:h('5%')
    },
    buttonicon:{
        marginRight:h('2%')
    }
  });
