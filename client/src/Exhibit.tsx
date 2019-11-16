import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { IntroVc } from './ViewControllers/IntroVc'
import { FloorOneVc } from './ViewControllers/FloorOneVc'
import { FloorTwoVc } from './ViewControllers/FloorTwoVc'
import { FloorThreeVc } from './ViewControllers/FloorThreeVc'
export interface ExhibitProps {

};

export interface ExhibitState {

};

export class Exhibit extends React.Component<ExhibitProps, ExhibitState> {
  constructor(props: ExhibitProps) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      <Container textAlign='center'>
        <Header as='h2'>Data + You</Header>
      </Container>
      <Divider/>
      <IntroVc></IntroVc>
      <Divider/>
      <FloorOneVc></FloorOneVc>
      <Divider/>
      <FloorTwoVc></FloorTwoVc>
      <Divider/>
      <FloorThreeVc></FloorThreeVc>


      </div>
    );
  }
}

