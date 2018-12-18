/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import ZoomViewModule from './ZoomViewModule';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);

        this.state={
            modalVisible:false
        }
    }


    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
        <TouchableOpacity
            onPress={() => {
              this.setState({modalVisible:true})
            }}
        >
            <Text
                style={styles.instructions}

            >{instructions}<Text style={{color:'blue'}}>够胆就点我</Text></Text>
        </TouchableOpacity>

          {this.state.modalVisible ?
              <ZoomViewModule
                  cancel={() =>{
                      this.setState({modalVisible:false})
                  }}
                  modalVisible={true}
                  curentImage={2}
                  imaeDataUrl={[
                      'http://www.cnpukang.com/uploads/allimg/180530/1-1P5301GS9404.jpg',
                      'http://img.zcool.cn/community/019a8455d3e08732f875a132683fb3.JPG@1280w_1l_2o_100sh.jpg',
                      'http://www.91danji.com/attachments/201612/12/11/3xowh1aml.jpg',
                      'http://img.zcool.cn/community/0142f759af7c3ea8012028a922928a.JPG@3000w_1l_2o_100sh.jpg',
                      'http://pic.58pic.com/58pic/13/80/78/35V58PICrWD_1024.jpg',
                  ]}
              />
              : null
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
