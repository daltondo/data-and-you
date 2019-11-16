import React from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Image } from 'semantic-ui-react'

export interface PictureObjectProps {
    title: String;
};

export interface PictureObjectState {

};

export class PictureObject extends React.Component<PictureObjectProps, PictureObjectState> {
    constructor(props: PictureObjectProps) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <div>
                <Container>
                    <Image src="/images/img.png" size="small"/>
                    <Header as='h3'>{this.props.title}</Header>
                    <Container text>
                        blah blah blah  
                    </Container>
                </Container>
            </div>
        )
    }
};
