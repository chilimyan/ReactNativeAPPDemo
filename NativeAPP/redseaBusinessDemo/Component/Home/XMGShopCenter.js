/**
 * Created by apple on 2017/3/29.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ListView,
} from 'react-native';

var BottomCOmmonCell = require('../Home/XMGBottomCommonCell');

var Home_D5 = require('../LocalData/XMG_Home_D5.json');

var XMGShopCenter = React.createClass({

    getDefaultProps(){
        return{
            popToHomeView: null
        }
    },

    render(){
        return (
            <View style={styles.container}>
                <BottomCOmmonCell
                    leftIcon = "gw"
                    leftTitle = "购物中心"
                    rightTitle = {Home_D5.tips}
                />
                {/*下部分*/}
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },
    //返回下部分所有Item
    renderAllItem(){
        var itemArr = [];
        var shopData = Home_D5.data;
        for (var i = 0; i < shopData.length; i ++){
            var data = shopData[i];
            itemArr.push(
               <ShopCenterItem
                   shopImage = {data.img}
                   shopSale = {data.showtext.text}
                   shopName = {data.name}
                   key = {i}
                   detailurl = {data.detailurl}
                   popToShopCenter = {(url)=>this.popToHome(url)}
               />
            );
        }
        return itemArr;
    },
    popToHome(url){
        if (this.props.popToHomeView == null) return;
        this.props.popToHomeView(url);
    }
});

var ShopCenterItem = React.createClass({
    getDefaultProps(){
        return{
            shopImage: '',
            shopSale: '',
            shopName: '',
            detailurl: '',
            popToShopCenter: null
        }
    },
    render(){
        return(
           <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.clickedItem(this.props.detailurl)}}>
               <View style={styles.itemViewStyle}>
                   <Image source={{uri: this.props.shopImage}} style={styles.shopImageStyle}>

                   </Image>
                   <Text style={styles.shopSaleStyle}>
                       {this.props.shopSale}
                   </Text>
                   <Text style={styles.shopNameStyle}>
                       {this.props.shopName}
                   </Text>
               </View>
           </TouchableOpacity>
        );
    },
    clickedItem(url){
        if (this.props.detailurl == null) return;
        this.props.popToShopCenter(url);
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    shopImageStyle: {
        width: 120,
        height: 100,
        borderRadius: 8,
    },
    scrollViewStyle:{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10
    },
    itemViewStyle:{
        margin: 8
    },
    shopSaleStyle: {
        position: 'absolute',
        left: 0,
        bottom: 30,
        backgroundColor:'orange',
        color: 'white',
        padding:2,

    },
    shopNameStyle: {
        textAlign: 'center',
        marginTop:5
    }


});

module.exports = XMGShopCenter;