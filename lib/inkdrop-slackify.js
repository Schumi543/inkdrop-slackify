'use babel';

import InkdropSlackifyMessageDialog from './inkdrop-slackify-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(InkdropSlackifyMessageDialog);
    inkdrop.layouts.addComponentToLayout('modals', 'InkdropSlackifyMessageDialog');
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout('modals', 'InkdropSlackifyMessageDialog');
    inkdrop.components.deleteClass(InkdropSlackifyMessageDialog);
  }

};
