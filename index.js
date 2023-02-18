function App() {

    const [text, setText] = React.useState(`# H1\n## H2\n[title](https://www.example.com)\n\`code\`\n\`\`\`\n{"firstName": "John","lastName": "Smith","age": 25}\n\`\`\`\n- First item\n- Second item\n- Third item\n\n> blockquote\n\n![alt text](image.jpg)\n **bold text**`);

    marked.setOptions({
        breaks: true
    })

    const renderer = new marked.Renderer();

    return(
        <div className="text-center px-5">
            <h1 className="title">Markdown Previewer</h1>
            <div id="editor-container" className="w-50 mx-auto">
                <p className="editor-title">Editor</p>
                <textarea 
                    id="editor" 
                    name="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    className="textarea"
                />
            </div>
            <div id="preview-container" className="w-75 mx-auto mb-5">
                <p className="preview-title mt-4">Previewer</p>
                <div id="preview" dangerouslySetInnerHTML={{
                    __html: marked(text, {renderer: renderer})
                }}></div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))