import React from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

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
                        blah blah blah
                    </Container>

                </Container>
            </div>
        )
    }
};