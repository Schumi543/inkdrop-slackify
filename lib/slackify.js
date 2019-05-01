'use strict';

const unified = require('unified');
const markdown = require('remark-parse');

function send_to_clipboard(content) {
    const e = document.createElement('textarea');
    e.value = content;
    document.querySelector('body').append(e);
    e.select();
    document.execCommand('copy');
    e.remove();
}

function convert() {
    const editor = inkdrop.getActiveEditor();
    const codeMirror = editor.cm;
    const selected_md = codeMirror.getSelection('\n');
    const slackify = require('./SlackifyCompiler');
    const processor = unified().use(markdown).use(slackify, {listItemIndent: '1'});
    const output = processor.processSync(selected_md).toString();
    console.log(output);
    send_to_clipboard(output);
}

module.exports = {
    activate() {
        this.subscription = inkdrop.commands.add(document.body, {
            'slackify': () => convert()
        })
    },
    deactivate() {
        this.subscription.dispose()
    }
};