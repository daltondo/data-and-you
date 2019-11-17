import React from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { PictureObject } from '../Components/PictureObject';

export interface FloorThreeProps {

};

export interface FloorThreeState {

};

export class FloorThreeVc extends React.Component<FloorThreeProps, FloorThreeState> {
    constructor(props: FloorThreeProps) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <div>
                <Container text>
                    <Header as='h3'>Floor Three</Header>
                    <PictureObject
                        title="Burning Man ICE Cage"
                        picture="iceCage.jpg" />

                </Container>
            </div>
        )
    }
};