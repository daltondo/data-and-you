import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Grid } from 'semantic-ui-react'
import { IntroVc } from './ViewControllers/IntroVc'
import { FloorOneVc } from './ViewControllers/FloorOneVc'
import { FloorTwoVc } from './ViewControllers/FloorTwoVc'
import { FloorThreeVc } from './ViewControllers/FloorThreeVc'
import './css/Exhibit.css'
export interface ExhibitProps {

};

export interface ExhibitState {
  currentFloor: number;
};

export class Exhibit extends React.Component<ExhibitProps, ExhibitState> {
  constructor(props: ExhibitProps) {
    super(props);
    this.state = {
      currentFloor: 0
    };
  }

  continue = () => {
    this.setState({currentFloor: this.state.currentFloor + 1});
  }

  reset = () => {
    this.setState({currentFloor: 0});
  }

  back = () => {
    this.setState({currentFloor: this.state.currentFloor - 1});
  }

  render() {
    return (
      <div className="centered">
      {this.state.currentFloor == 0 && (
        <Container textAlign='center'>
            <Header>Data + You
              <Header.Subheader>
                An exhibition curated by David Kim, Dalton Do, Hanson Liu, and Arnav Jain
              </Header.Subheader>
            </Header>
        </Container>
      )}

      {this.state.currentFloor == 1 && <IntroVc></IntroVc>}
      {this.state.currentFloor == 2 && <FloorOneVc></FloorOneVc>}
      {this.state.currentFloor == 3 && <FloorTwoVc></FloorTwoVc>}
      {this.state.currentFloor == 4 && <FloorThreeVc></FloorThreeVc>}
      <br></br>
      <Container textAlign='center'>
        {this.state.currentFloor > 0 &&
          <Button onClick={this.back}>Back</Button>}
        {this.state.currentFloor < 4 &&
            <Button onClick={this.continue}>Continue</Button>}
        {this.state.currentFloor == 4 &&
          <Button onClick={this.reset}>Reset</Button>}

      </Container>

      </div>
    );
  }
}

