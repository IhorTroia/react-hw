import React from "react";
import Editor from "@toast-ui/editor";


class MarkdownEditor extends React.Component {
    refEditor = React.createRef()

    componentDidMount() {
        const editor = new Editor({
            el: this.refEditor.current,
            previewStyle: 'tab',
            height: '500px',
            events: {
                change: () => {
                    const content = editor.getMarkdown()
                    this.props.onContentChange(content)
                }
            }
        })
    }

    render() {
        return (
            <div ref={this.refEditor}></div>
        )
    }
}

export default MarkdownEditor;