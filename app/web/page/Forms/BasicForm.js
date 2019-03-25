import React, { PureComponent } from '@alipay/bigfish/react';
import MonacoEditor from 'react-monaco-editor';
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
// import 'monaco-editor/esm/vs/editor/contrib/find/findController';
// import * as monaco from 'monaco-editor';
// import 'monaco-editor/esm/vs/editor/editor.main';

export default class BasicForms extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      code: '# type your code...',
    }
  }

  onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
    // this.setState({
    //   code: newValue,
    // });
  }

  editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor, monaco);
    editor.focus();
  }

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true
    };
    return ( 
      <MonacoEditor
        width="1000"
        height="1000"
        language="python"
        theme="vs"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}
