import React, { Component } from 'react';
import { Route, RouteComponentProps, withRouter  } from 'react-router-dom';
import About from '../Pages/About';
import WhoAre from '../Pages/WhoAre';
import WhereAre from '../Pages/WhereAre';

interface AboutSectionProps extends RouteComponentProps<any, any> {
}

/**
 * Class Component for handle routes to About Section.
 * 
 * @component
 * @example
 * return (
 *   <AboutSection />
 * )
 */
class AboutSection extends Component<AboutSectionProps> {

    render() {
        return <>
            <Route exact path={`${this.props.match.url}`} component={About} />
            <Route exact path={`${this.props.match.url}/whoare`} component={WhoAre} />
            <Route exact path={`${this.props.match.url}/whereare`} component={WhereAre} />
        </>
    }
}

export default withRouter(AboutSection);