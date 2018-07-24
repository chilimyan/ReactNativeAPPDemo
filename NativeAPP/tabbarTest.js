/**
 * Created by apple on 2017/3/21.
 * TabbarIOS练习
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ListView,
    AlertIOS,
    TabBarIOS,
} from 'react-native';

var tabbarTest = React.createClass({
    getInitialState(){
       return{
           //默认被选中的tabbaritem
           selectedTabbarItem: 'home'
       }
    },

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headViewStyle}>
                    <Text style={{color:'white', fontSize:20}}>Tab选项卡</Text>
                </View>

                <TabBarIOS
                    barTintColor='black'

                >
                    <TabBarIOS.Item
                        systemIcon='contacts'
                        badge="3"
                        selected={this.state.selectedTabbarItem == 'home'}
                        onPress={()=>{this.setState({selectedTabbarItem:'home'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                            <Text>首页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon='bookmarks'
                        selected={this.state.selectedTabbarItem == 'second'}
                        onPress={()=>{this.setState({selectedTabbarItem:'second'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'green'}]}>
                            <Text>第二页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon='downloads'
                        selected={this.state.selectedTabbarItem == 'third'}
                        onPress={()=>{this.setState({selectedTabbarItem:'third'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'blue'}]}>
                            <Text>第三页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon='search'
                        selected={this.state.selectedTabbarItem == 'fourth'}
                        onPress={()=>{this.setState({selectedTabbarItem:'fourth'})}}
                    >
                        <View style={[styles.commonViewStyle,{backgroundColor:'yellow'}]}>
                            <Text>第四页</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        )
    },
})

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f5fcff',
        marginTop: 64
    },
    commonViewStyle: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    headViewStyle: {
        height: 64,
        backgroundColor: 'black',
        alignItems:'center',
        justifyContent: 'center'
    }
})

module.exports = tabbarTest;