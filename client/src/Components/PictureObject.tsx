import React from 'react'
import { Container, Header, Grid, Image } from 'semantic-ui-react'
import '../css/Exhibit.css'
export interface PictureObjectProps {
    title: String;
    artist?: String;
    picture: String;
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
                <Grid columns={2}>
                    <Grid.Column>
                        <Image src={this.props.picture} size="medium"/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4'>{this.props.title}
                        {this.props.artist &&
                            <Header.Subheader>{this.props.artist}</Header.Subheader>}
                        </Header>
                        <Container text>
                            blah blah blah  
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
};
