import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import { connect } from 'react-redux'
import { setCurrent, localSlider } from '../redux/actions'

class Slider extends React.Component {

    setCurrent(t){
        this.props.setCurrent(t)
    }

    next(){
        let { current } = this.props
        let count = () => this.props.isLocal?this.props.localImages.length - 1:this.props.remoteImages.length - 1
        if(current >= count()){
          current = 0
        }else{
          current++
        }
        this.props.setCurrent(current)
      }
    
      prev(){
        let { current } = this.props
        let count = () => this.props.isLocal?this.props.localImages.length - 1:this.props.remoteImages.length - 1
        if(current <= 0){
          current = count()
        }else{
          current--
        }
        this.props.setCurrent(current)
      }
    
      localSlider(){
        let { isLocal, current } = this.props
        current = 0
        isLocal = !isLocal
        this.props.localSlider(isLocal, current)
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>Slider</Text>
                <View style={styles.slider__wrapper}>
                    <Image style={styles.slider__images} source={ this.props[this.props.isLocal?'localImages':'remoteImages'][this.props.current] }/>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button title = ' - ' onPress = { this.prev.bind(this) }/>
                    <Button title = 'Переход' onPress = { this.localSlider.bind(this) }/>
                    <Button title = ' + ' onPress = { this.next.bind(this) }/>
                </View>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slider__wrapper: {
        width: 304,
        height: 204, 
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 4
    },
    slider__images: {
        width: 300,
        height: 200,
        flexDirection: 'row'
    },
    buttonWrapper: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20 
    }
});

const mapStateToProps = (state) => ({
    current: state.current,
    isLocal: state.isLocal,
    localImages: state.localImages,
    remoteImages: state.remoteImages
  })
  const mapDispatchToProps = (dispatch) => ({
    setCurrent(current){
      dispatch(setCurrent(current))
    },
    localSlider(isLocal, current){
      dispatch(localSlider(isLocal, current))
    }
  })
  
  export default connect (mapStateToProps, mapDispatchToProps)(Slider)