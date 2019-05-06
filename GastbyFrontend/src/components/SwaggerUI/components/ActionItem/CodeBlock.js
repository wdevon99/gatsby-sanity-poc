import React from 'react'

const CodeBlock = ({ code }) => {
    return (
        <pre style={styles.codeBlock}>
            <code>
                {JSON.stringify(code, undefined, 2)}
            </code>
        </pre>

    )
}

const styles = {
    codeBlock: {
        backgroundColor: "#082c42",
        color: "#f2f2f2",
        maxHeight: 300,
        maxWidth: 600,
        marginTop: 10,
        padding: 15,
        borderRadius: 5
    }
}

export default CodeBlock;