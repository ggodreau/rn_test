/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    midIsActive: false,
    bstripeTop: '#3f77b0',
    bstripeBot: '#014b96',
    fIsActive: false,
    fstripeTop: '#b2b2b2',
    fstripeBot: '#979797',
    fdate: new Date(+new Date() + 2.16e7),
  }

  render() {
    return (
      <div id="parent">
      </div>
    )
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
  html: {
    margin: 0,
    overflow: hidden,
    height: 100,
  }
  body: {
    margin: 0,
    overflow: hidden,
    height: 100,
  }
  parent: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: absolute,
    background: lightgrey,
    opacity: 1,
  }
  header: {
    height: 5%,
    width: 100%,
    background: #00479d,
    opacity: 1,
    position: relative,
    zIndex: 1,
  }
  upper: {
    height: 27%,
    width: 100%,
    background: green,
    opacity: 1,
    position: relative,
    zIndex: 1,
  }
  break: {
    height: 0.3%,
    width: 100%,
    background: #ddf8ff,
    position: relative,
    zIndex: 1,
  }
  middle: {
    height: 62%,
    width: 100%,
    background: green,
    opacity: 1,
  }
  bottom: {
    height: 14%,
    width: 100%,
    background: pink,
    position: relative,
    zIndex: 1,
    opacity: 1,
  }
  qr: {
    position: relative,
    top: 30.2%,
    left: 80.5%,
    height: 0,
    width: 0,
    margin: 0,
    zIndex: 0,
  }
  showCode: {
    position: relative,
    top: 39.5%,
    left: 68%,
    height: 0,
    width: 0,
    fontWeight: 999,
    fontFamily: 'Lucida Grande', sans-serif,
    color: black,
    fontSize: 16px,
    margin: 0,
    zIndex: 0,
  }
  capLogo: {
    position: relative,
    top: 30%,
    left: 0%,
    height: 0,
    width: 0,
    margin: 0,
    zIndex: 0,
    opacity: 0.7,
    animation: logo 5s steps(300, end) 0s infinite,
  }
  capText: {
    fontFamily: 'Lucida Grande', sans-serif,
    zIndex: 1,
    position: relative,
    top: -205%,
    width: 100%,
    textAlign: center,
    color: white,
    fontWeight: 999,
    fontSize: 52px,
  }
  midText: {
    fontFamily: 'Lucida Grande', sans-serif,
    zIndex: 1,
    position: relative,
    top: -60%,
    width: 100%,
    textAlign: center,
    color: white,
    fontWeight: 999,
    fontSize: 32px,
  }
  touchMid: {
    zIndex: 3,
    position: relative,
    top: -109%,
    height: 100%,
    width: 100%,
    background: transparent,
    opacity: 0.3,
  }
  touchBot: {
    zIndex: 4,
    position: relative,
    top: -160%,
    height: 100%,
    width: 100%,
    background: transparent,
    opacity: 0.3,
  }
  botText: {
    fontFamily: 'Lucida Grande', sans-serif,
    zIndex: 1,
    position: relative,
    width: 100%,
    textAlign: center,
    color: white,
    fontWeight: 999,
    fontSize: 22px,
  }
  shim1: {
    top: -85%,
  }
  shim2: {
    top: -58%,
  }
  stripeHeader: {
    top: 0%,
    height: 15%,
    width: 100%,
    position: absolute,
    background: #00479b,
  }
  ustripeTop: {
    top: -50%,
    left: -5%,
    right: 0%,
    height: 50%,
    background: #6089c3,
    position: relative,
    animation: st 15s steps(300, end) 0s infinite,
    fontFamily: 'Montserrat', sans-serif,
  }
  ustripeTopBg: {
    top: 0,
    height: 50%,
    background: #a2b9da,
  }
  ustripeBot: {
    top: -100%,
    left: -5%,
    right: 0%,
    height: 50%,
    background: #2e64a8,
    position: relative,
    animation: st 15s steps(300, end) 0s infinite,
    fontFamily: 'Montserrat', sans-serif,
  }
  ustripeBotBg: {
    top: -50%,
    height: 50%,
    position: relative,
    background: #83a1d4,
  }
  notchTop: {
    transform: rotate(135deg),
    top: -187%,
    left: -6%,
    width: 5px,
    position: relative,
    animation: n 15s steps(300, end) 0s infinite,
    background: transparent,
    borderTop: 7px solid transparent,
    borderBottom: 7px solid transparent,
    borderLeft: 7px solid red, /* #a2b9da;*/
  }
  tickTop: {
    transform: rotate(135deg),
    top: -159%,
    left: -6%,
    width: 5px,
    background: transparemt,
    position: relative,
    animation: t 15s steps(300, end) 0s infinite,
    borderTop: 10px solid transparent,
    borderBottom: 10px solid transparent,
    borderLeft: 10px solid #6089c3,
  }
  notchBot: {
    transform: rotate(225deg),
    top: -196.3%,
    left: -6%,
    width: 5px,
    position: relative,
    animation: n 15s steps(300, end) 0s infinite,
    background: transparemt,
    borderTop: 7px solid transparent,
    borderBottom: 7px solid transparent,
    borderLeft: 7px solid red, /*#83a1d4;*/
  }
  tickBot: {
    transform: rotate(225deg),
    top: -170.9%,
    left: -6%,
    width: 5px,
    background: transparemt,
    position: relative,
    animation: t 15s steps(300, end) 0s infinite,
    borderTop: 10px solid transparent,
    borderBottom: 10px solid transparent,
    borderLeft: 10px solid #2e64a8,
  }
  @keyframes st {
    0% {
      left: -5%,
      right: 0%,
      width: 0%,
    }
    40% {
      left: -5%,
      right: 105%,
      width: 105%,
    }
    60% {
      left: 50%,
      right: 105%,
      width: 50%,
    }
    80% {
      left: 50%,
      right: 105%,
      width: 50%,
    }
    100% {
      left: 100%,
      right: 105%,
      width: 0%,
    }
  }
  @keyframes t {
    0% {
      left: -6%,
    }
    40% {
      left: 99%,
    }
    60% {
      left: 99%,
    }
    80% {
      left: 99%,
    }
    100% {
      left: 99%,
    }
  }
  @keyframes n {
    0% {
      left: -5.5%,
    }
    40% {
      left: -5.5%,
    }
    60% {
      left: 49.8%,
    }
    80% {
      left: 49.8%,
    }
    100% {
      left: 99.8%,
    }
  }
  @keyframes logo {
    0% {
      left: -40%,
      top: 50%,
    }
    100% {
      left: 105%,
      top: -100%,
    }
  }
  bstripeTop: {
    top: 0,
    height: 50%,
    background: #3c75b6,
    position: relative,
  }
  bstripeBot: {
    height: 50%,
    background: #00479d,
  }
  fstripeTop: {
    top: 0,
    height: 50%,
    background: #afaeaf,
    position: relative,
  }
  fstripeBot: {
    height: 50%,
    background: #575659,
  }
});
