# inkdrop-slackify
Convert markdown to Slack format and send to clipboard.  
(this plugin is inspired by https://www.npmjs.com/package/slackify)

## Install

```sh
ipm install inkdrop-slackify
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

## Version history
- v1.1.0
  - Support Inkdrop v4.x 
- v1.0.0 
  - Initial Release


