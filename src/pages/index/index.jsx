import React, {Component} from 'react';
import {View, Text, Image} from '@tarojs/components';
import './index.less';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticate: true
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.setState({isAuthenticate: false});
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='box-container'>
        <View className='title-container'>
          <Image className='img-return' src=''/>
          <Text className='title-authenticate'>我的认证</Text>
        </View>

        <View className='input-box'>
          <View className='id-first'/>
          <View className='id-second'>
            <Image className='icon-img' src=''/>
            <Text className='text-setting'>代理人认证</Text>
            {this.state.isAuthenticate ? <Text className='text-authenticate'>您已认证为代理人</Text> : null}
          </View>
        </View>

        <View className='input-box'>
          <View className='id-first'/>
          <View className='id-second'>
            <Image className='icon-img' src=''/>
            <Text className='text-setting'>员工认证</Text>
            <Text className='text-authenticate'>您已认证为员工</Text>
          </View>
        </View>
      </View>
    );
  }
}
