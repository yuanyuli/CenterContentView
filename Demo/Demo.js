import React, {Component, PropTypes} from 'react';
import {
  Image,
  View,
  Text,
  PixelRatio,
  ScrollView
} from 'react-native';

import CenterContentView from 'react-native-center-content-view';

let SECTIONS = [
  {
    title: '隐形舒适,美不留痕',
    source: require('./jpg/tampon0.jpg')
  },
  {
    title: '更IN,更美,更轻松',
    source: require('./jpg/tampon1.jpg')
  },
  {
    title: '随心而动,精彩不停',
    source: require('./jpg/tampon2.jpg')
  },
  {
    title: '完美细节,时刻贴心',
    source: require('./jpg/tampon3.jpg')
  },
  {
    title: '定位准,易置入',
    source: require('./jpg/tampon4.jpg')
  },
  {
    title: '丝缎般光滑触感',
    source: require('./jpg/tampon5.jpg')
  },
  {
    title: 'WCM世界级制造标准',
    source: require('./jpg/tampon6.jpg')
  },
  {
    title: '反复打磨细节之处',
    source: require('./jpg/tampon7.jpg')
  },
  {
    title: '选取最优质材料',
    source: require('./jpg/tampon8.jpg')
  },
  {
    title: '配送更快更安心',
    source: require('./jpg/tampon9.jpg')
  }
];

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scale: 0.8,
      opacity: 1,
      rotateLeft: "0deg",
      rotateRight: "0deg",
      type: "Scale"
    }
  }

  renderCell(data) {
    return (
      <View
        style={{width:200,height:200,shadowColor:'green',shadowOffset:{width:0,height:0},shadowOpacity:1}}
      >
        <Image
          style={{width:200,height:200}}
          source={data.source}/>
      </View>
    )
  }

  handleOnPress() {
    if (this.state.type == "Scale") {
      this.setState({
        scale: 1,
        opacity: 0.3,
        type: "Opacity"
      })
    } else if (this.state.type == "Opacity") {
      this.setState({
        opacity: 1,
        rotateLeft: "-20deg",
        rotateRight: "20deg",
        type: "Rotate"
      })
    } else if (this.state.type == "Rotate") {
      this.setState({
        scale: 0.8,
        rotateLeft: "0deg",
        rotateRight: "0deg",
        type: "Scale"
      })
    }
  }

  render() {
    return (
      <ScrollView style={{marginTop:20, backgroundColor:'white'}}>
        <View
          style={{justifyContent:'center',alignItems:'center',borderWidth:1/PixelRatio.get(),width:300,height:50,alignSelf:'center'}}>
          <Text style={{fontSize:20}}>
            CenterContentViewDemo
          </Text>
        </View>


        <CenterContentView
          style={{height:230,marginTop:20,backgroundColor:'#EBEBEB',alignItems:'center'}}
          space={30}
          scale={this.state.scale}
          opacity={this.state.opacity}
          rotateLeft={this.state.rotateLeft}
          rotateRight={this.state.rotateRight}
          data={SECTIONS}
          initialIndex={3}
          renderCell={this.renderCell.bind(this)}
          startScroll = {(obj,index) => {
          console.log('obj'+JSON.stringify(obj));
          console.log('index'+index);
          }}
          endScroll={(obj,index) => {
          // console.log('obj'+JSON.stringify(obj));
          // console.log('index'+index);
          }}
        />
        <View
          style={{marginTop:20,width : 200 , height: 50,borderWidth:1 / PixelRatio.get(),justifyContent:'center',alignItems:'center',alignSelf:'center'}}
        >
          <Text
            onPress={this.handleOnPress.bind(this)}
          >
            {this.state.type}
          </Text>
        </View>
      </ScrollView>
    )
  }
}


