import React from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { introduction } from '../text/Introduction.json'

export interface IntroProps {

};

export interface IntroState {

};

export class IntroVc extends React.Component<IntroProps, IntroState> {
    constructor(props: IntroProps) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <div>
                <Container text>
                    <Header as='h3'>Introduction</Header>
                    <Container text>
                        {introduction}
                    </Container>
                </Container>
            </div>
        )
    }
};