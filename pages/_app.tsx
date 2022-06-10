import React from 'react';
import App from "next/app"
import "../styles/style.css"

// import { Container } from './styles';

class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props;
  
      return (
        <Component {...pageProps} />
      );
    }
  }

export default MyApp;