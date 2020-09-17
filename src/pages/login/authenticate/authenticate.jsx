import React, {Component} from 'react';
import {View, Text, Image, Input, Button} from '@tarojs/components';
import Taro from '@tarojs/taro';
import './authenticate.less';

export default class Authenticate extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  clickHandle() {
    Taro.navigateTo({url: '/pages/index/index'}); //跳转到该页面
    // Taro.redirectTo({url: '/pages/index/index?send=313'}); //直接替换当前页面
  }

  render() {
    return (
      <View className='box-container'>
        <View className='title-container'>
          <Image className='img-return' src=''/>
          <Text className='title-authenticate'>代理人认证</Text>
        </View>

        <View className='info-container'>
          <View className='item-container'>
            <Input className='item-input' placeholder='请输入工号'/>
            <View className='line-separate'/>
            <Input className='item-input' placeholder='请输入密码'/>
          </View>
        </View>

        <View className='prompt-container'>
          <Text className='prompt-line'>
            提示：支持寿险、财险代理人的身份认证<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;寿险代理人使用E店工号和密码<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财险代理人使用国寿天财工号及密码<br/>
          </Text>
        </View>
        <Button className='button-turn' onClick={this.clickHandle.bind(this)}>确定</Button>
      </View>
    );
  }
}
