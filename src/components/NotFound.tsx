import React from 'react'

import { withRouter, RouteComponentProps } from 'react-router'

type Props = RouteComponentProps & {}

const _NotFound: React.FC<Props> = ({ history }) => {
    return (
        <div id="notFound">
            <h3>Not Found</h3>
            <p>We couldn't find that page.</p>

            <button type="button" onClick={() => history.goBack()}>
                Back
            </button>
        </div>
    )
}

export const NotFound = withRouter(_NotFound)
