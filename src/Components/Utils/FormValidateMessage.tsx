import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

interface FormValidateMessageProps {
    errormessage?: string
}

/**
 * Class Component for showing the errormessage of the field.
 * @component
 * @param {string} errormessage Error message of the field
 * @example
 * const message = 'This field is invalid'
 * return (
 *   <FormValidateMessage errormessage={message} />
 * )
 */
class FormValidateMessage extends Component<FormValidateMessageProps>  {
    // constructor(props: FormValidateMessageProps) {
    //     super(props);
    // }

    render() {
        const { errormessage } = this.props;

        return <Form.Text className="text-muted">
            <Badge variant="danger">{errormessage}</Badge>
        </Form.Text>
    }
}

export default FormValidateMessage;