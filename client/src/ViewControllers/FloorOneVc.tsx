import React from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { PictureObject } from '../Components/PictureObject';
import { floorOne } from '../text/Introduction.json';
export interface FloorOneProps {

};

export interface FloorOneState {

};

export class FloorOneVc extends React.Component<FloorOneProps, FloorOneState> {
    constructor(props: FloorOneProps) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <div>
                <Container text>
                    <Header as='h3'>Floor One</Header>
                    <Container text>
                        {floorOne}
                    </Container>
                    <br></br>
                    <Container>
                    <PictureObject 
                        title="Visual Depictions: San Francisco"
                        artist="Refik Anadol"
                        picture="/refikanadol.jpg"/>
                    </Container>

                </Container>
            </div>
        )
    }
};