import React, { Component } from 'react';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#F5F5DC'}} hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'black', fontSize: '22px'}}>NewsBits 📃</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'black'}}>
          <Tab tabStyle={{backgroundColor:'#F5F5DC'}} activeTabStyle={{backgroundColor:'#F5F5DC'}} textStyle={{color:'black'}} activeTextStyle={{color:'black'}} heading="Top News">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#F5F5DC'}} activeTabStyle={{backgroundColor:'#F5F5DC'}} textStyle={{color:'black'}} activeTextStyle={{color:'black'}} heading="Arts">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#F5F5DC'}} activeTabStyle={{backgroundColor:'#F5F5DC'}} textStyle={{color:'black'}} activeTextStyle={{color:'black'}} heading="Food">
            <Tab3 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#F5F5DC'}} activeTabStyle={{backgroundColor:'#F5F5DC'}} textStyle={{color:'black'}} activeTextStyle={{color:'black'}} heading="Science">
            <Tab4 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#F5F5DC'}} activeTabStyle={{backgroundColor:'#F5F5DC'}} textStyle={{color:'black'}} activeTextStyle={{color:'black'}} heading="Tech">
            <Tab5 />  
          </Tab>
        </Tabs>
      </Container>
    );
  }
}