import * as React from 'react';

export interface SurveyProps {

};

export interface SurveyState {

};

export class Survey extends React.Component<SurveyProps, SurveyState> {
    constructor(props: SurveyProps) {
        super(props);

    }

    render() {
        return (
            <div>This is the survey</div>
        );
    }
};