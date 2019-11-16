import React from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

export interface FloorTwoProps {

};

export interface FloorTwoState {

};

export class FloorTwoVc extends React.Component<FloorTwoProps, FloorTwoState> {
    constructor(props: FloorTwoProps) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <div>
                <Container text>
                    <Header as='h3'>Floor Two</Header>

                </Container>
            </div>
        )
    }
};