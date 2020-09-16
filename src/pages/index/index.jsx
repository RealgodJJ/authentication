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
      <View className='boxContainer'>
        <View className='titleBox'>
          <Image className='imgReturn' src=''/>
          <Text className='titleAuthenticate'>我的认证</Text>
        </View>

        <View className='idBox'>
          <View className='idFirst'/>
          <View className='idSecond'>
            <Image className='iconImg' src=''/>
            <Text className='textSetting'>代理人认证</Text>
            {this.state.isAuthenticate ? <Text className='textAuthenticate'>您已认证为代理人</Text> : null}
          </View>
        </View>

        <View className='idBox'>
          <View className='idFirst'/>
          <View className='idSecond'>
            <Image className='iconImg' src=''/>
            <Text className='textSetting'>员工认证</Text>
            <Text className='textAuthenticate'>您已认证为员工</Text>
          </View>
        </View>
      </View>
    );
  }
}
