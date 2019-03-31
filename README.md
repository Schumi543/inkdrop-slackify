# inkdrop-slackify
Convert markdown to Slack format and send to clipboard.  
(this plugin is inspired by https://www.npmjs.com/package/slackify)

## Install

```sh
ipm install install slackify
```

## Usage

Say we have the following Markdown :

```
- foo
  - **bar**
  - *baz*
```

With this plugin, it yields:

```
● foo
  ● ​*bar*​
  ● ​_baz_​
```


