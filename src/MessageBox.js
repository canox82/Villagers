import React from 'react'

class MessageBox extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <b>Messages:</b>
                <ul >
                    {this.props.message.map((item,index) => {
                        return (
                            <li key={index}>{item}</li> 
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default MessageBox
