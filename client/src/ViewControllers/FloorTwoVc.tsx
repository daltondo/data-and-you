import React from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Grid } from 'semantic-ui-react'
import { PictureObject } from '../Components/PictureObject';

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
                <Header as='h3' textAlign='center'>Floor Two</Header>
                <Grid>
                    
                    <PictureObject 
                    title="Quick Fix"
                    artist="Dries Depoorter"
                    picture="quickfix.jpg"/>
                    <PictureObject
                    title="The Library of Missing Data Sets 2.0"
                    artist="Mimi Onuoha"
                    picture="missingdatasets.png"/>
                </Grid>
                <br></br>
                
            </div>
        )
    }
};